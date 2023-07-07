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
////////////////// tech section //////////////////
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
  const img = document.getElementById('image3');
  const name = document.getElementById('name');
  const description  = document.getElementById('description');
  // Set initial content
  var initialTechnology = data.technology[0];
  img.src = initialTechnology.images.landscape;
  name.textContent = initialTechnology.name;
  description.textContent = initialTechnology.description;
}

//this function to make changes for content onclick button 
function setupButtons(data) {
  const btn1 = document.getElementById('d1');
  const btn2 = document.getElementById('d2');
  const btn3 = document.getElementById('d3');
//event on moon btn
  btn1.addEventListener('click', function() {
    updateContent(data.technology[0]);
    btn1.classList.add('active3');
    btn2.classList.remove('active3');
    btn3.classList.remove('active3');
    console.log("clicked");
  });
//event on mars btn
  btn2.addEventListener('click', function() {
    updateContent(data.technology[1]);
    btn1.classList.remove('active3');
    btn2.classList.add('active3');
    btn3.classList.remove('active3');
    console.log("clicked");
  });
//event on europa btn
  btn3.addEventListener('click', function() {
    updateContent(data.technology[2]);
    btn1.classList.remove('active3');
    btn2.classList.remove('active3');
    btn3.classList.add('active3');
    console.log("clicked");
  });
}

//this function to update content
function updateContent(technology) {
  const img = document.getElementById('image3');
  const name = document.getElementById('name');
  const description  = document.getElementById('description');

  img.src = technology.images.landscape;
  name.textContent = technology.name;
  description.textContent = technology.description;
}