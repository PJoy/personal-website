/**
 * Created by pierreportejoie on 19/06/16.
 */

;(function(){
    function id(v){ return document.getElementById(v); }
    function loadbar() {
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0,
            tot = img.length;
        if(tot == 0) return doneLoading();

        function imgLoaded(){
            c += 1;
            var perc = ((100/tot*c) << 0) +"%";
            prog.style.width = perc;
            stat.innerHTML = "Loading "+ perc;
            if(c===tot) return doneLoading();
        }
        function doneLoading(){
            ovrl.style.opacity = 0;
            setTimeout(function(){
                ovrl.style.display = "none";
                jQuery("section, footer").show();
            }, 1200);
        }
        for(var i=0; i<tot; i++) {
            var tImg     = new Image();
            tImg.onload  = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src     = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());


$(document).ready(function(){
    applyHeader();
    colorTheSkills();
    var index = 0;
    $('.slideshow').hide();
    $('.slideshow:first').toggle();
    window.setInterval(function(){
        $('.slideshow:nth-of-type('+(index%5+1)+')').toggle();
        $('.slideshow:nth-of-type('+((index+1)%5+1)+')').toggle();
        index = (index+1)%5;
    }, 3000);
});



function applyHeader() {
    $('header').css({ height: ($(window).height()) +'px' });
}

function colorTheSkills() {
    colorSkills('#svg1', 8, '#E84A5F', '#2A363B');
    colorSkills('#svg2', 8, '#E84A5F', '#2A363B');
    colorSkills('#svg3', 3, '#E84A5F', '#2A363B');
}

function colorSkills(elemt, grade, col1, col2) {
    var gElems = [$(elemt +' path:nth-of-type(3)'), $(elemt +' path:nth-of-type(7)'), $(elemt +' path:nth-of-type(5)'), $(elemt +' path:nth-of-type(8)'), $(elemt +' path:nth-of-type(6)'), $(elemt +' path:nth-of-type(4)'), $(elemt +' path:nth-of-type(2)'), $(elemt +' path:nth-of-type(1)')];

    for (var i = 0; i < 8; i++){
        if ((i) < grade ) gElems[i].attr("fill", col1);
        else gElems[i].attr("fill", col2)
    }
}

function showOnlyWeb(){
    if (jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button').not('.clicked').get(0) === jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.btn-1').get(0)){
        jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.clicked').click();
        return;
    }
    if (jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.btn-1').hasClass('clicked')) jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.btn-1').click()
    jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button').not('.btn-1').not('.clicked').click()
}
function showOnlyRes(){
    if (jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button').not('.clicked').get(0) === jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.btn-3').get(0)){
        jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.clicked').click();
        return;
    }
    if (jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.btn-3').hasClass('clicked')) jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.btn-3').click()
    jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button').not('.btn-3').not('.clicked').click()
}
function showOnlyCre(){
    if (jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button').not('.clicked').get(0) === jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.btn-5').get(0) && jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button').not('.clicked').get(1) === undefined){
        jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.clicked').click();
        return;
    }
    if (jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.btn-5').hasClass('clicked')) jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button.btn-5').click()
    jQuery('#portfolio > div > div > div > div:nth-child(6) > div.col-md-4.img-cont > button').not('.btn-5').not('.clicked').click()
}

function showHideProjects (button, type) {
    $(button).toggleClass('clicked');
    $('.'+type).fadeToggle();
}

function showHideExperiences (button, type) {
    $(button).toggleClass('clicked');
    if ($('.experience.'+type+' .line').css("display") == 'none'){
        $('.experience.'+type+' .line').toggle(0);
        $('.experience.'+type+' .metro').toggle(0);
        $('.experience.'+type).slideToggle();
    } else {
        $('.experience.'+type).slideToggle();
        $('.experience.'+type+' .line').delay(400).toggle(0);
        $('.experience.'+type+' .metro').delay(400).toggle(0);
    }
}

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


//selector of experience nav
//$('.main-nav li:nth-of-type(2)')