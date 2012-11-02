$(function() {

    // get the common player
    var player = jwplayer('word-jwplayer').setup({
        'width'       : '560',
        'height'      : '48',
        'levels' : [
            {'file' : 'word/he.mp3' }
        ],
        'modes' : [
            // { 'type' : 'html5' },
            { 'type' : 'flash', 'src' : 'js/jwplayer-5.9/player.swf' }
        ],
        'controlbar' : 'none',
        'icons'      : 'false',
        'events'      : {
            'onComplete' : function() {
                console.log((new Date()).toISOString() + ': completed');
                $('.highlight').removeClass('highlight');
            },
            'onPlay' : function() {
                console.log((new Date()).toISOString() + ': playing');
            },
            'onPause' : function() {
                console.log((new Date()).toISOString() + ': paused');
            },
            'onBuffer' : function() {
                console.log((new Date()).toISOString() + ': buffer');
            },
            'onSeek' : function() {
                console.log((new Date()).toISOString() + ': seek');
            },
            'onTime' : function() {
                console.log((new Date()).toISOString() + ': time');
            },
            'onIdle' : function() {
                console.log((new Date()).toISOString() + ': idle');
            }
        }
    });

    $('.word').click(function(ev) {
        ev.preventDefault();

        var $word = $(this);
        // get which word this is
        var word = $word.data('word');

        console.log('loading new sound for ' + word);

        // set the media for this sound
        player.load( '../../' + word + '.mp3' );

        console.log('now playing ' + word);

        // finally, play it
        // player.play(true);
        player.seek(0);
        // player.seek(0).play(true);
        $word.addClass('highlight');
    });

});
