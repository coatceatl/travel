import $ from 'jquery';
import 'bootstrap';

import Swiper from 'swiper';

$(document).ready(function() {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
