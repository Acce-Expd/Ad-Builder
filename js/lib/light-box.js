// Get the modal
var modalBan = document.getElementById("modalBan");
var modalAd970x90 = document.getElementById("modalAd970x90");
var modalLpsp = document.getElementById("modalLpsp");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgBan = document.getElementById("imgBan");
var modalImgBan = document.getElementById("modalImgBan");
var capBan = document.getElementById("capBan");

var imgAd970x90 = document.getElementById("imgAd970x90");
var modalImg970x90 = document.getElementById("modalImg970x90");
var capAd970x90 = document.getElementById("capAd970x90");

var imgLpsp = document.getElementById("imgLpsp");
var modalImgLpsp = document.getElementById("modalImgLpsp");
var capLpsp = document.getElementById("capLpsp");

imgBan.onclick = function(){
  modalBan.style.display = "block";
  modalImgBan.src = this.src;
  capBan.innerHTML = this.alt;
}

imgAd970x90.onclick = function(){
  modalAd970x90.style.display = "block";
  modalImg970x90.src = this.src;
  capAd970x90.innerHTML = this.alt;
}

imgLpsp.onclick = function(){
  modalLpsp.style.display = "block";
  modalImgLpsp.src = this.src;
  capLpsp.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var spanBan = document.getElementsByClassName("closeBan")[0];
var spanAd970x90 = document.getElementsByClassName("closeAd970x90")[0];
var spanLpsp = document.getElementsByClassName("closeLpsp")[0];
// When the user clicks on <span> (x), close the modal
spanBan.onclick = function() {modalBan.style.display = "none";}
spanAd970x90.onclick = function() {modalAd970x90.style.display = "none";}
spanLpsp.onclick = function() {modalLpsp.style.display = "none";}