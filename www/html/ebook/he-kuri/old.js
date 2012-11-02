// add a reverse plugin to jQuery :)
$.fn.reverse = [].reverse;

// some global variables
var narration = false;

// get all of the elements that will be animated during the book
var $p05Dog;
var $p05DogMask;
var $p05BubbleMask;
var $p05Bubble1;
var $p05Bubble2;
var $p05Bubble3;
var $p05Bubble1Container;
var $p05Bubble2Container;
var $p05Bubble3Container;

var pages = {
    "p05" : {
        "init" : function() {
            // stop the sound and animation
            // $p05Dog.stop();

            console.log('init p05');
            // put the dog at the bottom of the screen
            //$p05DogMask.css({
            //    height: '365px',
            //    width: '280px',
            //    left: '0px',
            //    top: '0px'
            //});
            $p05Dog.css({
                left: '0px',
                top: '60px'
            });
            $p05Bubble1Container.css({
                height: '80px',
                width: '80px',
                top: '50px',
                left: '-140px'
            });
            $p05Bubble1.css({
                height: '60px',
                width: '60px',
                margin: '10px',
                opacity: '0.8'
            });
            $p05Bubble2Container.css({
                height: '60px',
                width: '60px',
                top: '50px',
                left: '-220px'
            });
            $p05Bubble2.css({
                height: '50px',
                width: '50px',
                margin: '5px',
                opacity: '0.8'
            });
            $p05Bubble3Container.css({
                height: '70px',
                width: '70px',
                top: '80px',
                left: '-340px'
            });
            $p05Bubble3.css({
                height: '55px',
                width: '55px',
                margin: '7.5px',
                opacity: '0.8'
            });
        },
        "start" : function () {
            var $page = $('#p05');
            var id = $page.attr('id');
            console.log('starting p05');

            // put the dog at the bottom of the screen
            $.each([1, 2, 3], function() {
                $p05Dog.animate({
                    top: '200px'
                }, 250, 'linear');
                $p05Dog.animate({
                    top: '200px'
                }, 250, 'linear');
                $p05Dog.animate({
                    top: '0px'
                }, 750, 'swing');
                $p05Dog.animate({
                    top: '60px'
                }, 1750, 'jswing');
            });

            // animate the bubbles
            setTimeout( function() {
                $p05Bubble1Container.animate({
                    left: '650px', top: '20px'
                }, 8000, 'linear');
            }, 250);
            setTimeout( function() {
                $p05Bubble2Container.animate({
                    left: '530px', top: '0px'
                }, 8000, 'linear');
            }, 750);
            setTimeout( function() {
                $p05Bubble3Container.animate({
                    left: '450px', top: '20px'
                }, 8000, 'linear');
            }, 1500);

            // make the bubbles go in and out
            var animateBubble1 = function() {
                $p05Bubble1.animate({
                    width: '70px',
                    height: '50px',
                    'margin-left' : '5px',
                    'margin-right' : '5px',
                    'margin-top' : '15px',
                    'margin-bottom' : '15px'
                }, 500);

                $p05Bubble1.animate(
                    {
                        width: '50px',
                        height: '70px',
                        'margin-left' : '15px',
                        'margin-right' : '15px',
                        'margin-top' : '5px',
                        'margin-bottom' : '5px'
                    },
                    500,
                    animateBubble1
                );
            }
            var animateBubble2 = function() {
                $p05Bubble2.animate({
                    width: '55px',
                    height: '45px',
                    'margin-left' : '2.5px',
                    'margin-right' : '2.5px',
                    'margin-top' : '7.5px',
                    'margin-bottom' : '7.5px'
                }, 500);

                $p05Bubble2.animate(
                    {
                        width: '45px',
                        height: '55px',
                        'margin-left' : '7.5px',
                        'margin-right' : '7.5px',
                        'margin-top' : '2.5px',
                        'margin-bottom' : '2.5px'
                    },
                    500,
                    animateBubble2
                );
            }
            var animateBubble3 = function() {
                $p05Bubble3.animate({
                    width: '65px',
                    height: '45px',
                    'margin-left' : '2.5px',
                    'margin-right' : '2.5px',
                    'margin-top' : '12.5px',
                    'margin-bottom' : '12.5px'
                }, 500);

                $p05Bubble3.animate(
                    {
                        width: '45px',
                        height: '65px',
                        'margin-left' : '12.5px',
                        'margin-right' : '12.5px',
                        'margin-top' : '2.5px',
                        'margin-bottom' : '2.5px'
                    },
                    500,
                    animateBubble3
                );
            }

            // start the bubbles soon
            setTimeout(animateBubble1, 0);
            setTimeout(animateBubble2, 350);
            setTimeout(animateBubble3, 650);

            setTimeout(function() {
                // start the narration and word highlighting at the same time
                $page.find('.jplayer').jPlayer('play');
                startWords(pages[id].words);
            }, 2000);
        },
        "narration" : {
			"oga" : "p05-narration.ogg",
			"mp3" : "p05-narration.mp3",
			"wav" : "p05-narration.wav"
        },
        "words" : [
            {
                "id" : "p05-w1",
                "clipBegin" : "0.000000",
                "clipEnd" : "0.785394"
            },
            {
                "id" : "p05-w2",
                "clipBegin" : "0.785394",
                "clipEnd" : "1.167241"
            },
            {
                "id" : "p05-w3",
                "clipBegin" : "1.167241",
                "clipEnd" : "2.280000"
            },
        ]
    }
};

// set up our two functions to highlight/dehighlight each word
function startWords(words) {
    $.each(words, function(i, word) {
        console.log('Setting for ' + word.id + ', ' + word.clipBegin + ', ' + word.clipEnd);
        setTimeout(function () { startWord(word); }, word.clipBegin * 1000);
        setTimeout(function () { endWord(word); }, word.clipEnd * 1000);
    });
}

