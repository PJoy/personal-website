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

/**
 * Created by pierreportejoie on 26/06/16.
 */
jQuery('h2').attr("data-sr","move 0px, scale down 20%");
//jQuery('.experience').attr("data-sr","enter bottom, scale 0%, move 50px, vFactor 0");

jQuery('#skills .row .row').attr("data-sr","");

jQuery('#skills .row h3').attr("data-sr","");

/*jQuery('#portfolio .row .row .col-md-2').attr("data-sr","vFactor 0.0");
 jQuery('#portfolio .row .row .col-md-3').attr("data-sr","vFactor 0.0");
 jQuery('#portfolio .row .row .col-md-4').attr("data-sr","vFactor 0.0");
 jQuery('#portfolio .row .row .col-md-5').attr("data-sr","vFactor 0.0");
 jQuery('#portfolio .row .row .col-md-6').attr("data-sr","vFactor 0.0");
 jQuery('#portfolio .row .row .col-md-8').attr("data-sr","vFactor 0.0");
 jQuery('#portfolio .row .row .col-md-10').attr("data-sr","vFactor 0.0");
 jQuery('#portfolio .row .row .col-md-12').attr("data-sr","vFactor 0.0");*/

jQuery('.navbar').hide();

jQuery('form .btn').attr("data-sr","");

jQuery('i').attr("data-sr","move 0px, scale up 50%");
//jQuery('.ability-score span').attr("data-sr","enter left, scale 0%");
/*jQuery('.ability-score span:nth-of-type(4)').attr("data-sr","enter left, scale 0%,wait 0.2s");
 jQuery('.ability-score span:nth-of-type(3)').attr("data-sr","enter left, scale 0%,wait 0.4s");
 jQuery('.ability-score span:nth-of-type(2)').attr("data-sr","enter left, scale 0%,wait 0.6s");
 jQuery('.ability-score span:nth-of-type(1)').attr("data-sr","enter left, scale 0%,wait 0.8s");*/

jQuery('.skill-wheel .col-md-3').attr("data-sr","move 0px, scale 0%");

/*document.documentElement.addEventListener('DOMAttrModified', function(e){
 if (e.attrName === 'style') {
 console.log('prevValue: ' + e.prevValue, 'newValue: ' + e.newValue);
 }
 }, false);*/


/*var observer = new MutationObserver(function(mutations) {
 mutations.forEach(function(mutationRecord) {
 console.log(mutationRecord);
 });
 });
 var target = jQuery('.skill-wheel .col-md-4').get(0);
 observer.observe(target, { attributes : true, attributeFilter : ['style'] });*/


/*jQuery('.skill-wheel path:nth-of-type(2)').attr("data-sr","enter left, scale 0%,wait 0.8s");
 jQuery('.skill-wheel path:nth-of-type(3)').attr("data-sr","enter left, scale 0%,wait 0.8s");
 jQuery('.skill-wheel path:nth-of-type(4)').attr("data-sr","enter left, scale 0%,wait 0.8s");
 jQuery('.skill-wheel path:nth-of-type(5)').attr("data-sr","enter left, scale 0%,wait 0.8s");
 jQuery('.skill-wheel path:nth-of-type(6)').attr("data-sr","enter left, scale 0%,wait 0.8s");
 jQuery('.skill-wheel path:nth-of-type(7)').attr("data-sr","enter left, scale 0%,wait 0.8s");
 jQuery('.skill-wheel path:nth-of-type(8)').attr("data-sr","enter left, scale 0%,wait 0.8s");*/
//jQuery('.skill-wheel path').wrap('<div></div>');

function triggerSkillsAnim(e){
    var time = 20;
    if (jQuery(e).hasClass('skill-wheel')){
        jQuery(e).find('svg').find('path:nth-of-type(3)').delay(5*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(7)').delay(10*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(5)').delay(15*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(8)').delay(20*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(6)').delay(25*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(4)').delay(30*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(2)').delay(35*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(1)').delay(40*time).fadeToggle();
    } else if (jQuery(e).hasClass('skillAnim')) {
        jQuery(e).find('li').find('.glyphicon:nth-of-type(5)').delay(8*time).fadeToggle();
        jQuery(e).find('li').find('.glyphicon:nth-of-type(4)').delay(16*time).fadeToggle();
        jQuery(e).find('li').find('.glyphicon:nth-of-type(3)').delay(24*time).fadeToggle();
        jQuery(e).find('li').find('.glyphicon:nth-of-type(2)').delay(32*time).fadeToggle();
        jQuery(e).find('li').find('.glyphicon:nth-of-type(1)').delay(40*time).fadeToggle();
    } else if (jQuery(e).hasClass('img-circle')) {
        jQuery('.navbar').toggle("slide");
    }
}
window.sr = new scrollReveal({complete : function(e) {triggerSkillsAnim(e) }});
//window.sr = new scrollReveal();


/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-default',
    offset: 100
});

$('body').scrollspy({
    target: '.sticky-navbar'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});
