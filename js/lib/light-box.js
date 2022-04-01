// Get the modal
var modalBan = document.getElementById("modalBan");
var modalIosaf = document.getElementById("modalIosaf");
var modalCcmf = document.getElementById("modalCcmf");

var modalAd970x90 = document.getElementById("modalAd970x90");
var modalNmc = document.getElementById("modalNmc");
var modalNts = document.getElementById("modalNts");
var modalAd160x600 = document.getElementById("modalAd160x600");

var modalLpsp = document.getElementById("modalLpsp");
var modalLphs = document.getElementById("modalLphs");
var modalLpas = document.getElementById("modalLpas");
var modalLpnone = document.getElementById("modalLpnone");
var modalLpvrbo = document.getElementById("modalLpvrbo");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgBan = document.getElementById("imgBan");
var modalImgBan = document.getElementById("modalImgBan");
var capBan = document.getElementById("capBan");

var imgIosaf = document.getElementById("imgIosaf");
var modalImgIosaf = document.getElementById("modalImgIosaf");
var capIosaf = document.getElementById("capIosaf");

var imgCcmf = document.getElementById("imgCcmf");
var modalImgCcmf = document.getElementById("modalImgCcmf");
var capCcmf = document.getElementById("capCcmf");


var imgAd970x90 = document.getElementById("imgAd970x90");
var modalImg970x90 = document.getElementById("modalImg970x90");
var capAd970x90 = document.getElementById("capAd970x90");

var imgNmc = document.getElementById("imgNmc");
var modalImgNmc = document.getElementById("modalImgNmc");
var capNmc = document.getElementById("capNmc");

var imgNts = document.getElementById("imgNts");
var modalImgNts = document.getElementById("modalImgNts");
var capNts = document.getElementById("capNts");

var imgAd160x600 = document.getElementById("imgAd160x600");
var modalImg160x600 = document.getElementById("modalImg160x600");
var capAd160x600 = document.getElementById("capAd160x600");


var imgLpsp = document.getElementById("imgLpsp");
var modalImgLpsp = document.getElementById("modalImgLpsp");
var capLpsp = document.getElementById("capLpsp");

var imgLphs = document.getElementById("imgLphs");
var modalImgLphs = document.getElementById("modalImgLphs");
var capLphs = document.getElementById("capLphs");

var imgLpas = document.getElementById("imgLpas");
var modalImgLpas = document.getElementById("modalImgLpas");
var capLpas = document.getElementById("capLpas");

var imgLpnone = document.getElementById("imgLpnone");
var modalImgLpnone = document.getElementById("modalImgLpnone");
var capLpnone = document.getElementById("capLpnone");

var imgLpvrbo = document.getElementById("imgLpvrbo");
var modalImgLpvrbo = document.getElementById("modalImgLpvrbo");
var capLpvrbo = document.getElementById("capLpvrbo");

imgBan.onclick = function(){
  modalBan.style.display = "block";
  modalImgBan.src = this.src;
  capBan.innerHTML = this.alt;
}
imgIosaf.onclick = function(){
  modalIosaf.style.display = "block";
  modalImgIosaf.src = this.src;
  capIosaf.innerHTML = this.alt;
}
imgCcmf.onclick = function(){
  modalCcmf.style.display = "block";
  modalImgCcmf.src = this.src;
  capCcmf.innerHTML = this.alt;
}

imgAd970x90.onclick = function(){
  modalAd970x90.style.display = "block";
  modalImg970x90.src = this.src;
  capAd970x90.innerHTML = this.alt;
}

imgNmc.onclick = function(){
  modalNmc.style.display = "block";
  modalImgNmc.src = this.src;
  capNmc.innerHTML = this.alt;
}

imgNts.onclick = function(){
  modalNts.style.display = "block";
  modalImgNts.src = this.src;
  capNts.innerHTML = this.alt;
}

imgAd160x600.onclick = function(){
  modalAd160x600.style.display = "block";
  modalImg160x600.src = this.src;
  capAd160x600.innerHTML = this.alt;
}

imgLpsp.onclick = function(){
  modalLpsp.style.display = "block";
  modalImgLpsp.src = this.src;
  capLpsp.innerHTML = this.alt;
}

imgLphs.onclick = function(){
  modalLphs.style.display = "block";
  modalImgLphs.src = this.src;
  capLphs.innerHTML = this.alt;
}

imgLpas.onclick = function(){
  modalLpas.style.display = "block";
  modalImgLpas.src = this.src;
  capLpas.innerHTML = this.alt;
}

imgLpnone.onclick = function(){
  modalLpnone.style.display = "block";
  modalImgLpnone.src = this.src;
  capLpnone.innerHTML = this.alt;
}

imgLpvrbo.onclick = function(){
  modalLpvrbo.style.display = "block";
  modalImgLpvrbo.src = this.src;
  capLpvrbo.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var spanBan = document.getElementsByClassName("closeBan")[0];
var spanIosaf = document.getElementsByClassName("closeIosaf")[0];
var spanCcmf = document.getElementsByClassName("closeCcmf")[0];

var spanAd970x90 = document.getElementsByClassName("closeAd970x90")[0];
var spanNmc = document.getElementsByClassName("closeNmc")[0];
var spanNts = document.getElementsByClassName("closeNts")[0];
var spanAd160x600 = document.getElementsByClassName("closeAd160x600")[0];

var spanLpsp = document.getElementsByClassName("closeLpsp")[0];
var spanLphs = document.getElementsByClassName("closeLphs")[0];
var spanLpas = document.getElementsByClassName("closeLpas")[0];
var spanLpnone = document.getElementsByClassName("closeLpnone")[0];
var spanLpvrbo = document.getElementsByClassName("closeLpvrbo")[0];

// When the user clicks on <span> (x), close the modal
spanBan.onclick = function() {modalBan.style.display = "none";}
spanIosaf.onclick = function() {modalIosaf.style.display = "none";}
spanCcmf.onclick = function() {modalCcmf.style.display = "none";}

spanAd970x90.onclick = function() {modalAd970x90.style.display = "none";}
spanNmc.onclick = function() {modalNmc.style.display = "none";}
spanNts.onclick = function() {modalNts.style.display = "none";}
spanAd160x600.onclick = function() {modalAd160x600.style.display = "none";}

spanLpsp.onclick = function() {modalLpsp.style.display = "none";}
spanLphs.onclick = function() {modalLphs.style.display = "none";}
spanLpas.onclick = function() {modalLpas.style.display = "none";}
spanLpnone.onclick = function() {modalLpnone.style.display = "none";}
spanLpvrbo.onclick = function() {modalLpvrbo.style.display = "none";}