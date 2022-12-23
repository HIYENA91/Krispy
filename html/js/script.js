$(function(){

    /* gnb menu*/
    $('.nav_inner').mouseenter(function(){
        $('.gnb_submenu, .sub_back').stop().slideDown(700);
    });
    $('.nav_inner').mouseleave(function(){
        $('.gnb_submenu, .sub_back').stop().slideUp(700);
    });
    

    /* slider */
    $(".slider").slick({
        slide: "div",//슬라이드 되어야할 태그
        infinity: true, //무한반복 옵션
        slidesToShow: 1, //한 화면에 보여질 콘텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 콘텐츠 개수
        autoplay: true,  //자동스크롤 여부
        autoplaySpeed: 3000, //자동스크롤시 다음으로 넘어가기 전 대기 시간
        speed: 2000,  //슬라이드 속도
        pauseOnHover: true,  //자동 슬라이드시 마우스 호버하면 슬라이드 일시정지
        draggable: true,  //드래그 가능여부
        prevArrow:(".prev_button"), //previous 버튼 class 지정
        nextArrow:(".next_button"),  //next 버튼 class 지정
        dots: true, //페이지네이션 사용 유무
        appendDots:(".custom-slide-dots"), //해당 선택자 하위로 페이지네이션 생성

    });

    $("figure .slider .slider_cont .txt_img1").addClass("num1");

    /* slider afterChange */
    $(".slider").on("afterChange", function(event,slick,currentSlide,nextSlide){
        
        // $(".slider .slider_cont").removeClass("slick-active");
        // $(".slider .slider_cont").eq(currentSlide+1).addClass("slick-active");

       if($(".slick-dots li:nth-of-type(1)").hasClass("slick-active")){ //slick-dots의 li중 첫번째가 클래스명 slick-active를 가졌을 때
        $("figure .slider .slider_cont .txt_img1").removeClass("num1");
        $("figure .slider .slider_cont .txt_img1").addClass("num1");
       } else if($(".slick-dots li:nth-of-type(2)").hasClass("slick-active")){
           $("figure .slider .slider_cont .txt_img1").removeClass("num1");
       } else if($(".slick-dots li:nth-of-type(3)").hasClass("slick-active")){
           $("figure .slider .slider_cont .txt_img1").removeClass("num1");
       } else if($(".slick-dots li:nth-of-type(4)").hasClass("slick-active")){
           $("figure .slider .slider_cont .txt_img1").removeClass("num1");
       } else if($(".slick-dots li:nth-of-type(5)").hasClass("slick-active")){
           $("figure .slider .slider_cont .txt_img1").removeClass("num1");
       };

    });

    /* signature menu */
    $(".americano img").on("mousemove",function(e){
        let offset = $(this).offset();
        let scrTop = e.pageY - offset.top;
        let scrLeft = e.pageX - offset.left;

        $('.contents .americano img').css({top:(scrTop * -0.1), left:(scrLeft * -0.1)});
    });

    $(".doughnut img").on("mousemove",function(e){
        let offset = $(this).offset();
        let scrTop = e.pageY - offset.top;
        let scrLeft = e.pageX - offset.left;

        $('.contents .doughnut img').css({top:(scrTop * -0.1), left:(scrLeft * 0.1)});
    });

    $(".icecream img").on("mousemove",function(e){
        let offset = $(this).offset();
        let scrTop = e.pageY - offset.top;
        let scrLeft = e.pageX - offset.left;

        $('.contents .icecream img').css({top:(scrTop * -0.1), left:(scrLeft * 0.1)});
    });
    // 마우스 오버시 구역마다 따로 움직이길 원해서 나눠놓음




    /* popup */
    $(".americano").click(function(){
        //$(".layer").css("display","block");
        $(".popup_1").show();
    });

    $(".popup_1 .close").click(function(){
        //$(".layer").css("display","none");
        $(".popup_1").hide();
    });
    
});