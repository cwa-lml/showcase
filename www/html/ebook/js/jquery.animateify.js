// jquery.animatify.js
//
// eBook plugin for jQuery.
(function($) {

    var resetAnimation = function($stage, data) {
        // firstly, put the objects into the right position
        $.each(data, function(selector, anim) {
            var $obj = $stage.find(selector);
            if ( anim.type === 'css' ) {
                if ( anim.delay && anim.timeout ) {
                    clearTimeout(anim.timeout);
                    anim.timeout = undefined;
                }
                if ( anim.reset ) {
                    $obj.css(anim.reset);
                }
            }
            else if ( anim.type === 'flipcard' ) {
                // cancel all of these timeouts
                anim.timeouts = anim.timeouts || [];
                $.each(anim.timeouts, function(i, t) {
                    clearTimeout(t);
                });
                anim.timeouts = [];
                $obj.attr('src', anim.reset);
            }
            else if ( anim.type === 'pause' ) {
                if ( anim.timeout ) {
                    clearTimeout(anim.timeout);
                }
            }
            else {
                alert('animateify:reset(): Unknown animation type : ' + anim.type );
            }

            // recursively call ourselves
            if ( anim.then ) {
                $stage.animateify( 'reset', anim.then );
            }
        });
    };

    var stopAnimation = function($stage, data) {
        // stop all animation on all objects
        $.each(data, function(selector, anim) {
            // console.log('Stopping ' + selector);
            var $obj = $stage.find(selector);

            if ( anim.type === 'css' ) {
                // clears the queue but does not jump to the end (since callback will fire and 'then' will be
                // set in motion)
                if ( anim.delay && anim.timeout ) {
                    clearTimeout(anim.timeout);
                    anim.timeout = undefined;
                }
                $obj.stop(true);
            }
            else if ( anim.type === 'flipcard' ) {
                // cancel all of these timeouts
                anim.timeouts = anim.timeouts || [];
                $.each(anim.timeouts, function(i, t) {
                    clearTimeout(t);
                });
                anim.timeouts = [];
            }
            else if ( anim.type === 'pause' ) {
                // cancel this timeout if there is one
                if ( anim.timeout ) {
                    clearTimeout(anim.timeout);
                }
            }
            else {
                alert('animateify:stop(): Unknown animation type : ' + anim.type );
            }

            // recursively call ourselves
            if ( anim.then ) {
                $stage.animateify( 'stop', anim.then );
            }
        });
    };

    var commands = {
        init : function(options) {
            return this.each(function(){
                var $obj = $(this);
                // do something here, like reset
            });
        },
        reset : function(data) {
            if ( !data ) {
                return;
            }

            return this.each(function() {
                var $stage = $(this);
                resetAnimation($stage, data);
            });
        },
        play : function(data, callback) {
            if ( !data ) {
                return;
            }

            callback = callback || function() {};

            return this.each(function() {
                var $stage = $(this);

                // now animate the objects
                $.each(data, function(selector, anim) {
                    if ( typeof anim.play === 'undefined' ) {
                        return;
                    }
                    var $obj = $stage.find(selector);
                    var play = anim.play;

                    // set some defaults
                    // console.log('For ' + selector + ', repeat=' + anim.repeat);
                    anim.repeat = anim.repeat || 1;

                    // remember that we're currently not playing anything
                    var iteration = 0;

                    var start = function(anim, callback) {
                        // we need to start this animation (whether initially, or a repeat)

                        var play = anim.play;
                        if ( anim.type === 'css' ) {
                            if ( anim.delay ) {
                                // console.log('Adding a delay of ' + anim.delay + 's for this animation ', anim);
                                anim.timeout = setTimeout(function() {
                                    // console.log('- starting animation now');
                                    $obj.animate( play.css, play.duration, play.easing, callback );
                                }, anim.delay);
                            }
                            else {
                                $obj.animate( play.css, play.duration, play.easing, callback );
                            }
                        }
                        else if ( anim.type === 'flipcard' ) {
                            // for each of these flipcards
                            $.each(play, function(i, v) {
                                var timeout = setTimeout(function() {
                                    $obj.attr('src', v.src);
                                }, v.delay);
                                anim.timeouts.push(timeout);
                            });
                        }
                        else if ( anim.type === 'pause' ) {
                            anim.timeout = setTimeout(callback, play.duration);
                        }
                        else {
                            alert('animateify:play(): Unknown animation type : ' + anim.type );
                        }
                    };

                    // this is the callback to start, repeat and stop this animation
                    var next = function() {
                        iteration++;

                        if ( anim.then ) {
                            // this is finished, but we have an anim.then to start
                            $stage.animateify('play', anim.then, function() {
                                // when this is finished, we need to set off any repeat
                                if ( anim.repeat && iteration < anim.repeat ) {
                                    // we need to repeat this one again
                                    start(anim, next);
                                }
                            });
                            return;
                        }
                        else {
                            // do the next animation, but if there isn't one, there is nothing to do
                            callback();
                            return;
                        }
                    };

                    // START THE ANIMATION OFF
                    start(anim, next);
                });
            });
        },
        stop : function(data) {
            // console.log(data);
            if ( !data ) {
                return;
            }

            return this.each(function() {
                var $stage = $(this);
                stopAnimation($stage, data);
            });
        }
    };

    // plugin 'animateify'
    $.fn.animateify = function(command, options) {

        // Method calling logic
        if ( commands[command] ) {
            return commands[command].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof command === 'object' || ! command ) {
            return commands.init.apply( this, arguments );
        } else {
            $.error( 'Command ' +  command + ' does not exist on jQuery.animateify' );
        }
    }

    // public!
    // none

    // plugin defaults
    // none

})(jQuery);
