"use strict";

var menuBtn = document.querySelector('#menu-btn');
var closeBtn = document.querySelector('#close-btn');
var menu = document.querySelector('nav .container ul'); //Open menu

menuBtn.addEventListener('click', function () {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
}); //Hide menu

closeBtn.addEventListener('click', function () {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
});
var navItems = menu.querySelectorAll('li');

var changeActiveItem = function changeActiveItem() {
  navItems.forEach(function (item) {
    var link = item.querySelector('a');
    link.classList.remove('active');
  });
};

navItems.forEach(function (item) {
  var link = item.querySelector('a');
  link.addEventListener('click', function () {
    changeActiveItem();
    link.classList.add('active');
  });
}); //read more 

var readMoreBtn = document.querySelector('.about__more');
var readMoreContent = document.querySelector('.about__read-more');
readMoreBtn.addEventListener('click', function () {
  readMoreContent.classList.toggle('show-content');

  if (readMoreContent.classList.contains('show-content')) {
    readMoreBtn.textContent = 'Show less';
  } else {
    readMoreBtn.textContent = 'Show more';
  }
}); //show hide skills

var skillItems = document.querySelectorAll('.skills .skills__list');
skillItems.forEach(function (skills__list) {
  skills__list.querySelector('.skills__head').addEventListener('click', function () {
    skills__list.querySelector('.skills__items').classList.toggle('show-items');
  });
}); // BUTTON UP 

window.onscroll = function () {
  scrolling();
};

function topUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrolling() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("Btn").style.display = "block";
  } else {
    document.getElementById("Btn").style.display = "none";
  }
}
//# sourceMappingURL=index.js.map
