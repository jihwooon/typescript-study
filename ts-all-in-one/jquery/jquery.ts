$('p').removeClass('myClass noClass').addClass('yourClass');

$(['p', 't']).text('hello');
const tag = $('ul li').addClass((index) => {
  return 'item-' + index;
});

$(tag).html(function(i: number) {
  console.log(this);
  return $(this).data('name') + '입니다.';
});

export = jQuery;
module.exports = jQuery;
import $ = require('jquery');
import * as $ from 'jquery';

// esModules
import $ from 'jquery';

export default $; //esmodue
export = $ // commenJS

