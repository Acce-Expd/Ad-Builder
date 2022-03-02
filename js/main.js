$(function(){
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

    function getchecked() {
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
        document.form.marktext.value = 'https://s3.amazonaws.com/ewe-assets/media/meso_cm/others/Prototype/EN/index.html?prd=' + newtxt;
    }

    function myFunction() {
        var copyText = document.getElementById("myInput");
        copyText.select();
        document.execCommand("Copy");

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "URL Copied!"; // + copyText.value;
    }

    function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy the generated URL";
    }

    function testurl() {
        var gettesturl = document.getElementById("myInput").value;
        window.open(gettesturl);
    }



});
function clearForm() {
    document.getElementById("itemsForm").reset();
}