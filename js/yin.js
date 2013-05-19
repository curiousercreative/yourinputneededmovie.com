/* - - - - - - - - - - - - - - - - - -
jQuery & java scripting by Winston Hoy
For Clara Cantor, claramakesfunstuff.com

jQuery.js contains core + ui effects core & exists function
contact me if you want to use it
winstonhoy@gmail.com
 - - - - - - - - - - - - - - - - - - -*/
var animation_duration = 1000;

// Execute when all downloads are complete
    $(window).load(function () {
        $("body").css("visibility", "visible");
        
        function zoom_out () {
            $("body").css({
                "-moz-transform": "scale(.05)",
                "-moz-transition-duration" : "2s",
                "-webkit-transform": "scale(.5)",
                "-webkit-transition-duration" : "1s"
            });
        }
        
        function zoom_in () {
            $("body").css({
                "-moz-transform": "scale(1.0)",
                "-moz-transition-duration" : "1s",
                "-webkit-transform": "scale(1.0)",
                "-webkit-transition-duration" : "1s"
            });
        }
        
        //zoom_out();
        
        //window.setTimeout(zoom_in, 2000);
        //$("body").animate({"-moz-transform": "scale(.5,.5)"}, animation_duration);
    });

// Execute when document structure is ready
    $(document).ready(function () {            
    // Hide the body until loaded
        $("body").css("visibility", "hidden");
    
    // SVG detection
        if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) {
        // replace img with svg
            $("img#bg").remove();
            $('<object id="bg" data="graphics/bg.svg"></object>').prependTo("body");
        }

        
    // anchor rollovers
        $("a").hover(function () {
            $(this).stop().animate({color: "#FFFFFF"}, animation_duration);    
        }, function () {
            $(this).stop().animate({color: "#000000"}, animation_duration);
        });
    });