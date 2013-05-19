/* - - - - - - - - - - - - - - - - - -
jQuery & java scripting by Winston Hoy

jQuery.js contains core + ui effects core & exists function
contact me if you want to use it
winston@curiousercreative.com
 - - - - - - - - - - - - - - - - - - -*/
    preserveAspect = false;

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
                
                if (w/(h-35-$('#footer').height()) > 2125/1460) {
                // It won't fit, manually set the width and let it center
                    var newWidth = (h-35-$('#footer').height())*2125/1460+'px';
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
            if (!preserveAspect) {
                if ($('body').height() + $('#footer').height() +fontSize > $(window).height()) {
                    $('body').css('padding-bottom', $('#footer').height());
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
        }
        
    // Scale video
        scaleVideo = function () {
            $('#video').height($('#video').width()*9/16);   
        }
        
        $(window).resize(function () {
           scaleWebsite();
           scaleVideo();
        });
        
        scaleWebsite();
        scaleVideo();
    });