//alert('hello')
var menuOpener = document.querySelector('.menu-opener');
var menu = document.querySelector('.menu');
console.log(menu);
console.dir(menuOpener);
menuOpener.addEventListener('click', function(){
 menu.classList.toggle('is-active');
})

//var navbar = document.querySelector('.my-navbar');
//var navbarOpen = document.querySelector('.my-navbar .arrow-down');
//navbarOpen.addEventListener('click' , function(){
//navbar.classList.toggle('is-active')
//})


//function clickHandler(){
 // alert(this.innerText);
//}

//function addElement(num){
  //var nevElement =document.createElement('p');
  //console.log(nevElement)
  //nevElement.innerText = 'im element' +num;
 // nevElement.addEventListener('click', clickHandler);
  //console.log(nevElement)
  //conteiner.appendChild(nevElement);

//}

//var elements = document.querySelectorAll('p');
//console.log(elements);
//for (var i = 0; i < elements.length; i++) {
//  elements[i].addEventListener('click', clickHandler);
//}

//var conteiner = document.querySelector('.wraper .pege');
//console.log(conteiner);
//addElement(1);
//addElement(2);
//for (var i = 0; i < 10; i++){
//addElement(i);
//}
var tooltip = document.querySelector('.tooltip');
console.log(tooltip)
var dates = document.querySelectorAll('[data-date]');
console.log(dates)
for (var i = 0; i < dates.length; i++) {
  console.dir(dates[i].dataset.date)
  dates[i].addEventListener('mouseenter', function(event){
  console.log(event.target)
  console.log(this)
  console.log(dates[i], i)
  tooltip.innerText = this.dataset.date
  tooltip.style.display = 'block'
  console.log(tooltip.style)
  tooltip.style.top = event.clientY -60 + 'px'
  tooltip.style.left = event.clientX + 'px'
  })
  dates[i].addEventListener('mouseleave', function(event){
  tooltip.style.display = 'none'
  })
}

