$(document).ready(function() {

    $(".fancyb").fancybox();

    $('.fancyb').each(function() {
        $(this).attr('href', $(this).siblings('.popularArticles__item-images').children('img').attr('src'));
    });


    $('.searchBox button').click(function(){
        let valSearch = $('.search').val();
        if(valSearch != ''){
            $('.searchlink').attr('href','https://www.google.com/search?q='+valSearch);
        }
    });

    let imgHeadHeight = $('.mainBlock__center img').prop('naturalHeight');
    let imgHeadWidth = $('.mainBlock__center img').prop('naturalWidth');


    function bgColor(){
        let bgColor = $('body').css('background-color');
        let bgSidebar = $('.sidebar').css('background-color');
        let boxShadow = $('.mainBlock').css('box-shadow');

        let shadowNumber = boxShadow.split(' '); // shadowNumber[5]

        if(tinycolor(bgColor).isLight()){
            $('header').css({'background':'inherit', 'padding-left':'0px'});
            $('.mainBlock').css({'box-shadow':'0px 0px '+shadowNumber[5]+' #e1e1e1'});
            $('.nav-item a').css({'color':'#333', 'border-color':'rgba(90,90,90, .1)'});
            $('.privacyBox').css({'color':'#333'});
        }else{
            $('header').css({'background':'#fff'});
            $('.mainBlock').css({'box-shadow':'0px 0px '+shadowNumber[5]+' #4b4b4b'});
            $('.nav-item a').css({'color':'#fff'});
            $('.nav-item a').css({'color':'#333', 'border-color':'rgba(215,215,215, .1)'});
            $('.privacyBox').css({'color':'#fff'});
        }

        if(tinycolor(bgSidebar).isLight()){
            $('.sidebar').css({'color':'#222'});
        }else{
            $('.sidebar').css({'color':'#fff'});

        }




    }


    bgColor();


    if($('.content').hasClass('flex-row-reverse')){
        $('.mainBlock').css({'margin-left':'0px'});
        if($('.mainBlock').css('margin') == 0){
            $('.mainBlock').css({'border-radius':'15px 0px 0px 15px'});
            $('.sidebar').css({'border-radius':'0px 15px 15px 0px'});
        }
    }else if($('.content').hasClass('flex-row')){
        if($('.mainBlock').css('margin') == 0){
            $('.mainBlock').css({'border-radius':'0px 15px 15px 0px'});
            $('.sidebar').css({'border-radius':'15px 0px 0px 15px'});
        }
        $('.mainBlock').css({'margin-right':'0px'});

    }




    if($('.headBox').css('margin-bottom') == '0px'){
        $('.headBox').css({'border-radius':'0px'});
        $('.content > div').css({'border-radius':'0px'});
        $('.content > div').addClass('rounded-0');
        if($('.headBox').css('background-color') == 'rgb(255, 255, 255)'){
            $('.mainBlock').css({'box-shadow':'none'});
        }
    }




    if($('#randomRating').hasClass('1')){
        $('.raiting-1').show();
    }else if($('#randomRating').hasClass('2')){
        $('.raiting-2').show();
    }else if($('#randomRating').hasClass('3')){
        $('.raiting-3').show();
    }else if($('#randomRating').hasClass('4')){
        $('.raiting-4').show();
    }else if($('#randomRating').hasClass('5')){
        $('.raiting-5').show();
    }

    if($('.content_block .figure').hasClass('float-none')){
        if(imgHeadHeight == imgHeadWidth || imgHeadHeight > imgHeadWidth){
            $('.content_block img').css({'width':'50%'});
            $('.content_block .figure').css({'text-align':'center', 'width':'100%'});
        }else{
            $('.content_block img').css({'width':'100%'});
        }
    }else if($('.content_block .figure').hasClass('float-end')){
        if(imgHeadHeight > imgHeadWidth){
            $('.content_block img').css({'width':'50%'});
            $('.content_block .figure').css({'text-align':'center'});
        }
        $('.content_block img').css({'margin-left':'15px'});
    }else if($('.content_block .figure').hasClass('float-start')){
        if(imgHeadHeight > imgHeadWidth){
            $('.content_block img').css({'width':'50%'});
            $('.content_block .figure').css({'text-align':'center'});
        }
        $('.content_block img').css({'margin-right':'15px'});
    }

    if($('.mainBlock__top-viewBox').hasClass('d-none')){
        $('.mainBlock__top h2').css({'width':'100%'});
    }
    if($('.mainBlock__top-viewBox').hasClass('d-flex')){
        $('.mainBlock__top h2').css({'text-align':'inherit'});
    }

    if($('.mainBlock__center-bottom .row').hasClass('flex-row-reverse')){
        $('.dateCol').css({'justify-content':'flex-start'});
    }

    if($('.priceBlocker').css('text-align') == 'center'){
        $('.order-knop').css({'justify-content':'center'});
        $('.form_main_block').css({'justify-content':'center'});
    }
    if($('.top_read').css('display') == 'none'){
        $('.top_comm').show();
    }
    if($('.arch').css('display') == 'none'){
        $('.calend').show();
    }
    if($('.searchBox').css('display') == 'none'){
        $('.navbar').show();
    }
    if($('.pop_art').css('display') == 'none'){
        $('.latest_news').css({'display':'flex'});
        let navLink = $('.latest_news').text();
        $('.navTwoLink').text(navLink);
    }else if($('.pop_art').css('display') == 'flex'){
        let navLink = $('.pop_art').text();
        $('.navTwoLink').text(navLink);
    }

    if($('.topReaders_item img').css('display') == 'none'){
        $('.hideItem').show();
        $('.topReaders').css({'row-gap':'20px', 'text-align':'center'});
    }
    if($('.popularArticles__item img').css('display') == 'none'){
        $('.popularArticles__item p').addClass('list-style');
    }

    if($('.formComm').hasClass('d-flex')){
        $('.inputComm').attr("placeholder", " ");
        $('.textAreaComm').attr("placeholder", " ");

    }

    $('.commentBtn').click(function(){
        if($('.textAreaComm').val() != '' && $('.inputComm').val() != ''){
            $('.formAddComments').hide();
            $('.addcommReady').fadeIn(200);
        }
        if($('.textAreaComm').val() == ''){
            $('.massAlert').fadeIn(200);
        }
        if($('.inputComm').val() == ''){
            $('.nameAlert').fadeIn(200);
        }

    });

    if($('.commentsBlock_item img').css('display') == 'none'){
        $('.commentsBlock_item h4 i').show(0);
    }
    if($('.commentsBlock_item p').css('border-width') != '0px'){
        $('.commentsBlock_item p').css({'padding-left':'8px'});
    }

    if($('.commentsBlock_item').css('margin-top') == '0px'){
        $('.commentsBlock_item').css({'border-bottom':'1px solid'});
    }

    if($('.no_comments_box').css('display') == 'none'){
        $('.commentsBlockMain').show();
    }

    if($('.sidebar').hasClass('flex-column')){
        $('.sidebar').css({'justify-content':'flex-start'});
    }else if($('.sidebar').hasClass('flex-column-reverse')){
        $('.sidebar').css({'justify-content':'flex-end'});
    }



    let dayCount = $('#randomRating').attr('class');

    function clock() {
        var d = new Date();
        var day = d.getDate();
        var hrs = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();

        var mnt = new Array("01", "02", "03", "04", "05",
        "06", "07", "08", "09", "10", "11", "12");

        if (day <= 9) day="0" + day;
        if (hrs <= 9) hrs="0" + hrs;
        if (min <=9 ) min="0" + min;
        if (sec <= 9) sec="0" + sec;

        $(".dateOnly").html(day-dayCount + "-" + mnt[d.getMonth()] + "-" + d.getFullYear());

        $(".dateComm1").html(day-dayCount + "-" + mnt[d.getMonth()] + "-" + d.getFullYear());
        $(".dateComm2").html(day-1 + "-" + mnt[d.getMonth()] + "-" + d.getFullYear());
        }

        clock();


        function selectDate(date) {
            $('.calendar-wrapper').updateCalendarOptions({
              date: date
            });
          }

          var defaultConfig = {
            weekDayLength: 1,
            date: new Date(),
            onClickDate: selectDate,
            showYearDropdown: true,
            startOnMonday: true,
          };

          $('.calendar-wrapper').calendar(defaultConfig);

          if($('.topReaders_item').hasClass('flex-row-reverse')){
            $('.topReaders_item p').css({'text-align':'right'});
          }else if($('.topReaders_item').hasClass('flex-row')){
            $('.topReaders_item p').css({'text-align':'left'});
          }

});
