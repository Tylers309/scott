var container = document.getElementById("c-i-container");

var counter = 0;

// list of images for us to iterate through
var imgList = {
  "0": "landing.jpg",
  "1": "landing-2.jpg",
  "2": "landing-3.jpg",
  "3": "landing-4.jpg"
}

var imgListLen = Object.keys(imgList).length - 1;

function createImg () {
  var img = document.createElement("IMG");

  if(imgListLen != counter) {
    //we still have fresh images left
    counter++;
  } else {
    //start from 0 again on the counter
    counter = 0;
  }

  
  img.setAttribute("src", "pictures/"+imgList[ counter ]);
  img.setAttribute("alt", "Scott Stephens");
  img.setAttribute("id", counter)


  // container.appendChild(img);

console.log(counter);
  
}

console.log(Object.keys(imgList).length);

// images that are in the container
var children = container.childNodes;

setInterval(() => {
  // createImg();
}, 2000);

delElem();


function delElem () {
  console.log(children);
}