//메인 메뉴 밑 노란 바

/*   자바스크립트만을 이용한 방법/////////////////////
const elMenu = document.querySelectorAll('.gnb > li');
const elBar = document.querySelector('.bar');

elBar.style = `left:${elMenu[0].offsetLeft}px`;   //bar의 시작위치를 첫번째 li로 한다

function barMove(){    

    elMenu.forEach(function(item){
        item.onmouseenter = function(){
            elBar.style = `width:${this.offsetWidth}px ; left:${this.offsetLeft}px`;
        }
    });
    console.log('작동함!!!');
}

window.addEventListener('load', barMove);  
*/

/*   jQuery를 추가 이용한 방법////////////////////*/

$('.bar').css({left:`${$('.gnb > li')[0].offsetLeft}px`});    //bar의 시작위치를 첫번째 li로 한다

let open = 0; //변수open에 0을 넣어준다(화면이 처음 열릴때 .gnbSub 가 닫혀있다)
$('.gnb > li').mouseenter(function(){
    $('.bar').css({left:` ${this.offsetLeft}px`, width:`${this.offsetWidth}px` });
    $('.searchTop').hide();             //서치창이 펼쳐져있으면 없앤다
    $('.searchBtn').removeClass('on');  //서치버튼을 원래대로 돌려놓는다

    if(!open == 0){
        //console.log(`0이 아님!! ${open}  작동!!`);
        $('.gnbSub').hide();
        $(this).find('.gnbSub').show();        
    } else {
       // console.log('변수 open에 0이 들어가있음');
        $(this).find('.gnbSub').slideDown(500);
        open = '으히히히히';
    }
});

$('.kbGnb').mouseleave(function(){
    // console.log('마우스 떠남');
    $('.gnbSub').slideUp(300);
    $('.bar').css({width:'0px'});
    open = 0; 
});

$('.otherUtil').mouseenter(function(){    //otherUtil부분에 마우스가 오면 .gnbSub가 사라짐
    $('.gnbSub').slideUp(300);
    $('.bar').css({width:'0px'});
    open = 0;
})



//////////   searchTop  

$('.searchBtn').click(function(e){
    e.preventDefault();
    $('.searchTop').toggle();
    $(this).toggleClass('on');

});





//// 윗부분 로그인박스의 tab
const tabBtn1 = document.querySelectorAll('.logBox .tabsMenu li'); 
const tabBd1 = document.querySelectorAll('.logBox .tabsBody>div');
console.log(tabBtn1.length);


tabBtn1.forEach(function(item,index){
    item.onclick = function(e){
        e.preventDefault();

        for( let i=0; i<tabBtn1.length; i++){
            tabBtn1[i].classList.remove('on');
            tabBd1[i].style.display='none';
        }

        item.classList.add('on');
        tabBd1[index].style.display='block';
    };
})

//// section 2의 tab (추천카드)
const tabBtn2 = document.querySelectorAll('.recomCard .tabsMenu li'); 
const tabBody2 = document.querySelectorAll('.recomCard .tabsBody>div'); 

tabBtn2.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 3 ; i++){
            tabBtn2[i].classList.remove('on');
            tabBody2[i].style.display= 'none';
        }

        item.classList.add('on');
        tabBody2[aa].style.display= 'flex';
    }
});

//// section4의 tab (guideArea)
const tabBtn3 = document.querySelectorAll('.guideArea .tabsMenu li'); 
const tabBody3 = document.querySelectorAll('.guideArea .tabsBody>div'); 

tabBtn3.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 3 ; i++){
            tabBtn3[i].classList.remove('on');
            tabBody3[i].style.display= 'none';
        }

        item.classList.add('on');
        tabBody3[aa].style.display= 'block';
    }
});



//footer Link
$('.kbNetLink > a').click(function(e){
    e.preventDefault(); 
    $('.orgList').toggle();
});

// 스크롤 시 header, kbGnb 고정

const kbGnbTop = $('.kbGnb').offset().top; //kbGnb 위에서부터 얼마나 떨어져있나 변수에 집어넣음

$(window).scroll(function(){
    let scroll = $(window).scrollTop();

    if(scroll >= kbGnbTop){
        $('.kbGnb').addClass('on');
    } else {
        $('.kbGnb').removeClass('on');
    }
})






