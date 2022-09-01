let navToggle = document.querySelector(".btn-toggle");
let navMenu = document.querySelector(".closed-toggle");
let NavHome = document.querySelector(".btn-a-home")
let NavAbout = document.querySelector(".btn-a-about")
let NavSkills = document.querySelector(".btn-a-skills")
let NavWork = document.querySelector(".btn-a-work")
let NavContact = document.querySelector(".btn-a-contact")
navToggle.addEventListener("click", () => {
  
  navMenu.classList.toggle("open-toggle");
  
  if (navMenu.classList.contains("open-toggle")) {
    navToggle.style.rotate=  90 + 'deg';
    navToggle.style.color= '#47E591';
    console.log("OPEN TOGGLE");
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    console.log("CLOSED TOGGLE");
    navToggle.style.color= '#fff';
    navToggle.style.rotate=  0 + 'deg';
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


NavHome.addEventListener("click", function() {
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth;
    
  if(x<=1300){
    console.log("Home :" + x);
    setTimeout(() => {
      navMenu.classList.toggle("open-toggle");
      navToggle.style.color= '#fff';
      navToggle.style.rotate=  0 + 'deg';
      navToggle.setAttribute("aria-label", "Abrir menú");
    }, 1000);
  }
});
NavAbout.addEventListener("click", function() {
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth;
  if(x<=1300){
    console.log("About :" + x);
    setTimeout(() => {
      navMenu.classList.toggle("open-toggle");
      navToggle.style.color= '#fff';
      navToggle.style.rotate=  0 + 'deg';
      navToggle.setAttribute("aria-label", "Abrir menú");
    }, 1000);

  }
});
NavSkills.addEventListener("click", function() {
  var win = window,
  doc = document,
  docElem = doc.documentElement,
  body = doc.getElementsByTagName('body')[0],
  x = win.innerWidth || docElem.clientWidth || body.clientWidth;
  if(x<=1300){
    console.log("Skills :" + x);
    setTimeout(() => {
      navMenu.classList.toggle("open-toggle");
      navToggle.style.color= '#fff';
      navToggle.style.rotate=  0 + 'deg';
      navToggle.setAttribute("aria-label", "Abrir menú");
    }, 1000);

  }
});
NavWork.addEventListener("click", function() {
  var win = window,
  doc = document,
  docElem = doc.documentElement,
  body = doc.getElementsByTagName('body')[0],
  x = win.innerWidth || docElem.clientWidth || body.clientWidth;
  if(x<=1300){
    console.log("Work :" + x);
    setTimeout(() => {
      navMenu.classList.toggle("open-toggle");
      navToggle.style.color= '#fff';
      navToggle.style.rotate=  0 + 'deg';
      navToggle.setAttribute("aria-label", "Abrir menú");
    }, 1000);
  }
});
NavContact.addEventListener("click", function() {
  var win = window,
  doc = document,
  docElem = doc.documentElement,
  body = doc.getElementsByTagName('body')[0],
  x = win.innerWidth || docElem.clientWidth || body.clientWidth;
  if(x<=1300){
    console.log("Contact :" + x);
    setTimeout(() => {
      navMenu.classList.toggle("open-toggle");
      navToggle.style.color= '#fff';
      navToggle.style.rotate=  0 + 'deg';
      navToggle.setAttribute("aria-label", "Abrir menú");
    }, 1000);
  }
});


