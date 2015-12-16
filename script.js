/* global $ */
(function(window, document, $, undefined) {
  "use strict";

  $.ready(function() {
    $(['section']).each(function() {
      var script = this.find('pre').html();
      script = new Function("e", script);
      this.find('button').on({click: script});
    });
  });
})(window, document, $);
