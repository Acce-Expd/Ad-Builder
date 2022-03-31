$(document).ready(function () {
    // BANNERS (TPS TAGS) | 1-1-ban.html
    $("#ctcBtt").hide();
    $("#rBtt").hide();

    $("#genBttUrl").click(function () {
        var comments = $('#cmmdBtt').val();
        var text = "";
        changeslen = $("#chgBtt input:checked").length;
        if (changeslen !== 0) {
            $("#chgBtt input:checked").each(function (index) {
                text += $(this).val();
                text += (index + 1 === changeslen) ? '' : ', ';
            });
           text += "\n\n";
            var goToUrl = "https://ewe-assets.s3.amazonaws.com/media/meso_cm/others/Prototype/EN/page_13-banners-tps-tags-sumary.html?comment=" + comments + "&id=" + text;
            document.getElementById("inptBtt").value = goToUrl;
        }
        $("#chgBtt").hide();                    
        $("#rBtt").show();
        $("#ctcBtt").show();
        $('#optBtt').html(text).focus().select();
        $('#cmmdBttTxt').html(comments).focus().select();

    });     
    
    // BANNER - CLIENT DESIGNED | 1-3-bpc.html
    $("#ctcBpc").hide();
    $("#rBpc").hide();

    $("#genBpcUrl").click(function () {
        var comments = $('#cmmdBpc').val();
        var text = "";
        changeslen = $("#chgBpc input:checked").length;
        if (changeslen !== 0) {
            $("#chgBpc input:checked").each(function (index) {
                text += $(this).val();
                text += (index + 1 === changeslen) ? '' : ', ';
            });
           text += "\n\n";
            var goToUrl = "https://ewe-assets.s3.amazonaws.com/media/meso_cm/others/Prototype/EN/page_34-banner-provided-client-sumary.html?comment=" + comments + "&id=" + text;
            document.getElementById("inptBpc").value = goToUrl;
        }
        $("#chgBpc").hide();                    
        $("#rBpc").show();
        $("#ctcBpc").show();
        $('#optBpc').html(text).focus().select();
        $('#cmmdBpcTxt').html(comments).focus().select();

    });  

    // TAAP OFFERING | 1-4-taapoff.html    
    $("#ctcTaapoff").hide();
    $("#rTaapoff").hide();

    $("#genTaapoffUrl").click(function () {
        let comments = $('#cmmdTaapoff').val();
        let text = "";
        let desctxt = "";
        changeslen = $("#chgTaapoff input:checked").length;
        if (changeslen !== 0) {
            $("#chgTaapoff input:checked").each(function (index) {
                text += $(this).attr('id');
                desctxt += $(this).attr('value');
                text += (index + 1 === changeslen) ? '' : ',';
                desctxt += (index + 1 === changeslen) ? '' : ',';
            });
           text += "\n\n";
           desctxt += "\n\n";

            let goToUrl = "https://ewe-assets.s3.amazonaws.com/media/meso_cm/others/Prototype/EN/page_48-taap-offering-summary.html?comment=" + comments + "&id=" + text;
            document.getElementById("inptTaapoff").value = goToUrl;
        }
        $("#chgTaapoff").hide();                    
        $("#rTaapoff").show();
        $("#ctcTaapoff").show();
        $('#optTaapoff').html(desctxt).focus().select();
        $('#cmmdTaapoffTxt').html(comments).focus().select();

    });

    // CO-OP SPONSOR ASSETS | 2-7-lpcoopsa.html
    $("#ctcLpcoopsa").hide();
    $("#rLpcoopsa").hide();

    $("#genLpcoopsaUrl").click(function () {
        let comments = $('#cmmdLpcoopsa').val();
        let text = "";
        let desctxt = "";
        changeslen = $("#chgLpcoopsa input:checked").length;
        if (changeslen !== 0) {
            $("#chgLpcoopsa input:checked").each(function (index) {
                text += $(this).attr('id');
                desctxt += $(this).attr('value');
                text += (index + 1 === changeslen) ? '' : ',';
                desctxt += (index + 1 === changeslen) ? '' : ',';
            });
        text += "\n\n";
        desctxt += "\n\n";
        
            let goToUrl = "https://ewe-assets.s3.amazonaws.com/media/meso_cm/others/Prototype/EN/page_44-co-op-sponsor-assets-landing-page-summary.html?comment=" + comments + "&id=" + text;
            document.getElementById("inptLpcoopsa").value = goToUrl;
        }
        $("#chgLpcoopsa").hide();                    
        $("#rLpcoopsa").show();
        $("#ctcLpcoopsa").show();
        $('#optLpcoopsa').html(desctxt).focus().select();
        $('#cmmdLpcoopsaTxt').html(comments).focus().select();

    }); 

    // TRAVEL SPOTLIGHT | 3-7-lptvlspt.html
    $("#ctcLptvlspt").hide();
    $("#rLptvlspt").hide();

    $("#genLptvlsptUrl").click(function () {
        let comments = $('#cmmdLptvlspt').val();
        let text = "";
        let desctxt = "";
        changeslen = $("#chgLptvlspt input:checked").length;
        if (changeslen !== 0) {
            $("#chgLptvlspt input:checked").each(function (index) {
                text += $(this).attr('id');
                desctxt += $(this).attr('value');
                text += (index + 1 === changeslen) ? '' : ',';
                desctxt += (index + 1 === changeslen) ? '' : ',';
            });
           text += "\n\n";
           desctxt += "\n\n";


            let goToUrl = "https://ewe-assets.s3.amazonaws.com/media/meso_cm/others/Prototype/EN/page_55-travel-spotlights-summary.html?comment=" + comments + "&id=" + text;
            document.getElementById("inptLptvlspt").value = goToUrl;
        }
        $("#chgLptvlspt").hide();                    
        $("#rLptvlspt").show();
        $("#ctcLptvlspt").show();
        $('#optLptvlspt').html(desctxt).focus().select();
        $('#cmmdLptvlsptTxt').html(comments).focus().select();

    });

});

