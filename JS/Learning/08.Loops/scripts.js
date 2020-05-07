//  Helper Function Target Any Selector
function $(Selector) {
return document.querySelector(Selector);
}

function $$(Selector) {
  return document.querySelector(Selector);
  }

  
// Helper Function Create Any Element
function make(selector) {
  return document.createElement(selector);
}

// Target element   classic approach
// const main = document.querySelector('main'); console.log(main);


// Target element awesome approach
const main = $ ('main'); //console.log(main);


// Manage attributes
$('hi').setAttribute('id', 'main-title');
$('p').setAttribute('class', 'row');
$('#p4').removeAttribute('class');
$('html').setAttribute('lang', 'ar');

//      Manage class attribute
$('body').classList.add('menu-is-open'); console.log('body');

// Create Element [Classic approach]
const p1 = document.createElement('p');
p1.setAttribute('class', 'row',);
p1.innerHTML ="Je suis le text du nouveau paragraphe!"

const span = make('span');
span.textContent = "Info:";

main.append(p1);//will add the element at the end of the main
p1.prepend(span);//will add the element at the begining of the main

// remove an element
// $('html').remove();

// p1.prepend(make('span').textcontent = "Info: ");

$('main').append(p1);

//      Add text Content
p1.textContent += '<span>Info: </span>A simple text.';
//      Add HTML Content
p1.innerHTML = '<span class="success">Info: </span>A complex content';


// Create Admin Message
let div1 = make ('div');
let div2 = make('div');

div1.setAttribute('id', 'admin-msg');
div1.setAttribute('class', 'message');
div2.setAttribute('class', 'msg-content');

div2.innerHTML = "some admin text.";

div1.prepend(div2);

$('body').append(div);


//    Manage attributes

















// This will touch all of them
// console.log( $$('p'));
// $$('p').forEach(function(item){
//  item.style.babckgroundColor = '#ccc';
// });


/* PROGRAMMING TIP
 * The "BE INFORMED" principle
 * Always look if a native function
 * exists before building your own
 * logic ;-)
------------------------------------*/
function dayOfTheWeek(locales = undefined) {

  
  let day = '';


  // VARIANTE 1 - Manual days, one language. The first day must be Sunday
  // const weekDays = [
  //   "Sunday", 
  //   "Monday", 
  //   "Tuesday", 
  //   "Wednesday", 
  //   "Thursday", 
  //   "Friday", 
  //   "Saturday"
  // ];
  // day = weekDays[ new Date().getDay() ]; //getDay() returns a number: 0 for Sunday, 1 for Monday, etc.
  

  // VARIANTE 2 - Using Date locales, provided days, any language
  let options = { 
    weekday:  'long', 
    // year:     'numeric', 
    // month:    'long', 
    // day:      'numeric' 
  };
  day = new Date().toLocaleDateString( locales, options );

  // OUTPUT DAY
  // show( day );
  show( day, locales );


}

dayOfTheWeek(); //ouputs the default 'en-US'
// dayOfTheWeek('ar-SA');
// dayOfTheWeek('ar-EG');
// dayOfTheWeek('fr-TU');
// dayOfTheWeek('fr-CH');
// dayOfTheWeek('de-DE');
// dayOfTheWeek('it-IT');
// dayOfTheWeek('ka-GE'); // doesn't work, JS doesn't recognise it ☹️
// dayOfTheWeek('ru-RU');
// dayOfTheWeek('el-GR');
// dayOfTheWeek('ku-TR');
// dayOfTheWeek("th-u-ca-buddhist-nu-thai");