<?php
/* Lets skip the intro video it sucks
    session_start();
    if (isset($_SESSION['visited'])) {
        $introVideo = 'false';
    }
    else {
        $introVideo = 'true';
        $_SESSION['visited'] = true;
    }
*/

    $introVideo = 'false';
?>
<html>
    <head>
        
        <title>Your Input Needed - Documentary Feature Film - The Story of Hackers, Makers, Movers and Shakers</title>
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.5, user-scalable=yes">
            
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> 
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> 
        
        <link href="yin.css?1" rel="stylesheet" type="text/css" />
        <!--[if IE]>
            <link href="ie.css" rel="stylesheet" type="text/css" />
        <![endif]-->
        
        <!--[if IE 7]>
            
        <![endif]-->
        
        <!--[if lt IE 7]>
            <script>
                alert("Your web browser does not support features required to display this website. Please try browsing in either Firefox or Google Chrome (both are free)");
            </script>
            <style>
                body {
                    display: none;
                }
            </style>
            <meta http-equiv="REFRESH" content="0;url=http://www.mozilla.com/firefox/">
            </head>
        <![endif]-->
        <script type="text/javascript">
            introVideo = <?php print $introVideo; ?>;
            <?php
              if (strpos($_SERVER['SERVER_NAME'], '.loc') !== FALSE) print 'var debug = true;';
              else print 'var debug = false;';
            ?>
        </script>
        
        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/yin.js?4" type="text/javascript"></script>
    </head>

    <body>
        
        <div id="header">
            <h1>Your Input Needed</h1>
            <div id="social_buttons">
                <!-- AddThis Button BEGIN 
                <div class="addthis_toolbox addthis_default_style">
                    <a class="addthis_counter addthis_pill_style"><img src="/graphics/yin_share.png" alt="Share Your Input Needed Documentary Film" /></a>
                </div>
                <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-51a3c89114e54357"></script>
                AddThis Button END -->
                <a href="http://twitter.com/yourinputneeded"><img src="/graphics/yin_twitter.png" alt="Share Your Input Needed Documentary Film via Twitter" /></a>
                <a href="http://www.facebook.com/YourInputNeeded"><img src="/graphics/yin_fb.png" alt="Share Your Input Needed Documentary Film via Facebook" /></a>
                <a href="mailto:info@yourinputneededdoc.com?subject=Here's my input!"><img src="/graphics/yin_email.png" alt="Share Your Input Needed Documentary Film via email" /></a>
            </div> <!-- end #social_buttons -->
            
            <div id="lead_in">
                A wiki-documentary about hackers, makers, movers &amp; shakers re-making the world without permission.
            </div>
        </div> <!-- end #header -->
        
        <div class="col_container">
            <div class="two-thirds col left">
                <div id="video">
                    <div id="player"></div>
                    <!-- <iframe src="http://www.youtube.com/embed/ZLL9fbBtApA?rel=0<?php if ($introVideo == 'true') print '&autoplay=1'; ?>" frameborder="0" allowfullscreen></iframe> -->
                </div>
                
                <div class="col_container">
                    <div class="crew half col">
                        <h2>Who's involved?</h2>
                        <div class="col_container">
                            <div class="profile col half">
                                <img src="/graphics/jeffrey.jpg" alt="Jeffrey Buras, Your Input Needed Director" />
                                <h4>Jeffrey Buras</h4>
                                <h5>Producer/Director</h5>
                                <p>
                                    Documentary Filmmaker, Cinematographer, Austin resident and American University graduate.
                                </p>
                            </div> <!-- end .profile -->
                            
                            <div class="profile col half">
                                <img src="/graphics/liza.jpg" alt="Liza Gipsova, Your Input Needed Director of Photography" />
                                <h4>Liza Gipsova</h4>
                                <h5>Director of Photography</h5>
                                <p>
                                    Multidisciplinary creative, Curiouser Creative co-founder, American University graduate and DC-area native.
                                </p>
                            </div> <!-- end .profile -->
                        </div> <!-- end .col_container -->
                        
                        <div class="col_container">
                            <div class="profile col half">
                                <img src="/graphics/winston.jpg" alt="Winston Hoy, Your Input Needed Co-Producer" />
                                <h4>Winston Hoy</h4>
                                <h5>Co-Producer</h5>
                                <p>
                                    Self-taught filmmaker and web developer, Curiouser Creative co-founder and non-profit activist.
                                </p>
                            </div> <!-- end .profile -->
                            
                            <div class="profile col half">
                                <img src="/graphics/brian.jpg" alt="Brian Briskey, Your Input Needed Marketing Director" />
                                <h4>Brian Briskey</h4>
                                <h5>Marketing Director</h5>
                                <p>
                                    Collaborator and lover of cause/issue based film, Volunteer Service Medal award winner, Austin resident.
                                </p>
                            </div> <!-- end .profile -->
                        </div> <!-- end .col_container -->
                    </div> <!-- end .crew -->
                    
                    <div class="twitter half col">
                        <h2>What's New?</h2>
                        <a class="twitter-timeline"  href="https://twitter.com/YourInputNeeded"  data-widget-id="339116407449063425" data-chrome="noheader nofooter noborders noscrollbar transparent" data-tweet-limit="2">Tweets by @YourInputNeeded</a>
                        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                    </div> <!-- end .twitter -->
                </div> <!-- end .col-container -->
            </div> <!-- end .two-thirds -->
            
            <div class="third col right">
                <div class="synopsis">
                    <h2>What's the Story?</h2>
                    <p>We, as a society, are in the midst of a <strong>radical shift in the way we produce goods</strong>. <a id="conceptVideo" href="http://www.youtube.com/watch?v=yxZPdQvkU-A">View the concept video</a>.</p>
                    <p>
                        The rapid, open and <strong>collaborative nature of the internet</strong> combined with <strong>micro-manufacturing technology</strong>
                        and <strong>decentralized organizing tactics</strong> has transformed community landscapes, product markets and nearly
                        every aspect of our lives. The explosion of open information, technology, and crowdsourcing is driving new ideas, empowering people, and
                        building communities; but will it threaten economies, public welfare, and our way of living?
                    </p>
                    <p>
                        Your Input Needed is an <strong>open source, feature-length documentary exploring the huge changes on the horizon</strong>, and your input is, in fact, needed!
                    </p>
                </div> <!-- end .synopsis -->
                
                <div class="get_involved">
                    <h2>How Can You Help?</h2>
                    <p>
                        We're currently interviewing hackers, makers, movers and shakers. Every interview and video clip we've recorded is
                        publicly available for you view and download, but also to comment, contribute to and share. It's all happening at
                        <a href="http://www.hitrecord.org/collaborations/7635">HitRecord.com</a>.
                    </p>
                    
                    <p>
                        For more information or get involved with the core team, e-mail us at <a href="mailto:info@yourinputneededdoc.com?subject=Here's my input!">info@yourinputneededdoc.com</a>.
                    </p>
                </div> <!-- end .get_involved -->
                
                <div class="updates">
                    <h2>Want Updates?</h2>
                    <!-- Begin MailChimp Signup Form -->
                    <div id="mc_embed_signup">
                        <form action="http://yourinputneededdoc.us7.list-manage.com/subscribe/post?u=baf57534aa6a4c95b1f096bee&amp;id=2ee7a448f1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <input placeholder="ENTER YOUR E-MAIL ADDRESS" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                        </form>
                    </div>
                    <!--End mc_embed_signup-->
                    <p>
                        We'll send you updates periodically to keep you in the loop of how the project is going. You'll be able to unsubscribe at any time.
                    </p>
                </div> <!-- end .updates -->
            </div> <!-- end .third -->
        </div> <!-- end .col_container -->
        
        <div id="footer">
            Your Input Needed Documentary &copy; <?php print date('Y'); ?> A <a href="http://jeffreyburas.com">Jeffrey Buras</a> film in association with <a href="http://curiousercreative.com">Curiouser Creative</a>. For more information, please contact <a href="mailto:info@yourinputneededdoc.com?subject=Here's my input!">info@yourinputneededdoc.com</a>
        </div>
        
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          
            ga('create', 'UA-18954559-10', 'yourinputneededmovie.com');
            ga('send', 'pageview');
        </script>
        <script id="yt_api" src="http://www.youtube.com/iframe_api" type="text/javascript"></script>
    </body>
</html>