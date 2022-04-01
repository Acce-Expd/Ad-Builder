// 1-1-ban.html
var modalBan = document.getElementById("modalBan");
var imgBan = document.getElementById("imgBan");
var modalImgBan = document.getElementById("modalImgBan");
var capBan = document.getElementById("capBan");

imgBan.onclick = function(){
    modalBan.style.display = "block";
    modalImgBan.src = this.src;
    capBan.innerHTML = this.alt;
}

var spanBan = document.getElementsByClassName("closeBan")[0];
spanBan.onclick = function() {modalBan.style.display = "none";}

// 1-5-ban.html
var modalIosaf = document.getElementById("modalIosaf");
var imgIosaf = document.getElementById("imgIosaf");
var modalImgIosaf = document.getElementById("modalImgIosaf");
var capIosaf = document.getElementById("capIosaf");

imgIosaf.onclick = function(){
    modalIosaf.style.display = "block";
    modalImgIosaf.src = this.src;
    capIosaf.innerHTML = this.alt;
}

var spanIosaf = document.getElementsByClassName("closeIosaf")[0];
spanIosaf.onclick = function() {modalIosaf.style.display = "none";}


// 1-6-ccmc.html
var modalCcmf = document.getElementById("modalCcmf");
var imgCcmf = document.getElementById("imgCcmf");
var modalImgCcmf = document.getElementById("modalImgCcmf");
var capCcmf = document.getElementById("capCcmf");

imgCcmf.onclick = function(){
    modalCcmf.style.display = "block";
    modalImgCcmf.src = this.src;
    capCcmf.innerHTML = this.alt;
}

var spanCcmf = document.getElementsByClassName("closeCcmf")[0];
spanCcmf.onclick = function() {modalCcmf.style.display = "none";}


// 2-1-970x90
var modalAd970x90 = document.getElementById("modalAd970x90");

var imgAd970x90 = document.getElementById("imgAd970x90");
var modalImgAd970x90 = document.getElementById("modalImgAd970x90");
var capAd970x90 = document.getElementById("capAd970x90");

imgAd970x90.onclick = function(){
    modalAd970x90.style.display = "block";
    modalImg970x90.src = this.src;
    capAd970x90.innerHTML = this.alt;
}

var spanAd970x90 = document.getElementsByClassName("closeAd970x90")[0];
spanAd970x90.onclick = function() {modalAd970x90.style.display = "none";}


// 2-2-nmc.html
var modalNmc = document.getElementById("modalNmc");

var imgNmc = document.getElementById("imgNmc");
var modalImgNmc = document.getElementById("modalImgNmc");
var capNmc = document.getElementById("capNmc");

imgNmc.onclick = function(){
    modalNmc.style.display = "block";
    modalImgNmc.src = this.src;
    capNmc.innerHTML = this.alt;
}

var spanNmc = document.getElementsByClassName("closeNmc")[0];
spanNmc.onclick = function() {modalNmc.style.display = "none";}


// 2-3-nts.html
var modalNts = document.getElementById("modalNts");

var imgNts = document.getElementById("imgNts");
var modalImgNts = document.getElementById("modalImgNts");
var capNts = document.getElementById("capNts");

imgNts.onclick = function(){
  modalNts.style.display = "block";
  modalImgNts.src = this.src;
  capNts.innerHTML = this.alt;
}

var spanNts = document.getElementsByClassName("closeNts")[0];
spanNts.onclick = function() {modalNts.style.display = "none";}


// 2-4-capAd160x600.html
var modalAd160x600 = document.getElementById("modalAd160x600");

var imgAd160x600 = document.getElementById("imgAd160x600");
var modalImg160x600 = document.getElementById("modalImg160x600");
var capAd160x600 = document.getElementById("capAd160x600");

imgAd160x600.onclick = function(){
  modalAd160x600.style.display = "block";
  modalImg160x600.src = this.src;
  capAd160x600.innerHTML = this.alt;
}

var spanAd160x600 = document.getElementsByClassName("closeAd160x600")[0];
spanAd160x600.onclick = function() {modalAd160x600.style.display = "none";}


// 3-1-lpsp.html
var modalLpsp = document.getElementById("modalLpsp");
var imgLpsp = document.getElementById("imgLpsp");
var modalImgLpsp = document.getElementById("modalImgLpsp");
var capLpsp = document.getElementById("capLpsp");

imgLpsp.onclick = function(){
  modalLpsp.style.display = "block";
  modalImgLpsp.src = this.src;
  capLpsp.innerHTML = this.alt;
}

var spanLpsp = document.getElementsByClassName("closeLpsp")[0];
spanLpsp.onclick = function() {modalLpsp.style.display = "none";}


// 3-2-lphs.html
var modalLphs = document.getElementById("modalLphs");
var imgLphs = document.getElementById("imgLphs");
var modalImgLphs = document.getElementById("modalImgLphs");
var capLphs = document.getElementById("capLphs");

imgLphs.onclick = function(){
  modalLphs.style.display = "block";
  modalImgLphs.src = this.src;
  capLphs.innerHTML = this.alt;
}

var spanLphs = document.getElementsByClassName("closeLphs")[0];
spanLphs.onclick = function() {modalLphs.style.display = "none";}

// 3-3-lpas.html
var modalLpas = document.getElementById("modalLpas");
var imgLpas = document.getElementById("imgLpas");
var modalImgLpas = document.getElementById("modalImgLpas");
var capLpas = document.getElementById("capLpas");

imgLpas.onclick = function(){
  modalLpas.style.display = "block";
  modalImgLpas.src = this.src;
  capLpas.innerHTML = this.alt;
}

var spanLpas = document.getElementsByClassName("closeLpas")[0];
spanLpas.onclick = function() {modalLpas.style.display = "none";}

// 3-4-lpnone.html
var modalLpnone = document.getElementById("modalLpnone");
var imgLpnone = document.getElementById("imgLpnone");
var modalImgLpnone = document.getElementById("modalImgLpnone");
var capLpnone = document.getElementById("capLpnone");

imgLpnone.onclick = function(){
  modalLpnone.style.display = "block";
  modalImgLpnone.src = this.src;
  capLpnone.innerHTML = this.alt;
}

var spanLpnone = document.getElementsByClassName("closeLpnone")[0];
spanLpnone.onclick = function() {modalLpnone.style.display = "none";}

//3-5-lpvrbo
// Get the modal
var modalLpvrbo = document.getElementById("modalLpvrbo");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgLpvrbo = document.getElementById("imgLpvrbo");
var modalImgLpvrbo = document.getElementById("modalImgLpvrbo");
var capLpvrbo = document.getElementById("capLpvrbo");

imgLpvrbo.onclick = function(){
  modalLpvrbo.style.display = "block";
  modalImgLpvrbo.src = this.src;
  capLpvrbo.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var spanLpvrbo = document.getElementsByClassName("closeLpvrbo")[0];
// When the user clicks on <span> (x), close the modal
spanLpvrbo.onclick = function() {modalLpvrbo.style.display = "none";}