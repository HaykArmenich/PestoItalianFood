$(document).ready(function(e){
    //  Navbar change background color scrol   
    $(document).scroll(() => {
        let y = parseInt($(document).scrollTop())
        if(y > 80){
            $(".navbar").css("background-color","#323232")
            $(".navbar_block").css("padding", "17px 0")
        } else {
            $(".navbar").css("background-color", "rgba(255, 255, 255, 0.11)")
            $(".navbar_block").css("padding", "38px 0")
        }
    })

    //  Button show that transfer header   
    $(document).scroll(() => {
        let x = parseInt($(document).scrollTop())
        if(x > 300){
            $(".topBtn-block").css("bottom", "55px") 
        } else {
            $(".topBtn-block").css("bottom", "-60px")
        }
    })

    //  Chek the input
    $("#chekBtn").click((e) => {
        let nameInput = $(".nameInput").val();
        let phoneInput = $(".phoneInput").val();

        if(phoneInput == "" && nameInput == ""){
            $(".nameInput, .phoneInput").css("border-bottom", "1px solid red");
            $(".phoneInputSpan, .nameInputSpan").css({
                fontSize:"12px",
                color:"red",
                textAlign:"right"
            })

            $(".phoneInputSpan").html("Only numbers are required");
            $(".nameInputSpan").html("The text field is required.")
            
        } else if (phoneInput == ""){
            $(".phoneInput").css("border-bottom", "1px solid red");
            $(".phoneInputSpan").css({
                fontSize:"12px",
                color:"red",
                textAlign:"right"
            })

            $(".phoneInputSpan").html("Only numbers are required");
        } else if(nameInput == ""){
            $(".nameInput").css("border-bottom", "1px solid red");
            $(".nameInputSpan").css({
                fontSize:"12px",
                color:"red",
                textAlign:"right"
            })

            $(".nameInputSpan").html("The text field is required.");
        }else {
            if(isNaN(Number(phoneInput))) {
                $(".phoneInput").css("border-bottom", "1px solid red");
                $(".phoneInputSpan").css({
                    fontSize:"12px",
                    color:"red",
                    textAlign:"right"
                })
                $(".phoneInputSpan").html("Only numbers are required");
            } else {
                $(".phoneInput").css("border", "none");
                $(".phoneInputSpan").empty()
            }

            $(".nameInput").css("border", "none");
            $(".nameInputSpan").empty();
        }
    })

    $(".nameInput").blur(() => {
        let inpVal = $(".nameInput").val()
        if(inpVal== ""){
            $(".nameInputSpan").html("The text field is required.");
            $(".nameInput").css("border-bottom", "1px solid red");
            $(".nameInputSpan").css({
                fontSize:"12px",
                color:"red",
                textAlign:"right",
            })
        } else {
            $(".nameInput").css("border","none")
            $(".nameInputSpan").empty()
        }
    })

    $(".phoneInput").blur(() => {
        let inpVal = $(".phoneInput").val();
        if(inpVal == "" || isNaN(Number(inpVal))){
        $(".phoneInputSpan").html("Only numbers are required");
        $(".phoneInputSpan").css({
            fontSize:"12px",
            color:"red",
            textAlign:"right",
        })

        $(".phoneInput").css("border-bottom", "1px solid red");
        }
    })

    $(".nameInput").keyup(() => {
        let x = $(".nameInput").val()
        console.log(x)
        if(x != ""){
            $(".nameInput").css("border","none" )
            $(".nameInputSpan").empty()
        }
    })

    $(".phoneInput").keyup(() => {
        let y = $(".phoneInput").val()
        if(!isNaN(Number(y))){
            $(".phoneInput").css("border","none" )
            $(".phoneInputSpan").empty()
        } else {
            $(".phoneInputSpan").html("Only numbers are required");
            $(".phoneInputSpan").css({
            fontSize:"12px",
            color:"red",
            textAlign:"right",
            })
    
            $(".phoneInput").css("border-bottom", "1px solid red");
        }
    })
    
    // Change food our resturnat 
    $(".desertFoodBtn ").click(()=> {
        $(".food2").removeClass("noneFood");
        $(".food1").addClass("noneFood");
        $(".food3").addClass("noneFood");

        $(".maninsFoodBtn").removeClass("activeFoodBtn")
        $(".drinkFoodBtn").removeClass("activeFoodBtn")
        $(".desertFoodBtn").addClass("activeFoodBtn")
    })

    $(".maninsFoodBtn").click(() => {
        $(".maninsFoodBtn").addClass("activeFoodBtn");
        $(".desertFoodBtn").removeClass("activeFoodBtn");
        $(".drinkFoodBtn").removeClass("activeFoodBtn");

        $(".food2").addClass("noneFood");
        $(".food3").addClass("noneFood");
        $(".food1").removeClass("noneFood");
    })

    $(".drinkFoodBtn").click(()=> {
        $(".food2").addClass("noneFood");
        $(".food1").addClass("noneFood");
        $(".food3").removeClass("noneFood");
        
        $(".maninsFoodBtn").removeClass("activeFoodBtn");
        $(".desertFoodBtn").removeClass("activeFoodBtn");
        $(".drinkFoodBtn").addClass("activeFoodBtn");
    })
    
    // Owl corusel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    // menu
    $(".btn_mobileMenu").click(function(){
        $(".mobileMenu").toggleClass("openMenu")
    })


    $(".btn_mobileMenu").click(() => {
        $(".btn_mobileMenu").toggleClass("changeBtn");
        $(".btn_mobileMenu").toggleClass("toggle")
    })

    // zoom
    $(".zoomBtnBlock").click(function(){
        let elem = $(this);
        let imgSrc = elem.find(".nkar11").attr("src")

        $(".popup-img").fadeIn()
        $(".zomImage").addClass("activeImg")
        $(".zomImage").attr("src", imgSrc)
    })

    $(".closeZoomImageBtn").click(function(){
        $(".zommBlock").fadeOut()
    })

   // slider About.html
    $(".next").click(function (){
        console.log("clicked")
        let activeSlide = $(".avtiveSlide");
        var nextSlide= activeSlide.next();
        
        $(".prev").css("opacity", 1)
        if(nextSlide.length){
               activeSlide.removeClass("avtiveSlide");
               nextSlide.addClass("avtiveSlide");
               $(this).css("opacity", 1)
        } else {
            $(this).css("opacity", "0.25")
        }
    })

    $(".prev").click(function (){
        let activeSlide = $(".avtiveSlide");
        var prevSlide= activeSlide.prev();
        
        $(".next").css("opacity", 1)
        if(prevSlide.length){
            activeSlide.removeClass("avtiveSlide");
            prevSlide.addClass("avtiveSlide");
            $(this).css("opacity", 1)
        } else {
            $(this).css("opacity", "0.25")
        }
    })

    $(".sliderbtn").click(function(){
        $(".avtiveSlide").removeClass("avtiveSlide");
        var clickedIndex = $(".sliderbtn").index($(this))
        $(".sliderbtn").not(this).removeClass("boxShadow")
        $(this).addClass("boxShadow")

        $(".sliderItem").eq(clickedIndex).addClass("avtiveSlide")
    })

    // $(window).on("load", function (){
    //     $(".loading").fadeOut(1200)
    // })
})