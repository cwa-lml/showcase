if ( typeof console === 'undefined' ) {
    console = {};
    console.log = function() {};
}

// add a reverse plugin to jQuery :)
$.fn.reverse = [].reverse;

var narrationData = {
    'dog-fluent' : {
        jplayerId : '#dog-fluent',
        soundfile : 'dog/fluent',
        highlightSelector : 'word',
        padding: 50,
        timings : {
            w1 : { start : 0.20, end : 0.53 },
            w2 : { start : 0.60, end : 0.89 }
        }
    },
    'dog-slow' : {
        jplayerId : '#dog-slow',
        soundfile : 'dog/slow',
        highlightSelector : 'syllable',
        timings : {
            'w1-s1' : { start : 0.24, end : 0.80 },
            'w2-s1' : { start : 1.04, end : 1.28 },
            'w2-s2' : { start : 1.28, end : 1.53 }
        }
    },

    'snail-fluent' : {
        jplayerId : '#snail-fluent',
        soundfile : 'snail/fluent',
        highlightSelector : 'word',
        padding: 50,
        timings : {
            w1 : { start : 0.22, end : 0.47 },
            w2 : { start : 0.57, end : 0.82 },
            w3 : { start : 0.87, end : 1.30 }
        }
    },
    'snail-slow' : {
        jplayerId : '#snail-slow',
        soundfile : 'snail/slow',
        highlightSelector : 'syllable',
        timings : {
            'w1-s1' : { start : 0.25, end : 0.60 },
            'w2-s1' : { start : 0.74, end : 0.94 },
            'w2-s2' : { start : 0.94, end : 1.24 },
            'w3-s1' : { start : 1.24, end : 1.45 },
            'w3-s2' : { start : 1.44, end : 1.65 }
        }
    },

    'man-fluent' : {
        jplayerId : '#man-fluent',
        soundfile : 'man/fluent',
        highlightSelector : 'word',
        padding: 50,
        timings : {
            w1 : { start : 0.20, end : 0.47 },
            w2 : { start : 0.57, end : 0.91 },
            w3 : { start : 1.11, end : 1.54 }
        }
    },
    'man-slow' : {
        jplayerId : '#man-slow',
        soundfile : 'man/slow',
        highlightSelector : 'syllable',
        timings : {
            'w1-s1' : { start : 0.20, end : 0.71 },
            'w2-s1' : { start : 0.87, end : 1.14 },
            'w2-s2' : { start : 1.14, end : 1.41 },
            'w3-s1' : { start : 1.86, end : 2.04 },
            'w3-s2' : { start : 2.04, end : 2.22 }
        }
    },

    'slippers-fluent' : {
        jplayerId : '#slippers-fluent',
        soundfile : 'slippers/fluent',
        highlightSelector : 'word',
        padding: 50,
        timings : {
            w1 : { start : 0.15, end : 0.51 },
            w2 : { start : 0.71, end : 1.15 },
            w3 : { start : 1.29, end : 1.60 }
        }
    },
    'slippers-slow' : {
        jplayerId : '#slippers-slow',
        soundfile : 'slippers/slow',
        highlightSelector : 'syllable',
        timings : {
            'w1-s1' : { start : 0.26, end : 0.57 },
            'w2-s1' : { start : 0.73, end : 0.98 },
            'w2-s2' : { start : 0.98, end : 1.23 },
            'w3-s1' : { start : 1.59, end : 1.90 }
        }
    },

    'cement-fluent' : {
        jplayerId : '#cement-fluent',
        soundfile : 'cement/fluent',
        highlightSelector : 'word',
        padding: 50,
        timings : {
            w1 : { start : 0.18, end : 0.47 },
            w2 : { start : 0.67, end : 1.17 },
            w3 : { start : 1.34, end : 1.79 }
        }
    },
    'cement-slow' : {
        jplayerId : '#cement-slow',
        soundfile : 'cement/slow',
        highlightSelector : 'syllable',
        timings : {
            'w1-s1' : { start : 0.19, end : 0.54 },
            'w2-s1' : { start : 0.74, end : 1.00 },
            'w2-s2' : { start : 1.00, end : 1.25 },
            'w3-s1' : { start : 1.56, end : 1.87 },
            'w3-s2' : { start : 1.87, end : 2.17 }
        }
    },

    'coal-fluent' : {
        jplayerId : '#coal-fluent',
        soundfile : 'coal/fluent',
        highlightSelector : 'word',
        padding: 50,
        timings : {
            w1 : { start : 0.18, end : 0.32 },
            w2 : { start : 0.44, end : 0.67 },
            w3 : { start : 0.75, end : 1.08 }
        }
    },
    'coal-slow' : {
        jplayerId : '#coal-slow',
        soundfile : 'coal/slow',
        highlightSelector : 'syllable',
        timings : {
            'w1-s1' : { start : 0.17, end : 0.36 },
            'w2-s1' : { start : 0.44, end : 0.66 },
            'w2-s2' : { start : 0.66, end : 0.87 },
            'w3-s1' : { start : 1.16, end : 1.33 },
            'w3-s2' : { start : 1.33, end : 1.50 }
        }
    },

    'soap-fluent' : {
        jplayerId : '#soap-fluent',
        soundfile : 'soap/fluent',
        highlightSelector : 'word',
        padding: 50,
        timings : {
            w1 : { start : 0.18, end : 0.32 },
            w2 : { start : 0.46, end : 0.74 },
            w3 : { start : 0.79, end : 1.14 }
        }
    },
    'soap-slow' : {
        jplayerId : '#soap-slow',
        soundfile : 'soap/slow',
        highlightSelector : 'syllable',
        timings : {
            'w1-s1' : { start : 0.18, end : 0.35 },
            'w2-s1' : { start : 0.52, end : 0.71 },
            'w2-s2' : { start : 0.71, end : 0.90 },
            'w3-s1' : { start : 1.09, end : 1.52 }
        }
    },

    'ladder-fluent' : {
        jplayerId : '#ladder-fluent',
        soundfile : 'ladder/fluent',
        highlightSelector : 'word',
        padding: 50,
        timings : {
            w1 : { start : 0.14, end : 1.30 }
        }
    },
    'ladder-slow' : {
        jplayerId : '#ladder-slow',
        soundfile : 'ladder/slow',
        highlightSelector : 'syllable',
        timings : {
            w1 : { start : 0.23, end : 1.34 }
        }
    },

    'paint-fluent' : {
        jplayerId : '#paint-fluent',
        soundfile : 'paint/fluent',
        highlightSelector : 'word',
        padding: 50,
        timings : {
            w1 : { start : 0.14, end : 0.41 },
            w2 : { start : 0.58, end : 1.02 },
            w3 : { start : 1.28, end : 2.24 }
        }
    },
    'paint-slow' : {
        jplayerId : '#paint-slow',
        soundfile : 'paint/slow',
        highlightSelector : 'syllable',
        timings : {
            'w1-s1' : { start : 0.10, end : 0.64 },
            'w2-s1' : { start : 0.84, end : 1.16 },
            'w2-s2' : { start : 1.16, end : 1.49 },
            'w3-s1' : { start : 1.73, end : 2.08 },
            'w3-s2' : { start : 2.08, end : 2.43 },
            'w3-s3' : { start : 2.43, end : 2.78 },
            'w3-s4' : { start : 2.78, end : 3.13 }
        }
    }

};

