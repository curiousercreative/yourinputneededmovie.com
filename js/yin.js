/* - - - - - - - - - - - - - - - - - -
jQuery & java scripting by Winston Hoy

jQuery.js contains core + ui effects core & exists function
contact me if you want to use it
winston@curiousercreative.com
 - - - - - - - - - - - - - - - - - - -*/
    preserveAspect = false;
    aspectRatio = 1.6;

// Execute when all downloads are complete
    $(window).load(function () {
        $("body").css("visibility", "visible");
    });
    
    setTimeout(function () {$('body').css('visibility', 'visible');}, 4000);

    $("body").css("visibility", "hidden");

// Execute when document structure is ready
    $(document).ready(function () {            
    // Website scaling
        scaleWebsite = function () {
            if ($(window).width() > 1399) {
                preserveAspect = true;
            }
            else preserveAspect = false;
            
            if (preserveAspect) {
                var w = $(window).width()*0.95625;
                var h = $(window).height();
                
            // Set a temporary fontSize
                fontSize = $('body').width() * 14/1530;
                fontSize = fontSize < 12 ? 12 : fontSize;
                
                if (w/(h-fontSize-$('#footer').height()) > aspectRatio) {
                // It won't fit, manually set the width and let it center
                    var newWidth = (h-fontSize-$('#footer').height())*aspectRatio+'px';
                }
                else {
                // It'll fit, scale up
                    var newWidth = window.outerWidth * 0.95625;
                }
                
            // Set the width of the body
                $('body').css('width', newWidth);
                
            // Set the width and margin of the footer
                $('#footer').css({
                    width: newWidth,
                    left: ($(window).width()-$('body').width())/2+'px',
                    position: 'fixed'
                }); 
            }
            else {
                $('body').css('width', "95.625%");
            }
    
        // Set the appropriate font-size
            fontSize = $('body').width() * 14/1530;
            fontSize = fontSize < 12 ? 12 : fontSize;
            $('body').css('font-size', fontSize+'px');
            
        // Adjust footer
            if ($('body').height() + $('#footer').height() + fontSize > $(window).height()) {
                $('body').css('padding-bottom', $('#footer').height()+fontSize/2);
                $('#footer').css({
                    position: 'absolute',
                    left: 0
                });
            }
            else {
                $('#footer').css({
                    position: 'fixed',
                    left: '2.1875%'
                });
            }
        
        }
        
    // Scale video
        scaleVideo = function () {
            $('#video').height($('#video').width()*9/16);   
        }
        
    // Show video
        showVideo = function () {
            if (introVideo) {
                if (debug) console.log('introVideo takeover');
                
                $('#video iframe').css({
                    position: 'fixed'
                });
                
                $('.updates').css('display', 'none');
            }
        }
    
    // Hide Video
        hideVideo = function () {    
            $('#video iframe').css({
                position: 'static'
            });
            
            $('.updates').css('display', 'block');
        }
    // Test white space
        testWhiteSpace = function () {
        // Setup some test markup, inline-block elements with spaces between them
            $('body').append('<div id="testWhiteSpace" style="white-space: nowrap; width: 100px; position: absolute; top: -100%; left: -100%;"> <div style="display: inline-block; margin: 0; padding: 0; width: 33.33333333333333%"></div> <div style="display: inline-block; margin: 0; padding: 0; width: 33.33333333333333%"></div> <div style="display: inline-block; margin: 0; padding: 0; width: 33.33333333333333%"></div></div>');
            
        // Check the spacing between two of them
            var first = $('#testWhiteSpace > div').eq(0);
            var second = $('#testWhiteSpace > div').eq(1);
            var pxSpacing = second.position().left - first.width() + first.position().left;
            var emSpacing = pxSpacing / parseFloat($('#testWhiteSpace').css('font-size'));
            
        // Check to make sure this spacing is changing with font-size and then average the two em spacing values
            $('#testWhiteSpace').css('font-size', '54px');
            var newPxSpacing = second.position().left - first.width() + first.position().left;
            var newEmSpacing = newPxSpacing / parseFloat($('#testWhiteSpace').css('font-size'));
            
            if (newPxSpacing == pxSpacing) {
            // The word-spacing isn't changing with font-size, set it as a px value
                var wordSpacing = pxSpacing + 'px';
            }
            else {
            // The word-spacing is changing with the font-size, average the two emSpacing values
                var wordSpacing = ((emSpacing + newEmSpacing) / 2) + 'em';
            }
            
        // This is our style rule to apply a fix for it
            var style = '.col_container { word-spacing: -'+wordSpacing+'; }';
            $('#testWhiteSpace').css('word-spacing', '-'+wordSpacing);
            
        // Append to the head
            if ($('head #whiteSpaceFix').exists()) $('head #whiteSpaceFix').html(style);
            else $('head').append('<style id="whiteSpaceFix">'+style+'</style>');
            
        // Check to make sure the browser is rendering the negative word-spacing
            var renderedPxSpacing = second.position().left - first.width() + first.position().left;
            if (renderedPxSpacing == newPxSpacing) {
            // It's not rendering the negative white-space, apply a rule for negative margin-right instead
                style = '.col { margin-right: -'+wordSpacing+';}';
                $('head #whiteSpaceFix').append(style);
            }
            
        // Clean up the test markup
            $('#testWhiteSpace').remove();
        }
        
    // Handler for when api is ready
        onYouTubeIframeAPIReady = function () {
            if (debug) console.log('api ready');
            
        // Create the video player
            player = new YT.Player('player', {
                videoId: 'ZLL9fbBtApA',
                playerVars: {'autoplay': introVideo ? 1 : 0},
                events: {'onStateChange': videoStateChange}
            });
            
        // Show it fullscreen
            if (introVideo) showVideo();   
        }
        
    // Handler for when video state changes
        videoStateChange = function (data) {
            if (data.data === YT.PlayerState.ENDED) {
                if (debug) console.log('video ended');
                
            // Exit fullscreen
                hideVideo();
                
        /* this stuff doesn't work reliably
            // Seekto 0 and pause
                player.seekTo(0);
                
                player.pauseVideo();
        */
            }
        }
        
    // Concept video link
        $('a#conceptVideo').click(function (e) {
           e.preventDefault();
           player.loadVideoById('yxZPdQvkU-A');
           player.playVideo();
        });
        
    // Resize 
        $(window).resize(function () {
           scaleWebsite();
           scaleVideo();
        });
        
    // Esc key hides video
        $(window).keyup(function (e) {
            if (e.which == 27) hideVideo();
        })
        
    // Do stuff
        scaleWebsite();
        scaleVideo();
        testWhiteSpace();
    });