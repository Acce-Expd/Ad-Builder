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
    document.form.marktext.value = 'https://ewe-assets.s3.amazonaws.com/media/meso_cm/others/Ad-Builder/en/index.html?prd=' + newtxt;
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

// Load the JQuery funtion 
$(function(){    
    // Load htmls
    $('#1-1-ban').load ('./html/1-1-ban.html');
    $('#1-2-btt').load ('./html/1-2-btt.html');
    $('#1-3-bpc').load ('./html/1-3-bpc.html');
    $('#1-4-taapoff').load ('./html/1-4-taapoff.html');
    $('#1-5-iosaf').load ('./html/1-5-iosaf.html');
    $('#1-6-ccmf').load ('./html/1-6-ccmf.html');

    $('#2-1-970x90').load ('./html/2-1-970x90.html');
    $('#2-2-nmc').load ('./html/2-2-nmc.html');
    $('#2-3-nts').load ('./html/2-3-nts.html');
    $('#2-4-160x600').load ('./html/2-4-ad160x600.html');

    $('#3-1-usp').load ('./html/3-1-usp.html');
    // $('#3-2-lphs').load ('./html/3-2-lphs.html');
    // $('#3-3-lpas').load ('./html/3-3-lpas.html');
    // $('#3-4-lpnone').load ('./html/3-4-lpnone.html');
    // $('#3-5-lpvrbo').load ('./html/3-5-lpvrbo.html');
    // $('#3-6-lpcoopsa').load ('./html/3-6-lpcoopsa.html');
    // $('#3-7-lptvlspt').load ('./html/3-7-lptvlspt.html');

    // tab functionality
    $('#tabs-bullets > .tab-links > li > a').click(function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('#tabs-bullets ' + currentAttrValue).fadeIn(1000).siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    }); 
    
    // Functionality to hide or show the tabs by URL parameters
    (function() {
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        var products = getParameterByName('prd');
        products = products.split(',');
        products.forEach((prd) => {
            var el = document.getElementsByClassName(prd)[0];
            el.style.display = 'block';        
            $('#showD1-1').addClass('hide-select');
            $('#showD1-2').addClass('hide-select');
            $('#showD1-3').addClass('hide-select');
            $('#showD1-4').addClass('hide-select');
            $('#showD1-5').addClass('hide-select');
            $('#showD1-6').addClass('hide-select');

            $('#showD2-1').addClass('hide-select');
            $('#showD2-2').addClass('hide-select');
            $('#showD2-3').addClass('hide-select');
            $('#showD2-4').addClass('hide-select');            
            
            $('#showD3-1').addClass('hide-select');
            // $('#showD3-2').addClass('hide-select');
            // $('#showD3-3').addClass('hide-select');
            // $('#showD3-4').addClass('hide-select');
            // $('#showD3-5').addClass('hide-select');
            // $('#showD3-6').addClass('hide-select');
            // $('#showD3-7').addClass('hide-select');
        });
        var divact = products[0];
        $('#' + divact + '').addClass('active').siblings().removeClass('active');
    })();
});