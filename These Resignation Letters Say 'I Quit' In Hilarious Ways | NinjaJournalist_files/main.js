'use strict';
/* global Modernizr */

(function ($, undefined) {
  $(document).ready(function () {
    $('#sticky_aside').sticky({
      topSpacing: -50,
      bottomSpacing: 300
    });
      $('#hp_aside').sticky({
          topSpacing: 0,
          bottomSpacing: 645
      });
  });
})(jQuery);