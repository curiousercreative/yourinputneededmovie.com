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
                $('#video iframe').css({
                    position: 'fixed'
                });
                
            // If the api is ready
                if (typeof YT !== 'undefined' && typeof YT.Player !== 'undefined') {
                    console.log(YT.Player);
                    new YT.Player($('#video iframe').get(0), {
                        videoId: 'video',
                        events: {
                            'onStateChange': videoStateChange
                        }
                    });
                }
                else {
                    onYouTubeIframeAPIReady = function () {
                        new YT.Player($('#video iframe').get(0), {
                            videoId: 'video',
                            events: {
                                'onStateChange': videoStateChange
                            }
                        });
                    }
                }
            }
        }
        
        videoStateChange = function (data) {
            if (data.data === 0) {
                $('#video iframe').css({
                    position: 'static'
                });
            }
        }
        
        $(window).resize(function () {
           scaleWebsite();
           scaleVideo();
        });
        
        scaleWebsite();
        scaleVideo();
        showVideo();
    });