/**
 * Created by pierreportejoie on 19/06/16.
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



function applyHeader()
{
    $('header').css({ height: ($(window).height()) +'px' });
}

function colorTheSkills(){
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

function showHideProjects (button, type){
    $(button).toggleClass('clicked');
    $('.'+type).fadeToggle();
}

function showHideExperiences (button, type){
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

