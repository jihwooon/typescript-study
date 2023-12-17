const tag = $('p');


// removeClass(className_function ?: string | string[] | ((this: TElement, index: number, className: string) => string)): this;
tag.removeClass('myClass').addClass('yourClass');


// text(text_functio: string | number | boolean | ((this: TElement, index: number, text: string) => string | number | boolean)): this;
$(['p', 't']).text(function(index: number, text: string) {
  console.log(this)
  return true;
});
const tab = $('ul li').addClass((index) => {
  return 'item-' + index;
});

interface zQuery {
  text(param?: string | string[] | number | boolean | ((this: this, index: number) => boolean | string)): this;
  html(param: string): this;
}

const $tag: zQuery = $(['p', 't']) as unknown as zQuery;

$tag.text();
$tag.text('a')
$tag.text(123)
$tag.text(true)
$tag.text(function(index) {
  console.log(this, index)
  return true;
});

$(tab).html(function(i: number) {
  console.log(this);
  return $(this).data('name') + '입니다.';
});

// export = jQuery;
// module.exports = jQuery;
// import $ = require('jquery');
// import * as $ from 'jquery';

// esModules
// import $ from 'jquery';

// export default $; //esmodue
// export = $ // commenJS
