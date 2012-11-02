// jquery.pageify.js
//
// eBook plugin for jQuery.
(function($) {

    var commands = {
        init : function(options) {

            // build options
            var opts = $.extend({}, $.fn.pageify.defaults, options);

            // we need this so we can reverse the display order of pages in the book
            var zIndex = this.size() + 1;
            this.each(function(i, el) {
                $(el).css('z-index', zIndex);
                zIndex--;
            });

            // remember all of these pages
            var $allPages = this;

            // for all of the pages on this webpage
            return this.each(function(i, el) {
                var $page = $(el);

                // console.log('Inside page ' + i + ' with ', el );

                // for every 'prev' button in this page
                $page.find(opts.btnPrevSelector).click(function(ev) {
                    ev.preventDefault();

                    // get the prev page for this button (if it exists)
                    var $btn = $(this);
                    var $thisPage = $btn.parents(opts.pageSelector).first();
                    var $prevPage = $thisPage.prev();
                    if ( $prevPage.size() ) {
                        opts.pageTurnReset($prevPage);
                        // animate this previous page onto the screen
                        $prevPage.animate(
                            { left: '0px' },
                            1250, // duration
                            function() {
                                // console.log('Prev page finished');
                                opts.pageTurnStop($thisPage);
                                opts.pageTurnComplete($prevPage);
                            }
                        );
                    } // else, no previous page

                    // set the prev page to be the current one
                    $thisPage.removeClass('current');
                    $prevPage.addClass('current');
                });

                // for every 'next' button on this page
                $page.find(opts.btnNextSelector).click(function(ev) {
                    ev.preventDefault();

                    // get this page
                    var $btn = $(this);
                    var $thisPage = $btn.parents(opts.pageSelector).first();
                    var $nextPage = $thisPage.next();
                    if ( $nextPage.size() ) {
                        opts.pageTurnStop($nextPage);
                        opts.pageTurnReset($nextPage);
                        // animate this previous page on
                        // console.log('Animating the next page turn ...', $thisPage, $nextPage);
                        $thisPage.animate(
                            { left: '-' + ( $thisPage.width() + 2 ) + 'px' },
                            1250, // duration
                            function() {
                                // console.log('Next page finished');
                                opts.pageTurnStop($thisPage);
                                opts.pageTurnComplete($nextPage);
                            }
                        );

                        // set the next page to be the current one
                        $thisPage.removeClass('current');
                        $nextPage.addClass('current');

                    } // else, no previous page
                });

                // for every 'restart' button on this page
                $page.find(opts.btnRestartSelector).click(function(ev) {
                    ev.preventDefault();

                    // get all of the pages
                    var $btn = $(this);
                    var $thisPage = $btn.parents(opts.pageSelector).first();
                    var $pages = $thisPage.parent().find(opts.pageSelector);

                    $pages.reverse().each(function(i, el) {
                        setTimeout(function() {
                            $(el).animate({ 'left' : '0px' });

                            // If this is the final turn, call pageTurnComplete(). ToDo: this really needs to check if this
                            // element is the first page (since we might have a 'restart' button in the middle of the book
                            // for some reason.
                            if ( i === $pages.size()-1 ) {
                                opts.pageTurnComplete( $(el) );
                            }
                        }, 75*i);
                    });
                });

                // for every 'jump' button in this page
                $page.find(opts.btnJumpSelector).click(function(ev) {
                    ev.preventDefault();

                    // console.log('Jumping to ' + $(this).data('pageifyJump'));
                    $allPages.pageify('jump', opts, $(this).data('pageifyJump'));
                });

            });

        },

        jump : function(options, pageId) {

            // build options
            var opts = $.extend({}, $.fn.pageify.defaults, options);

            // for all of the pages, set them to be off, until we hit this 'id', then
            // set them all to be on
            var found = false;
            return this.each(function(i, el) {
                var $page = $(this);
                // console.log('testing id=' + $page.attr('id'), ' (found=' + found + ')');

                // see if this is the page we're looking for
                if ( pageId === $page.attr('id') ) {
                    found = true;
                    opts.pageTurnStop($page);
                    opts.pageTurnReset($page);
                    opts.pageTurnComplete($page);
                }

                if ( found ) {
                    // set this page to be viewable
                    $page.css('left', '0px');
                }
                else {
                    // set this page to be off the screen
                    $page.css('left', '-' + ( $page.width() + 2 ) + 'px');
                }
            });
        },
    };

    // plugin 'pageify'
    $.fn.pageify = function(command, options) {

        // Method calling logic
        if ( commands[command] ) {
            return commands[command].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof command === 'object' || ! command ) {
            return commands.init.apply( this, arguments );
        } else {
            $.error( 'Command ' +  command + ' does not exist on jQuery.pageify' );
        }
    }

    // public!

    // plugin defaults
    $.fn.pageify.defaults = {
        btnNextSelector: '.btn-next',
        btnPrevSelector: '.btn-prev',
        btnJumpSelector: '.btn-jump',
        btnRestartSelector: '.btn-restart',
        bookSelector: '.book',
        pageSelector: '.page',
        pageTurnStop : function(page) { },
        pageTurnBegin : function(page) { },
        pageTurnComplete : function(page) { }
    };

})(jQuery);
