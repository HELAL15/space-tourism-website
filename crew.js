//vars for navbar
let nav = document.getElementsByTagName('nav');
let close = document.getElementsByClassName('close');
let bars = document.getElementsByClassName('bars');
//to open menuSideBar
bars[0].addEventListener('click', ()=> {
  nav[0].classList.add('active');
})
//to close menuSideBar
close[0].addEventListener('click', ()=> {
  nav[0].classList.remove('active');
})
//////////////////////////////////////////////////////////////////////////////


/*/////////////////////////////////////////////////
////////////////// crew section //////////////////
/////////////////////////////////////////////////*/

// XMLHttpRequest to get the data from json file
var request = new XMLHttpRequest();
request.open('GET', 'data.json', true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    //for destination
    initializeContent(data);
    setupButtons(data);
    
    
  }
};
request.send();

// this function to put main data (moon data) in html page onload
function initializeContent(data) {
  const img = document.getElementById('image2');
  const name = document.querySelector('.name2');
  const role = document.querySelector('.role');
  const bio  = document.querySelector('.bio');
  // Set initial content
  var initialCrew = data.crew[0];
  img.src = initialCrew.images.png;
  name.textContent = initialCrew.name;
  bio.textContent = initialCrew.bio;
  role.textContent =  initialCrew.role;
}

//this function to make changes for content onclick button 
function setupButtons(data) {
  const btn1 = document.getElementById('d1');
  const btn2 = document.getElementById('d2');
  const btn3 = document.getElementById('d3');
  const btn4 = document.getElementById('d4');
//event on moon btn
  btn1.addEventListener('click', function() {
    updateContent(data.crew[0]);
    btn1.classList.add('active2');
    btn2.classList.remove('active2');
    btn3.classList.remove('active2');
    btn4.classList.remove('active2');
    console.log("clicked");
  });
//event on mars btn
  btn2.addEventListener('click', function() {
    updateContent(data.crew[1]);
    btn1.classList.remove('active2');
    btn2.classList.add('active2');
    btn3.classList.remove('active2');
    btn4.classList.remove('active2');
    console.log("clicked");
  });
//event on europa btn
  btn3.addEventListener('click', function() {
    updateContent(data.crew[2]);
    btn1.classList.remove('active2');
    btn2.classList.remove('active2');
    btn3.classList.add('active2');
    btn4.classList.remove('active2');
    console.log("clicked");
  });
//event on titan btn
  btn4.addEventListener('click', function() {
    updateContent(data.crew[3]);
    btn1.classList.remove('active2');
    btn2.classList.remove('active2');
    btn3.classList.remove('active2');
    btn4.classList.add('active2');
    console.log("clicked");
  });
}

//this function to update content
function updateContent(crew) {
  const img = document.getElementById('image2');
  const name = document.querySelector('.name2');
  const role = document.querySelector('.role');
  const bio  = document.querySelector('.bio');

  img.src = crew.images.png;
  name.textContent = crew.name;
  bio.textContent = crew.bio;
  role.textContent =  crew.role;
}