// BANNERS (TPS TAGS) | 1-1-ban.html
function copyUrlBtt() {
    let copyText = document.getElementById("inptBtt");
    copyText.select();
    document.execCommand("copy");
    //alert("Copied the Url: " + copyText.value);
}

function goToBtt() {
    let gettesturl = document.getElementById("inptBtt").value;
    window.open(gettesturl);
}

// BANNER - CLIENT DESIGNED | 1-3-bpc.html
function copyUrlBpc() {
    let copyText = document.getElementById("inptBpc");
    copyText.select();
    document.execCommand("copy");
    //alert("Copied the Url: " + copyText.value);
}

function goToBpc() {
    let gettesturl = document.getElementById("inptBpc").value;
    window.open(gettesturl);
}


function copyUrlTaapoff() {
    let copyText = document.getElementById("inptTaapoff");
    copyText.select();
    document.execCommand("copy");
    //alert("Copied the Url: " + copyText.value);
}

function goToTaapoff() {
    let gettesturl = document.getElementById("inptTaapoff").value;
    window.open(gettesturl);
}

// CO-OP SPONSOR ASSETS | 2-7-lpcoopsa.html
function copyUrlLpcoopsa() {
    let copyText = document.getElementById("inptLpcoopsa");
    copyText.select();
    document.execCommand("copy");
    //alert("Copied the Url: " + copyText.value);
}

function goToLpcoopsa() {
    let gettesturl = document.getElementById("inptLpcoopsa").value;
    window.open(gettesturl);
}

// TRAVEL SPOTLIGHT | 3-7-lptvlspt.html
function copyUrlLptvlspt() {
    let copyText = document.getElementById("inptLptvlspt");
    copyText.select();
    document.execCommand("copy");
    //alert("Copied the Url: " + copyText.value);
}

function goToLptvlspt() {
    let gettesturl = document.getElementById("inptLptvlspt").value;
    window.open(gettesturl);
}