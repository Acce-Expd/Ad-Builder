function list(c, n, z) {
    s = document.form.marktext.value;
    if (c.checked) {
        if (s.indexOf(n) < 0) s += ', ' + n;
    } else {
        s = document.form.marktext.value.replace(', ' + n, '');
    }
    z = ", ";
    if (s.substring(2) == z) s = s.substring(2);
    document.form.marktext.value = s;
}
function getChecked() {
    var newtxt = '';
    var chkbx = document.getElementsByTagName('input');
    for (var i = 0; i < chkbx.length; i++) {
        if (chkbx[i].type == 'checkbox' && chkbx[i].checked === true) {
            if (newtxt.length !== 0) {
                newtxt += ',';
            }
            newtxt += chkbx[i].value;
        }
    }
    document.form.marktext.value = '/index.html?prd=' + newtxt;
}

function copyFuntion() {
    var copyText = document.getElementById("txtInput");
    copyText.select();
    document.execCommand("Copy");

    var tooltip = document.getElementById("copyTooltip");
    tooltip.innerHTML = "URL Copied!"; // + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("copyTooltip");
    tooltip.innerHTML = "Copy the generated URL";
}

function testurl() {
    var gettesturl = document.getElementById("txtInput").value;
    window.open(gettesturl);
}
function clearForm() {
    document.getElementById("itemsForm").reset();
}

$(function(){

    // Load htmls
    $('#1-1-ban').load ('./html/1-1-ban.html');    
    $('#1-2-btt').load ('./html/1-2-btt.html');



});