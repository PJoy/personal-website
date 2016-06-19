/**
 * Created by pierreportejoie on 19/06/16.
 */

$(document).ready(function(){
    applyHeader();
});

function applyHeader()
{
    $('header').css({ height: ($(window).height()) +'px' });
}