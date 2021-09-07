$(document).ready(function(){
// pc버전
    $('.pc_menu nav>ul').hover(function(){
        // 서브메뉴 내려옴
        $('.pc_sub').stop().slideDown(500,"easeOutBack");
        // 서브배경 내려옴
        $('.pc_sub_bg').stop().slideDown(500,"easeOutBack");
    
    },function(){
        // 서브메뉴 올라감
        $('.pc_sub').stop().slideUp(500,"easeOutExpo");
        // 서브배경 올라감
        $('.pc_sub_bg').stop().slideUp(500,"easeOutExpo");
    
    });

    $('.bar1').click(function(e){
        e.preventDefault();
        alert("이미 종료된 이벤트 입니다.");
    });

//모바일 버전 메뉴
    $('.mo_menu nav>ul>li').hover(function(){
        // 주메뉴의 하위 .mo_sub을 찾아서 slideDown
        $(this).find('.mo_sub').stop().slideDown();
    },function(){
        // 주메뉴의 하위 .mo_sub을 찾아서 slideUp
        $(this).find('.mo_sub').stop().slideUp();
    });

    //햄버거 메뉴 클릭하면 메뉴 영역이 나옴
    $('.mo_btn').click(function(){
        $('.mo_menu').animate({right:0},500,"easeOutExpo");
    });

    // 닫기 버튼을 클릭하면 메뉴영역이 들어감
    $('.close').click(function(){
        $('.mo_menu').show();
        $('.mo_menu').animate({right:'-100vw'},500,"easeInExpo");
    });

    $('.m_bar1').click(function(e){
        e.preventDefault();
        alert("이미 종료된 이벤트 입니다.");
    });

    // top버튼 (맨위로 이동)
    $('.top').click(function(){
        $('html,body').animate({scrollTop:0});
    });

    // bottom버튼 (맨 아래로 이동)
    var winHeight=$(document).height();
    $('.bottom').click(function(){
        $('html,body').animate({scrollTop:winHeight},'slow');
    });
});