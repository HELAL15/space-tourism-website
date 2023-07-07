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
/*///////////////////////////////////////////////////////////////////////////////////////*/

/////////////////////////////////////////////////
/////////////// destination section //////////////
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
  var image = document.getElementById('image');
  var name = document.getElementById('name');
  var description = document.getElementById('description');
  var distance = document.getElementById('distance');
  var travel = document.getElementById('travel');
  // Set initial content
  var initialDestination = data.destinations[0];
  image.src = initialDestination.images.png;
  name.textContent = initialDestination.name;
  description.textContent = initialDestination.description;
  distance.textContent =  initialDestination.distance;
  travel.textContent = initialDestination.travel;
}
//this function to make changes for content onclick button 
function setupButtons(data) {
  var moonBtn = document.getElementById('moon');
  var marsBtn = document.getElementById('mars');
  var europaBtn = document.getElementById('europa');
  var titanBtn = document.getElementById('titan');
//event on moon btn
  moonBtn.addEventListener('click', function() {
    updateContent(data.destinations[0]);
    moonBtn.classList.add('active');
    marsBtn.classList.remove('active');
    europaBtn.classList.remove('active');
    titanBtn.classList.remove('active');
    console.log("clicked");
  });
//event on mars btn
  marsBtn.addEventListener('click', function() {
    updateContent(data.destinations[1]);
    moonBtn.classList.remove('active');
    marsBtn.classList.add('active');
    europaBtn.classList.remove('active');
    titanBtn.classList.remove('active');
    console.log("clicked");
  });
//event on europa btn
  europaBtn.addEventListener('click', function() {
    updateContent(data.destinations[2]);
    moonBtn.classList.remove('active');
    marsBtn.classList.remove('active');
    europaBtn.classList.add('active');
    titanBtn.classList.remove('active');
    console.log("clicked");
  });
//event on titan btn
  titanBtn.addEventListener('click', function() {
    updateContent(data.destinations[3]);
    moonBtn.classList.remove('active');
    marsBtn.classList.remove('active');
    europaBtn.classList.remove('active');
    titanBtn.classList.add('active');
    console.log("clicked");
  });
}
//this function to update content
function updateContent(destination) {
  var image = document.getElementById('image');
  var name = document.getElementById('name');
  var description = document.getElementById('description');
  var distance = document.getElementById('distance');
  var travel = document.getElementById('travel');

  image.src = destination.images.png;
  name.textContent = destination.name;
  description.textContent = destination.description;
  distance.textContent =  destination.distance;
  travel.textContent =  destination.travel;
}

/*/////////////////////////////////////////////////////////////////////////////////*/



