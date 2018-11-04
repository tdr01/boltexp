var my_imgs_off = new Array();
var my_imgs_on = new Array();

/* Set "Off" image URLs */
my_imgs_off[0] = "../images/nav/buttons/Van1.jpg";
my_imgs_off[1] = "../images/nav/buttons/Truck1.jpg";
my_imgs_off[2] = "../images/nav/buttons/Plane1.jpg";
my_imgs_off[3] = "../images/nav/buttons/Mexico1.jpg";
my_imgs_off[4] = "../images/nav/buttons/World1.jpg";

/* Set "On" image URLs */
my_imgs_on[0] = "../images/buttons/Van2.jpg";
my_imgs_on[1] = "../images/nav/buttons/Truck2.jpg";
my_imgs_on[2] = "../images/nav/buttons/Plane2.jpg";
my_imgs_on[3] = "../images/nav/buttons/Mexico2.jpg";
my_imgs_on[4] = "../images/nav/buttons/World2.jpg";

var pre_imgs = my_imgs_off.concat(my_imgs_on);
var loaded_imgs = new Array();

for (var j=0; j<pre_imgs.length; j++) {
  loaded_imgs[j] = new Image();
  loaded_imgs[j].src = pre_imgs[j];
}

var all_imgs = document.getElementsByTagName("img");
var hov_imgs = new Array();

for (var a=0; a<all_imgs.length; a++) {
  if (all_imgs[a].className == "flip") {
	hov_imgs.push(all_imgs[a]);
  }
}

if (document.getElementById && document.createTextNode) {
    
  function newEvent(c) {
  
    var img_id_to_change = hov_imgs[c].id;
    var img_to_change = document.getElementById(img_id_to_change);
    var img_src = img_to_change.src;     

    if (typeof hov_imgs[c].addEventListener != "undefined") {	
      hov_imgs[c].addEventListener("mouseover", function() { img_to_change.src = my_imgs_on[c]; }, false);
	  hov_imgs[c].addEventListener("mouseout", function() { img_to_change.src = my_imgs_off[c]; }, false);
    }

    else if (typeof hov_imgs[c].attachEvent != "undefined" ) {
      hov_imgs[c].attachEvent("onmouseover", function() { img_to_change.src = my_imgs_on[c]; } );
	  hov_imgs[c].attachEvent("onmouseout", function() { img_to_change.src = my_imgs_off[c]; } );
    }

    else {
      hov_imgs[c].onmouseover = function() { img_to_change.src = my_imgs_on[c]; } ;
	  hov_imgs[c].onmouseout = function() { img_to_change.src = my_imgs_off[c]; } ;
    }
	
  }
  
  for (var d=0; d<hov_imgs.length; d++) {
    newEvent(d);
  }
  
}