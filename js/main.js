console.log("hello world");

// start jquery area
$(document).ready(function(){
    console.log("helloworld");
    // start nav side bar
    $(".navbar_toggle").click(function(){
        $(".navbar_slide_list_group").addClass("active");
    })
    $(".close_navbar_slide_btn").click(function(){
        $(".navbar_slide_list_group").removeClass("active");
    })
    // start nav side bar
    // start banner section
    $("#banner_carousel").owlCarousel({
        items : 1,
        nav : true,
        dots : true,
        loop : true,
    })
    // end banner section
    // start event section
    $("#events_carousel").owlCarousel({
        items : 1,
        nav : true,
        dots : true,
        loop : true,
    })
    // end event section

    // start reservation section
    $("#selectdate").flatpickr(
        {
            minDate: "today",
            maxDate: new Date().fp_incr(14) // 14 days from now
        }
    );
    $("#time").flatpickr(
        {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        }
    );
    // end reservation section

    // start review section
    $("#review_carousel").owlCarousel({
        items : 1,
        nav : true,
        dots : true,
        loop : true,
    })
    // end review section
})

// end jquery area