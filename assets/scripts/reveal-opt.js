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