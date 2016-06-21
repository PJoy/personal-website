/**
 * Created by pierreportejoie on 19/06/16.
 */

$(document).ready(function(){
    applyHeader();
    colorSkills('#svg1', 8, '#E84A5F', '#2A363B');
    colorSkills('#svg2', 8, '#E84A5F', '#2A363B');
    colorSkills('#svg3', 3, '#E84A5F', '#2A363B');

});

function applyHeader()
{
    $('header').css({ height: ($(window).height()) +'px' });
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

$('#portfolio p').click(function(){
    $('.btn-2').click();
    $('.btn-3').click();
    $('.btn-4').click();
    $('.btn-5').click();
});

function generatePortfolio(n) {

}