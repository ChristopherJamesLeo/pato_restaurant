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
})

// end jquery area