// Get the modal
var modal = document.getElementById("myModal");
var modalAd970x90 = document.getElementById("modalAd970x90");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var imgAd970x90 = document.getElementById("imgAd970x90");
var modalImg970x90 = document.getElementById("modalImg970x90");
var capAd970x90 = document.getElementById("capAd970x90");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

imgAd970x90.onclick = function(){
  modalAd970x90.style.display = "block";
  modalImg970x90.src = this.src;
  capAd970x90.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanAd970x90 = document.getElementsByClassName("closeAd970x90")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {modal.style.display = "none";}
spanAd970x90.onclick = function() { modalAd970x90.style.display = "none";}