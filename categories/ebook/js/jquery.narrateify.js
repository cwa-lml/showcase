// jquery.narrateify.js
//
// eBook plugin for jQuery.
(function($) {

    // module variable to check if something is already being played
    var timeouts = [];

    var commands = {
        init : function(options) {
            // console.log(options);
            // console.log(options.soundfile);
            return this.each(function(){
                var $obj = $(this);

                // now, if we have a sound file specified, make sure we have a jplayer loaded up
                if ( options.soundfile ) {
                    // find the 'jplayer' instance for this 'id'
                    $obj.find(options.jplayerId).jPlayer({
                        swfPath: "/js/jQuery.jPlayer.2.1.0/",
                        solution: 'html, flash',
                        supplied: "mp3, m4a, oga",
                        wmode: "window",
                        ready: function (ev) {
                            // console.log('jPlayer ready', options.soundfile);
                            $(this).jPlayer("setMedia", {
                                "mp3" : 'http://' + location.host + '/ebook/he-kuri/' + options.soundfile + ".mp3",
                                "m4a" : 'http://' + location.host + '/ebook/he-kuri/' + options.soundfile + ".m4a",
                                "oga" : 'http://' + location.host + '/ebook/he-kuri/' + options.soundfile + ".ogg"
                            });
                        },
                        progress: function (event) {
                            // console.log('jPlayer - progress event - ' + event.jPlayer.status.seekPercent);
                        },
                        play: function () {
                            // before we play this sound, pause the others
                            $obj.jPlayer("pauseOthers");
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
                }

            });
        },
        play : function(options) {
            var $this = $(this);
            var opts = $.extend({}, $.fn.narrateify.defaults, options);
            // console.log('options :', options);
            // console.log('opts :', opts);

            return this.each(function() {
                // foreach of the highlights
                timeouts = [];
                var last = 0;
                $.each(opts.timings, function(key, val) {
                    // console.log('HERE', key, val, opts.highlightClass);
                    var start = setTimeout(function() {
                        // console.log('Highlighting ' + key + ', got ' + $this.find('.' + key).size());
                        $this.find('.' + key).addClass(opts.highlightClass);
                    }, val.start * 1000 - opts.padding);
                    var end = setTimeout(function() {
                        // console.log('Dehighlighting ' + key);
                        // console.log('- class=' + $this.find('.' + key).attr('class'));
                        $this.find('.' + key).removeClass(opts.highlightClass);
                        // console.log('- class=' + $this.find('.' + key).attr('class'));
                    }, val.end * 1000 + opts.padding);

                    // remember these timeouts so we can cancel them if we have to
                    timeouts.push(start, end);

                    // remember the last timeout
                    last = ( last < val.end ? val.end : last );
                    // console.log('last is now ' + last);
                });

                // stop playing when we're completely finished
                var finished = setTimeout(function() {
                    // console.log('finished playing!!!');
                }, last * 1000 );
                timeouts.push(finished);

                // play the sound too
                // console.log('Right here', opts);
                // console.log('got ' + $(opts.jplayerId).size());
                $(opts.jplayerId).jPlayer('play');

                // save these timeouts on the element so we can cancel them if necessary
                $this.data('narrateifyTimeouts', timeouts);
            });
        },
        start : function() {
            return this.each(function(){
                var $obj = $(this);

                var options = $obj.data('narrateify');
                // console.log('options', options)
                // console.log('Starting narration');
            });
        },
        stop : function() {
            return this.each(function(){
                var $obj = $(this);

                var options = $obj.data('narrateify');
                // console.log('options', options)
                // console.log('Stopping narration');
            });
        },
        dump : function() {
            // console.log('dumping these narration objects');
            return this.each(function(){
                var $obj = $(this);

                var options = $obj.data('narrateify');
                // console.log('- options', options)
            });
        }
    };

    // plugin 'narrateify'
    $.fn.narrateify = function(command, options) {

        // Method calling logic
        if ( commands[command] ) {
            // console.log(Array.prototype.slice.call( arguments, 1 ));
            return commands[command].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof command === 'object' || ! command ) {
            return commands.init.apply( this, arguments );
        } else {
            $.error( 'Command ' +  command + ' does not exist on jQuery.narrateify' );
        }
    }

    // public!

    // plugin defaults
    $.fn.narrateify.defaults = {
        ext               : [ 'aif', 'mp3', 'ogg' ],
        padding           : 0,
        timings           : {},
        highlightClass    : 'highlight'
    };

})(jQuery);
