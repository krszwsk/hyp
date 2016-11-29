/* global hljs, $ */

hljs.initHighlightingOnLoad()

$(document).ready(function () {
  $('.hello button').click(function () {
    $('html, body').animate({
      scrollTop: $('#docs').offset().top,
    }, 'slow')
  })
})