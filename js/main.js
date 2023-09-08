console.log("hello world");

// start jquery area
$(document).ready(function(){
    console.log("helloworld");
    $(".navbar_toggle").click(function(){
        $(".navbar_slide_list_group").addClass("active");
    })
    $(".close_navbar_slide_btn").click(function(){
        $(".navbar_slide_list_group").removeClass("active");
    })

    $("#banner_carousel").owlCarousel({
        items : 1,
        nav : true,
        dots : true,
        loop : true,
    })

})

// end jquery area