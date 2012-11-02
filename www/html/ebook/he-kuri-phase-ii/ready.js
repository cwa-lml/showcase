if ( typeof console === 'undefined' ) {
    console = {};
    console.log = function() {};
}

// add a reverse plugin to jQuery :)
$.fn.reverse = [].reverse;

var edutainmentText = [
    {
        on   :   6000,
        off  :  10000,
        text : 'He kurī.'
    },
    {
        on   :  19000,
        off  :  23000,
        text : 'He kurī nui.'
    },
    {
        on   :  28000,
        off  :  32000,
        text : 'He kurī iti.'
    },
    {
        on   :  45000,
        off  :  49000,
        text : 'He kurī pai.'
    },
    {
        on   :  63000,
        off  :  67000,
        text : 'He kurī kino.'
    },
    {
        on   :  80000,
        off  :  84000,
        text : 'He kurī pango.'
    },
    {
        on   :  89000,
        off  :  93000,
        text : 'He kurī mā.'
    },
    {
        on   : 113000,
        off  : 117000,
        text : 'Auē!'
    },
    {
        on   : 122000,
        off  : 126000,
        text : 'He kurī kākāriki.'
    }
];

$(function() {
    // set up some common functions
    function getPlayerOnPage($page) {
        var videoId = $('#' + $page.attr('id') + '-video').attr('id');
        return jwplayer(videoId);
    }
    function startVideoOnPage($page) {
        // get this video id from this page
        console.log('startVideoOnPage: here');
        var player = getPlayerOnPage($page);
        console.log('calling seek');
        var $children = $page.children('div');
        $($children[0]).hide();
        $($children[1]).show();
        $($children[2]).hide();
        // player.seek(0);
        player.play(true);
    }

    // mode that this book is in
    var mode = 'alone';

    var $pages = $('.page');

    var pageifyOptions = {
        pageTurnStop : function($page) {
            // called when the page we were just viewing has disappeared

            // see if we are on the first page
            console.log('Stopping page ' + $page.attr('id'));
            if ( $page.attr('id') === 'entry' ) {
                jwplayer('introduction-video').stop();
            }
            else {
                var player = getPlayerOnPage($page);
                console.log('Stopping ' + $page.attr('id'));
                player.stop();
            }
        },
        pageTurnReset : function($page) {
            // no need to reset the video, except to put the first preview image on it again
            var video = $page.attr('id');
            var player = getPlayerOnPage($page);
            console.log('Resetting video image ' + video);

            // see if we are on the first page
            if ( video === 'entry' ) {
                jwplayer('introduction-video').stop();
            }
            else {
                var $children = $page.children('div');
                $($children[0]).show();
                $($children[1]).hide();
                $($children[2]).hide();
            }
        },
        pageTurnComplete : function($page) {
            // get this video id from this page
            console.log('Completing page ' + $page.attr('id'));
            if ( $page.attr('id') === 'entry' ) {
                jwplayer('introduction-video').play(true); // .seek(0);
            }
            else {
                startVideoOnPage($page);
            }
        }
    };

    // turn all these pages into real ones
    // console.log($pages.size());
    // console.log($pages.pageify);
    $pages.pageify( pageifyOptions );

    // find all the things to narrate
    $('.page .narration').each(function(i, el) {
        var $el = $(el);
        var id = $el.data('narrateifyId');
        if ( narrationData['' + id + '-fluent'] ) {
            $el.narrateify( narrationData['' + id + '-fluent'] );
        }
    });

    // for any repeat buttons, restart the narration
    $('.btn-repeat').click(function(ev) {
        ev.preventDefault();

        var $btn = $(this);
        var $page = $btn.parents('.page').first();

        // restart the video
        startVideoOnPage($page);
    });

    // for any listen buttons, replay the narration
    $('.btn-listen').click(function(ev) {
        ev.preventDefault();

        var $btn = $(this);
        // var $page = $btn.parents('.page').first();
        var $page = $btn.closest('.page');
        var id = $page.attr('id');

        // jwplayer('#' + $page.attr('id') + '-fluent').play();
        $page.find('.narration').narrateify( 'play', narrationData['' + id + '-fluent'] );
    });

    // for the mode buttons, set the mode and then do a page turn
    $('.btn-next-alone').click(function(ev) {
        ev.preventDefault();
        mode = 'alone';

        // stop the intro video
        jwplayer('introduction-video').stop();

        // now we need to show the mode screen
        $('#book').fadeOut(function() {
            $('#video-mode-select-screen').fadeIn();
        });
    });
    // for the mode buttons, set the mode and then do a page turn
    $('#btn-next-alone-with-text').click(function(ev) {
        ev.preventDefault();
        mode = 'alone-with-text';

        // now we need to show the mode screen
        $('#video-mode-select-screen').fadeOut(function() {

            // stop the intro video
            jwplayer('introduction-video').stop();

            // hide the text to start off with
            $('#edutainment-video-text').hide();

            $('#edutainment-video-container').fadeIn(function() {
                jwplayer('edutainment-video').seek(0);

                console.log('RAH!1');

                // set up some stuff to show/hide the text
                for(var i = 0; i<edutainmentText.length; i++) {
                    if ( edutainmentText[i].tOn ) {
                        clearTimeout(edutainmentText[i].tOn);
                        delete edutainmentText[i].tOn;
                    }
                    if ( edutainmentText[i].tOff ) {
                        clearTimeout(edutainmentText[i].tOff);
                        delete edutainmentText[i].tOff;
                    }

                    // close over i so we can remember where we are during the callbacks
                    (function(closed) {

                        // fade the text in
                        edutainmentText[closed].tOn = setTimeout(function() {
                            $('#edutainment-video-text span').text(edutainmentText[closed].text);
                            $('#edutainment-video-text').fadeIn(500);
                            // console.log('Showing : ' + edutainmentText[closed].text);
                            delete edutainmentText[closed].tOn;
                        }, edutainmentText[closed].on);

                        // fade the text out again
                        edutainmentText[closed].tOff = setTimeout(function() {
                            $('#edutainment-video-text').fadeOut(500, function() {
                                $('#edutainment-video-text span').html('&nbsp;')
                            });
                            // console.log('Hiding  : ' + edutainmentText[closed].text);
                            delete edutainmentText[closed].tOff;
                        }, edutainmentText[closed].off);

                    })(i);
                }
            });
        });
    });
    $('#btn-next-alone-no-text').click(function(ev) {
        ev.preventDefault();
        mode = 'alone-no-text';

        // now we need to show the mode screen
        $('#video-mode-select-screen').fadeOut(function() {

            // hide the text
            $('#edutainment-video-text').hide();

            $('#edutainment-video-container').fadeIn(function() {
                // stop the intro video
                jwplayer('introduction-video').stop();

                // start the edutainment video
                jwplayer('edutainment-video').seek(0);
                console.log('RAH!2');
           });
        });
    });
    $('.btn-next-together').click(function(ev) {
        ev.preventDefault();
        mode = 'together';
        $(this).siblings().filter('.btn-next').click();
    });

    // ---

    // ToDo: play the words when the user clicks them

    // prevent anything happening for a double-click
    $(window).bind('dblclick', function(ev) {
        // console.log('got a dblclick');
        var sel;
        if( document.selection && document.selection.empty ) {
            document.selection.empty();
        }
        else if ( window.getSelection ) {
            sel = window.getSelection();
            if ( sel && sel.removeAllRanges ) {
                sel.removeAllRanges();
            }
        }
        return false;
    });

    $(window).bind('onselectstart', function(ev) {
        return false;
    });

    // show/hide the nav
    $('#btn-nav').click(function(ev) {
        ev.preventDefault();
        console.log('a');
        $('#nav').fadeIn(function() {
            console.log('b');
        });
        return false;
    });

    $('.btn-nav-jump').click(function() {
        $('#nav').fadeOut();
        $pages.pageify('jump', pageifyOptions, $(this).data('pageifyJump'));
        return false;
    });

    jwplayer("edutainment-video").setup({
        'width' : 1024,
        'height' : 768,
        // 'image' : "/thumbs/bunny.jpg",
        'levels' : [
            { 'file' : 'he-kuri-edutainment.mp4',  'type' : 'video/mp4'  } // is used for IE
            // { 'file' : 'he-kuri-edutainment.ogv',  'type' : 'video/ogg'  }, // is used for Firefox
            // { 'file' : 'he-kuri-edutainment.webm', 'type' : 'video/webm' }  // is used for Chromium/Safari ???
        ],
        'modes': [
            { 'type' : 'html5' },
            { 'type' : 'flash', 'src' : 'js/jwplayer-5.9/player.swf' }
        ],
        'controlbar' : 'none',
        'icons'      : 'false'
    });

    jwplayer('edutainment-video').onComplete(function() {
        // ToDo: make the video disappear and go back to the main screen
        setTimeout(function() {
            $('#edutainment-video-container').fadeOut(function() {
                $('#book').fadeIn();
            });
        }, 1000);
    });

    jwplayer("edutainment-video").onPause(function() {
        console.log('video is paused');
        $('#edutainment-video-container').fadeOut(function() {
            $('#book').fadeIn();
        });
    });

    jwplayer("edutainment-video").onPlay(function() {
        console.log('video is playing again');
    });

    // ----------------------------------------------------------------------------
    // set up the video for the entry screen
    var introVideo = jwplayer('introduction-video').setup({
        'width'  : 1024,
        'height' :  768,
        'image'  : 'entry/bg.jpg',
        'levels' : [
            { 'file' : 'entry/anim.mp4', 'type' : 'video/mp4' }
            //{ 'file' : 'entry/anim.ogv', 'type' : 'video/ogg' } // is used for Firefox
        ],
        'modes' : [
            { 'type' : 'html5' },
            { 'type' : 'flash', 'src' : 'js/jwplayer-5.9/player.swf' }
        ],
        'controlbar' : 'none',
        'icons'      : 'false'
    });

    // kick the intro video off
    introVideo.play(true);

    // ----------------------------------------------------------------------------
    // set up each video on each page
    console.log( $('.page .jwplayer').size() );
    // var $pageVideos = $('.page .jwplayer');
    $pages.each(function(i, page) {
        var $page = $(page);
        var name = $page.attr('id');
        var videoId = name + '-video';
        // var $video = $page.find('id');
        console.log('videoId=' + videoId);

        if ( $('#' + videoId).size() ) {
            // set up this video
            var player = jwplayer(videoId).setup({
                'width' : 1024,
                'height' : 768,
                // 'image' : video + "/bg.jpg",
                'levels' : [
                    { 'file' : name + '/anim.mp4', 'type' : 'video/mp4' }
                    // { 'file' : name + '/anim.ogv', 'type' : 'video/ogg' } // is used for Firefox
                ],
                'modes': [
                    { 'type' : 'html5' },
                    { 'type' : 'flash', 'src' : 'js/jwplayer-5.9/player.swf' }
                ],
                'controlbar' : 'none',
                'icons'      : 'false'
            });

            var $children = $page.children('div');
            $($children[0]).show();
            $($children[1]).hide();
            $($children[2]).show();

            player.onComplete(function() {
                console.log('Animation completed, start the narration!');

                $($children[0]).hide();
                $($children[1]).hide();
                $($children[2]).show();
            });
        }

    });

    // show the start, hide the video, hide the end
    $('.page .start-img').show().next().hide().next().hide();

});
