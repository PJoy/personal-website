/**
 * Created by pierreportejoie on 19/06/16.
 */
/*
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
*/

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
    if (jQuery('.portfolio-btn:not(.clicked)').get(0) === jQuery('#cat-w-btn').get(0) &&
        jQuery('.portfolio-btn:not(.clicked)').get(1) === undefined){
        jQuery('.portfolio-btn').removeClass('clicked')
        $('.img-cont:not(:first)').fadeIn();
    } else {
        jQuery('.portfolio-btn:not(#cat-w-btn)').addClass('clicked');
        jQuery('#cat-w-btn').removeClass('clicked');
        $('.img-cont:not(:first):not(.cat-w)').fadeOut();
        $('.img-cont:not(:first).cat-w').fadeIn();
    }
}
function showOnlyRes(){
    if (jQuery('.portfolio-btn:not(.clicked)').get(0) === jQuery('#cat-i-btn').get(0) &&
        jQuery('.portfolio-btn:not(.clicked)').get(1) === undefined){
        jQuery('.portfolio-btn').removeClass('clicked')
        $('.img-cont:not(:first)').fadeIn();
    } else {
        jQuery('.portfolio-btn:not(#cat-i-btn)').addClass('clicked');
        jQuery('#cat-i-btn').removeClass('clicked');
        $('.img-cont:not(:first):not(.cat-i)').fadeOut();
        $('.img-cont:not(:first).cat-i').fadeIn();
    }
}
function showOnlyCre(){
    if (jQuery('.portfolio-btn:not(.clicked)').get(0) === jQuery('#cat-s-btn').get(0) &&
        jQuery('.portfolio-btn:not(.clicked)').get(1) === jQuery('#cat-c-btn').get(0) &&
        jQuery('.portfolio-btn:not(.clicked)').get(2) === undefined){
        jQuery('.portfolio-btn').removeClass('clicked');
        $('.img-cont:not(:first)').fadeIn();
    } else {
        jQuery('.portfolio-btn:not(#cat-s-btn):not(#cat-c-btn)').addClass('clicked');
        jQuery('#cat-s-btn').removeClass('clicked');
        jQuery('#cat-c-btn').removeClass('clicked');
        $('.img-cont:not(:first):not(.cat-s):not(.cat-c)').fadeOut();
        $('.img-cont:not(:first).cat-s').fadeIn();
        $('.img-cont:not(:first).cat-c').fadeIn();
    }
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