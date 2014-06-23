/* ==========================================================================

    Project: Test Project
    Author: 
    Last updated: Fri Jun 20 2014 21:46:58

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.feature1();
    },

    /**
     * Custom feature 1
     */
    feature1: function() {
      var items = $('.article-a').children('.cbox-element');
      var i = 0;
      $('.cbox-element').colorbox({
        rel: 'gal',
        open: 'true'
      });
      $(document).bind('cbox_complete', function() {
        setTimeout(function() {
          i++;
          if (i < items.length) {
            $.colorbox.next();
          } else {
            $.colorbox.close();
            $(document).unbind('cbox_complete');
          }
        }, 2000);
      });
    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