function startWord(word) {
    var $el = $('#' + word.id);
    console.log( 'Start of word ' + $el.html() );
    $el.addClass('highlight');

    // reset some things for this word
    word.startTimerId = undefined;
    word.startDiff = 0.0;
};

function endWord(word) {
    var $el = $('#' + word.id);
    console.log( 'End of word ' + $el.html() );
    $el.removeClass('highlight');

    // reset some things for this word
    word.endTimerId = undefined;
    word.endDiff = 0.0;

    // call stop on everything
    if ( $el.hasClass('last') ) {
        $('#stop').click();
    }
};

function hmm() {
    // get all the books elements
    $p05Dog = $('#p05-dog');
    $p05DogMask = $('#p05-dog-mask');
    $p05BubbleMask = $('#p05-bubble-mask');
    $p05Bubble1 = $('#p05-bubble1');
    $p05Bubble2 = $('#p05-bubble2');
    $p05Bubble3 = $('#p05-bubble3');
    $p05Bubble1Container = $('#p05-bubble1-container');
    $p05Bubble2Container = $('#p05-bubble2-container');
    $p05Bubble3Container = $('#p05-bubble3-container');

    // get all of the pages into a jQuery object
    var $pages = $('#pages .page');

    // set the z-index of each page to be opposite to it's order on the page
    var zIndex = $pages.size() + 1;
    $pages.each(function(i, el) {
        $(el).css('z-index', zIndex);
        zIndex--;
    });

    // do some setup here
    $pages.each(function(i, el) {
        var id = $(el).attr('id');
        // only run the init function if we have one
        if ( pages[id] && typeof pages[id].init === 'function' ) {
            pages[id].init();
        }
    });

    $('.jplayer').each(function(i, el) {
        var $el = $(el);
        var pageName = $el.data('page');
        console.log('checking narration for page ' + pageName);

        // if there is no narration, skip this page
        if ( ! pages[pageName] || ! pages[pageName].narration ) {
            console.log('no narration for page ' + pageName);
            return;
        }

        console.log('setting up narration for page ' + pageName);
        $el.jPlayer({
		    swfPath: "/js/jQuery.jPlayer.2.1.0/",
		    supplied: "oga, mp3, wav",
		    wmode: "window",
		    ready: function () {
                console.log('jPlayer ready');
			    $(this).jPlayer("setMedia", pages[pageName].narration );
		    },
		    progress: function (event) {
                console.log('jPlayer - progress event - ' + event.jPlayer.status.seekPercent);
		    },
		    play: function () {
                console.log('jPlayer - play event');
		    },
		    pause: function () {
                console.log('jPlayer - pause event');
		    },
		    stop: function () {
                console.log('jPlayer - stop event');
		    },
		    ended: function () {
                console.log('jPlayer - ended event');
		    },
            error: function (event) {
                console.log("Error Event: type = " + event.jPlayer.error.type);
                console.log("Error: " + event.jPlayer.error.message);
                console.log("Hint: " + event.jPlayer.error.hint);
                switch(event.jPlayer.error.type) {
                case $.jPlayer.error.NO_SOLUTION:
                    console.log('No Solution');
                    break;
                }
            }
        });
    });

    // set up the for the buttons
    $('.prev').click(function(ev) {
        ev.preventDefault();

        // get the page for this button
        var $this = $(this);
        var $button = $(this);
        var $thisPage = $button.parents('div.page').first();
        var $prevPage = $thisPage.prev();

        $prevPage.animate(
            {
                left: '0px'
            },
            1250,
            function() {
                console.log('page (prev) turning has completed');
                var id = $prevPage.attr('id');
                if ( pages[id] && typeof pages[id].init === 'function' ) {
                    pages[id].init();
                    pages[id].start();
                }
            }
        );
    });

    $('.next').click(function(ev) {
        ev.preventDefault();

        var $button = $(this);
        var $thisPage = $button.parents('div.page').first().removeClass('current');
        var $nextPage = $thisPage.next().addClass('current');

        $thisPage.animate(
            {
                left: '-600px'
            },
            1250,
            function() {
                console.log('page turning has completed');
                var id = $nextPage.attr('id');
                if ( pages[id] && typeof pages[id].init === 'function' ) {
                    pages[id].init();
                    pages[id].start();
                }
            }
        );
    });

    $('.repeat').click(function(ev) {
        ev.preventDefault();

        var $page = $(this).parents('.page').first();
        var id = $page.attr('id');
        pages[id].init();
        pages[id].start();
        // $page.find('.jplayer').jPlayer('play');
    });

    $('#i-can-read').click(function(ev) {
        ev.preventDefault();
        alert('this needs to be changed');
        var $this = $(this);
        $this.parents('div.page').first().animate({
            left: '-600px'
        }, 1250);
        narration = false;
    });

    $('#read-to-me').click(function(ev) {
        ev.preventDefault();
        alert('this needs to be changed');
        var $this = $(this);
        $this.parents('div.page').first().animate({
            left: '-600px'
        }, 1250);
        narration = true;
    });

    $('#restart').click(function(ev) {
        ev.preventDefault();
        var $this = $(this);
        // get all of the pages
        $('.page').reverse().each(function(i, el) {
            setTimeout(function() {
                $(el).animate({ 'left' : '0px' });
            }, 75*i);
        });
    });
};

$(function() {
    console.log('ready');

    // turn all these pages into real ones
    $('.page').pageify();

    // find all the things to narrate
    $('.page .narration').narrateify();
});