var animationData = {

    'dog' : {
        '#dog-eyes' : {
            type : 'flipcard',
            repeat : 1,
            reset : 'dog/eyes-open.jpg',
            play : [
                { delay :    0, src : 'dog/eyes-open.jpg'     },
                { delay :  500, src : 'dog/eyes-left.jpg'     },
                { delay : 1500, src : 'dog/eyes-open.jpg'     },
                { delay : 2700, src : 'dog/eyes-halfopen.jpg' },
                { delay : 2900, src : 'dog/eyes-closed.jpg'   },
                { delay : 3300, src : 'dog/eyes-halfopen.jpg' },
                { delay : 3400, src : 'dog/eyes-open.jpg'     }
            ]
        },
        '#dog-tail' : {
            type : 'css',
            reset : {
                top : '188px',
                left : '261px'
            },
            repeat : 7,
            play : {
                duration : 150,
                easing: 'easeInOutSine',
                css : {
                    top : '+=15',
                    left : '+=5'
                }
            },
            then : {
                '#dog-tail' : {
                    type : 'css',
                    repeat : 1,
                    play : {
                        duration : 150,
                        easing: 'easeInOutSine',
                        css : {
                            top : '-=15',
                            left : '-=5'
                        }
                    }
                }
            }
        }
    },

    'snail' : {
        '#snail-snail' : {
            type : 'css',
            reset : {
                left : '740px',
                top : '480px'
            },
            play : {
                duration : 4000,
                easing: 'easeInOutSine',
                css : {
                    left : '590px',
                    top : '480px'
                }
            }
        },
        '#snail-dog-container' : {
            type : 'css',
            delay : 1500,
            reset : {
                opacity : 0.0
            },
            play : {
                duration : 2500,
                easing: 'easeInOutSine',
                css : {
                    opacity : 1.0
                }
            }
        },
        '#snail-eyes' : {
            type : 'css',
            delay : 3000,
            reset : {
                left: '433px',
                top : '332px'
            },
            play : {
                duration : 1000,
                easing: 'easeInOutSine',
                css : {
                    left: '434px',
                    top : '343px'
                }
            }
        }
    },

    'man' : {
        '#man-snail' : {
            type : 'css',
            reset : {
                opacity: 0.0
            },
            play : {
                duration : 1500,
                easing: 'linear',
                css : {
                    opacity: 1.0
                }
            },
            then : {
                '#man-dog-container' : {
                    type : 'css',
                    reset : {
                        opacity: 0.0
                    },
                    play : {
                        duration : 1500,
                        easing: 'linear',
                        css : {
                            opacity: 1.0
                        }
                    },
                    then : {
                        '#man-man' : {
                            type : 'css',
                            reset : {
                                opacity: 0.0
                            },
                            play : {
                                duration : 1500,
                                easing: 'linear',
                                css : {
                                    opacity: 1.0
                                }
                            }
                        }
                    }
                }
            }
        },
        '#man-eye' : {
            type : 'flipcard',
            reset : 'man/eye-open.png',
            play : [
                { delay : 2050, src : 'man/eye-halfopen.png' },
                { delay : 2150, src : 'man/eye-closed.png'   },
                { delay : 2550, src : 'man/eye-halfopen.png' },
                { delay : 2750, src : 'man/eye-open.png'     },
                { delay : 3350, src : 'man/eye-halfopen.png' },
                { delay : 3450, src : 'man/eye-closed.png'   },
                { delay : 3850, src : 'man/eye-halfopen.png' },
                { delay : 3950, src : 'man/eye-open.png'     }
            ],
            timeouts : []
        }
    },

    'slippers' : {
        '#slippers-eyes' : {
            type : 'flipcard',
            reset : 'slippers/eyes-down.jpg',
            repeat : 7,
            play : [
                { delay : 2600, src : 'slippers/eyes-middle.jpg' },
                { delay : 2700, src : 'slippers/eyes-up.jpg'     }
            ],
            timeouts : []
        },
        '#slippers-tail' : {
            type : 'flipcard',
            reset : 'slippers/tail-up.jpg',
            repeat : 7,
            play : [
                { delay :  100, src : 'slippers/tail-up.jpg'     },
                { delay :  250, src : 'slippers/tail-middle.jpg' },
                { delay :  400, src : 'slippers/tail-down.jpg'   },
                { delay :  550, src : 'slippers/tail-middle.jpg' },
                { delay :  700, src : 'slippers/tail-up.jpg'     },
                { delay :  850, src : 'slippers/tail-middle.jpg' },
                { delay : 1000, src : 'slippers/tail-down.jpg'   },
                { delay : 1150, src : 'slippers/tail-middle.jpg' },
                { delay : 1300, src : 'slippers/tail-up.jpg'     },
                { delay : 1450, src : 'slippers/tail-middle.jpg' },
                { delay : 1600, src : 'slippers/tail-down.jpg'   },
                { delay : 1750, src : 'slippers/tail-middle.jpg' },
                { delay : 1800, src : 'slippers/tail-up.jpg'     }
            ],
            timeouts : []
        }
    },

    'cement' : {
        '#cement-print-a' : {
            type : 'css',
            reset : { opacity : 1.0 },
            play : { duration : 1000, css : { opacity : 0.25 } },
            then : {
                '#cement-print-d' : {
                    type : 'css',
                    reset : { opacity : 1.0 },
                    play : { duration : 1000, css : { opacity : 0.25 } },
                    then : {
                        '#cement-print-h' : {
                            type : 'css',
                            reset : { opacity : 1.0 },
                            play : { duration : 1000, css : { opacity : 0.25 } },
                            then : {
                                '#cement-print-l' : {
                                    type : 'css',
                                    reset : { opacity : 1.0 },
                                    play : { duration : 1000, css : { opacity : 0.25 } }
                                },
                                '#cement-print-m' : {
                                    type : 'css',
                                    reset : { opacity : 1.0 },
                                    play : { duration : 1000, css : { opacity : 0.25 } }
                                },
                                '#cement-print-n' : {
                                    type : 'css',
                                    reset : { opacity : 1.0 },
                                    play : { duration : 1000, css : { opacity : 0.25 } }
                                }
                            }
                        },
                        '#cement-print-i' : {
                            type : 'css',
                            reset : { opacity : 1.0 },
                            play : { duration : 1000, css : { opacity : 0.25 } }
                        },
                        '#cement-print-j' : {
                            type : 'css',
                            reset : { opacity : 1.0 },
                            play : { duration : 1000, css : { opacity : 0.25 } }
                        },
                        '#cement-print-k' : {
                            type : 'css',
                            reset : { opacity : 1.0 },
                            play : { duration : 1000, css : { opacity : 0.25 } }
                        }
                    }
                },
                '#cement-print-e' : {
                    type : 'css',
                    reset : { opacity : 1.0 },
                    play : { duration : 1000, css : { opacity : 0.25 } }
                },
                '#cement-print-f' : {
                    type : 'css',
                    reset : { opacity : 1.0 },
                    play : { duration : 1000, css : { opacity : 0.25 } }
                },
                '#cement-print-g' : {
                    type : 'css',
                    reset : { opacity : 1.0 },
                    play : { duration : 1000, css : { opacity : 0.25 } }
                }
            }
        },
        '#cement-print-b' : {
            type : 'css',
            reset : { opacity : 1.0 },
            play : { duration : 1000, css : { opacity : 0.25 } }
        },
        '#cement-print-c' : {
            type : 'css',
            reset : { opacity : 1.0 },
            play : { duration : 1000, css : { opacity : 0.25 } }
        }
    },

    'coal' : {
        '#coal-eyes' : {
            type : 'flipcard',
            reset : 'coal/eyes-open.jpg',
            play : [
                // first time
                { delay :  250, src : 'coal/eyes-open.jpg'         },
                { delay :  350, src : 'coal/eyes-halfopen.jpg'     },
                { delay :  450, src : 'coal/eyes-slightlyopen.jpg' },
                { delay :  500, src : 'coal/eyes-closed.jpg'       },
                { delay :  700, src : 'coal/eyes-slightlyopen.jpg' },
                { delay :  750, src : 'coal/eyes-halfopen.jpg'     },
                { delay :  850, src : 'coal/eyes-open.jpg'         },
                // repeat
                { delay : 2250, src : 'coal/eyes-open.jpg'         },
                { delay : 2350, src : 'coal/eyes-halfopen.jpg'     },
                { delay : 2450, src : 'coal/eyes-slightlyopen.jpg' },
                { delay : 2500, src : 'coal/eyes-closed.jpg'       },
                { delay : 2700, src : 'coal/eyes-slightlyopen.jpg' },
                { delay : 2750, src : 'coal/eyes-halfopen.jpg'     },
                { delay : 2850, src : 'coal/eyes-open.jpg'         }
            ],
            timeouts : []
        },
        '#coal-mouth' : {
            type : 'flipcard',
            reset : 'coal/mouth-pursed.jpg',
            play : [
                { delay :  3700, src : 'coal/mouth-halfopen.jpg' },
                { delay :  3800, src : 'coal/mouth-smile.jpg'    }
            ],
            timeouts : []
        },
        '#coal-coal' : {
            type : 'css',
            delay : 1000,
            reset : { top : '-10px' },
            play : {
                duration : 1500,
                easing : 'easeOutBounce',
                css : { top : '600px' }
            }
        }
    },

    'soap' : {
        '#soap-brush' : {
            type : 'css',
            reset : {
                left : '423px'
            },
            repeat : 7,
            play : {
                duration : 250,
                easing: 'easeInOutSine',
                css : {
                    left : '+=30'
                }
            },
            then : {
                '#soap-brush' : {
                    type : 'css',
                    repeat : 1,
                    play : {
                        duration : 250,
                        easing: 'easeInOutSine',
                        css : {
                            left : '-=30'
                        }
                    }
                }
            }
        }
    },

    'ladder' : {
        '#ladder-can' : {
            type : 'css',
            delay : 1000,
            reset : {
                left : '350px',
                top : '-375px'
            },
            play : {
                duration : 1000,
                easing : 'easeInCubic',
                css : {
                    left : '-=80px',
                    top : '+=400px'
                }
            },
            then : {
                '#ladder-dog' : {
                    type : 'css',
                    reset : { opacity: 0.0 },
                    play : {
                        duration : 10,
                        css : {
                            opacity : 1.0
                        }
                    }
                }
            }
        }
    },

    'paint' : {
        '#paint-eyes' : {
            type : 'flipcard',
            reset : 'paint/eyes-open.jpg',
            play : [
                { delay :  250, src : 'paint/eyes-open.jpg'   },
                { delay :  350, src : 'paint/eyes-half.jpg'   },
                { delay :  450, src : 'paint/eyes-closed.jpg' },
                { delay :  750, src : 'paint/eyes-half.jpg'   },
                { delay :  850, src : 'paint/eyes-open.jpg'   },
                { delay : 2250, src : 'paint/eyes-open.jpg'   },
                { delay : 2350, src : 'paint/eyes-half.jpg'   },
                { delay : 2450, src : 'paint/eyes-closed.jpg' },
                { delay : 2750, src : 'paint/eyes-half.jpg'   },
                { delay : 2850, src : 'paint/eyes-open.jpg'   },
            ],
            timeouts : []
        },
        '#paint-mouth' : {
            type : 'flipcard',
            reset : 'paint/mouth-small.jpg',
            play : [
                { delay :  3500, src : 'paint/mouth-small.jpg' },
                { delay :  3600, src : 'paint/mouth-half.jpg'  },
                { delay :  3700, src : 'paint/mouth-smile.jpg' }
            ],
            timeouts : []
        }
    }

};

