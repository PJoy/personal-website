/**
 * Created by pierreportejoie on 26/06/16.
 */
jQuery('h2').attr("data-sr","move 0px, scale down 20%");
jQuery('.experience').attr("data-sr","enter bottom, scale 0%, move 50px, vFactor 0");
jQuery('#skills .row .row').attr("data-sr","");
jQuery('#skills .row h3').attr("data-sr","");

jQuery('#portfolio .row .row .col-md-2').attr("data-sr","");
jQuery('#portfolio .row .row .col-md-3').attr("data-sr","");
jQuery('#portfolio .row .row .col-md-4').attr("data-sr","");
jQuery('#portfolio .row .row .col-md-5').attr("data-sr","");
jQuery('#portfolio .row .row .col-md-6').attr("data-sr","");
jQuery('#portfolio .row .row .col-md-8').attr("data-sr","");
jQuery('#portfolio .row .row .col-md-10').attr("data-sr","");
jQuery('#portfolio .row .row .col-md-12').attr("data-sr","");

jQuery('form').attr("data-sr","");

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

window.sr = new scrollReveal({reset : true});
//window.sr = new scrollReveal();