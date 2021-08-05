
$(document).ready(function(){
    $(".header-menu .list li a").on('click',function(){
        $(this).addClass('active').parent().siblings().find("a").removeClass('active');
    });
    //to hide and show attribute header-section
    $(window).scroll(function(){
        let windowScroll = $(this).scrollTop();
        if(windowScroll >= 500){
            $(".header-menu").addClass('header-menu-under-header');
        }else{
            $(".header-menu").removeClass('header-menu-under-header');
        }
    });

    //when click on btn scroll move to this section
    $(".header-menu .list li a").click(function(){
        let id = $(this).attr('id');
        $('html,body').animate({
            scrollTop: $("."+ id).offset().top
        },500);
    });
    //show and hide btn in cuncret hight
    $(window).scroll(function(){
        if($(this).scrollTop() >= 200){
            $('.scrollTop').show()
        }else{
            $('.scrollTop').hide()
        }
    });
    // to move to top when click on btn
    $('.scrollTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },1000);
    });

    //
    $('.specila-req').keyup(function(e){
        if(e.target.value.length >= 100){
            e.target.value = e.target.value.substr(0,100);
        }
    })
});