$(function() {
    // mode that this book is in
    var mode = 'alone';
    var narrationTimeout;

    var $pages = $('.page');

    var pageifyOptions = {
        pageTurnStop : function($page) {
            // this is called when we need to stop something on the current page
            if ( animationData[$page.attr('id')] ) {
                $page.animateify('stop', animationData[$page.attr('id')]);
            }
        },
        pageTurnReset : function($page) {
            // this is called when this page will appear soon
            $page.animateify('stop', animationData[$page.attr('id')]);
            $page.animateify('reset', animationData[$page.attr('id')]);
        },
        pageTurnComplete : function($page) {
            // this is called when this page has been completely shown
            var $narration = $page.find('.narration');
            var id = $narration.data('narrateifyId');

            // play the animation
            $page.animateify('stop', animationData[id]);
            $page.animateify('reset', animationData[id]);
            $page.animateify('play', animationData[id]);

            // stop any future narration
            if ( narrationTimeout ) {
                clearTimeout(narrationTimeout);
                narrationTimeout = undefined;
            }

            if ( mode !== 'alone' ) {
                narrationTimeout = setTimeout(function() {
                    $narration.narrateify(
                        'play',
                        narrationData['' + id + '-' + mode]
                    );
                }, 4000);
            }
        }
    };

    // turn all these pages into real ones
    $pages.pageify( pageifyOptions );

    // find all the things to narrate
    $('.page .narration').each(function(i, el) {
        var $el = $(el);
        var id = $el.data('narrateifyId');
        if ( narrationData['' + id + '-fluent'] ) {
            $el.narrateify( narrationData['' + id + '-fluent'] );
        }
        if ( narrationData['' + id + '-slow'] ) {
            $el.narrateify( narrationData['' + id + '-slow'] );
        }
    });

    // for any repeat buttons, restart the narration
    $('.btn-repeat').click(function(ev) {
        ev.preventDefault();

        var $btn = $(this);
        var $page = $btn.parents('.page').first();
        var $narration = $page.find('.narration');
        var id = $narration.data('narrateifyId');

        // stop the current animation, reset it and play it again
        $page.animateify('stop', animationData[id]);
        $page.animateify('reset', animationData[id]);
        $page.animateify('play', animationData[id]);

        // stop any future narration
        if ( narrationTimeout ) {
            clearTimeout(narrationTimeout);
            narrationTimeout = undefined;
        }

        // restart the narration
        if ( mode !== 'alone' ) {
            narrationTimeout = setTimeout(function() {
                $page.find('.narration').first().narrateify( 'play', narrationData['' + id + '-' + mode] );
            }, 4000);
        }
    });

    // for the mode buttons, set the mode and then do a page turn
    $('.btn-next-alone').click(function(ev) {
        ev.preventDefault();
        mode = 'alone';
        $(this).siblings().filter('.btn-next').click();
    });
    $('.btn-next-fluent').click(function(ev) {
        ev.preventDefault();
        mode = 'fluent';
        $(this).siblings().filter('.btn-next').click();
    });
    $('.btn-next-slow').click(function(ev) {
        ev.preventDefault();
        mode = 'slow';
        $(this).siblings().filter('.btn-next').click();
    });

    // ---

    // play the words when the user clicks them

    var $jplayer = $('#common-jplayer');

    $jplayer.jPlayer({
        swfPath: "/js/jQuery.jPlayer.2.1.0/",
        solution: 'html, flash',
        supplied: "mp3, oga",
        wmode: "window",
        ready: function (ev) {
            // console.log('jPlayer ready', options.soundfile);
        },
        progress: function (event) {
            // console.log('jPlayer - progress event - ' + event.jPlayer.status.seekPercent);
        },
        play: function () {
            // console.log('jPlayer - play event');
        },
        pause: function () {
            // console.log('jPlayer - pause event');
        },
        stop: function () {
            // console.log('jPlayer - stop event');
        },
        ended: function () {
            // console.log('jPlayer - ended event');
        },
        error: function (event) {
            alert("Error Event: type = " + event.jPlayer.error.type);
            alert("Error: " + event.jPlayer.error.message);
            alert("Hint: " + event.jPlayer.error.hint);
            switch(event.jPlayer.error.type) {
            case $.jPlayer.error.URL:
                alert('Error : ', event.jPlayer.error);
                break;
            case $.jPlayer.error.NO_SOLUTION:
                alert('No Solution');
                break;
            }
        }
    });

    // find all the words and make the clickable and play a sound
    $('.word').click(function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        // get which word this is
        var word = $(this).data('word');
        //console.log('Trying to play sound for ' + word);

        // set the media for this sound
        $jplayer.jPlayer("setMedia", {
            "mp3" : 'http://' + location.host + '/categories/ebook/he-kuri/word/' + word + '.mp3',
            "oga" : 'http://' + location.host + '/categories/ebook/he-kuri/word/' + word + '.ogg'
        });

        // finally, play it
        $jplayer.jPlayer('play');

        return false;
    });

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
    $('.btn-nav-show').click(function() {
        $('#nav').fadeIn();
        return false;
    });

    $('.btn-nav-jump').click(function() {
        $('#nav').fadeOut();
        $pages.pageify('jump', pageifyOptions, $(this).data('pageifyJump'));
        return false;
    });
});
