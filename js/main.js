// $(document).ready(function() {
//     $("#tabs").tabs({active: document.tabTest.currentTab.value});

//     $('#tabs a').click(function(e) {
//         var curTab = $('.ui-tabs-active');
//         curTabIndex = curTab.index();
//         document.tabTest.currentTab.value = curTabIndex;
//     });
// });

$(document).ready(function()  {

    var owl = $("#owl-demo");
 
    owl.owlCarousel({
        navigation : true,
        singleItem : true,
        transitionStyle : "fade"
    });

    $("#wireframe").elevateZoom({ 
    zoomType:"inner", 
    cursor:"crosshair",
    zoomWindowWidth:1200, 
    zoomWindowHeight:700 });
});

