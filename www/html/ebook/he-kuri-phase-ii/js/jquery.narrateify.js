// jquery.narrateify.js
//
// eBook plugin for jQuery.
(function($) {

    // module variable to check if something is already being played
    var timeouts = [];

    var commands = {
        init : function(options) {
            console.log('narrateify:', options);
            // console.log(options.soundfile);
            return this.each(function(){
                var $obj = $(this);

                // now, if we have a sound file specified, make sure we have a jwplayer loaded up
                if ( options.soundfile ) {
                    // find the 'jwplayer' instance for this 'id'
                    console.log('jwplayer setup = ' + '/ebook/he-kuri-phase-ii/' + options.soundfile + '.mp3');
                    var player = jwplayer(options.id).setup({
                        'id'          : 'jwplayer-' + options.id,
                        'width'       : '540',
                        'height'      : '48',
                        'levels' : [
                            { 'file' : '' + options.soundfile + '.mp3',  'type' : 'audio/mp3'  },
                            { 'file' : '' + options.soundfile + '.ogg',  'type' : 'audio/ogg'  },
                            { 'file' : '' + options.soundfile + '.wav',  'type' : 'audio/wav'  },
                        ],
                        'modes': [
                            { 'type' : 'html5' },
                            { 'type' : 'flash', 'src' : 'js/jwplayer-5.9/player.swf' }
                        ],
                        'controlbar'  : 'bottom',
                        'icons'       : 'false'
                    });

                    player.onPlay(function() {
                        console.log('playing narration ' + options.id);
                    });
                    player.onPause(function() {
                        console.log('pausing narration ' + options.id);
                    });
                    player.onComplete(function() {
                        console.log('completed narration ' + options.id);
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
                console.log('Right here', opts);
                console.log('opts.id=' + opts.id);
                console.log('#id.size()=' + $('#' + opts.id).size());
                var me = jwplayer(opts.id);
                console.log('RIGHT HERE', me);
                me.play(true);

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
        padding           : 0,
        timings           : {},
        highlightClass    : 'highlight'
    };

})(jQuery);
