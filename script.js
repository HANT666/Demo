/* global $ */
(function(window, document, $, undefined) {
  "use strict";

  $.ready(function() { // выполняется при готовности документа(до полной загрузки)
    $(['section']).each(function() { // прогон по всем section
      var script = this.find('pre').html();
      script = new Function("e", script); // создали функцию из строки
      this.find('button').on({click: script});
    });
  });
})(window, document, $);
