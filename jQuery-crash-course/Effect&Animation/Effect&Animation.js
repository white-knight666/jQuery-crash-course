//fade

//$('#btnFadeOut').click(function(){
//    $('#box').fadeOut(3000, function(){// we can use fast or slow or msecond
//        $('#btnFadeOut').text('Its gone');
//    }); 
//});
//$('#btnFadeIn').click(function(){
//    $('#box').fadeIn(3000);
//});
//
//$('#btnFadeTog').click(function(){
//    $('#box').fadeToggle(1000);
//});


//slide
//$('#btnSlideDown').click(function(){
//    $('#box').slideDown();
//});
//
//$('#btnSlideUp').click(function(){
//    $('#box').slideUp();
//});

//$('#btnSlideTog').click(function(){
//    $('#box').slideToggle(3000);
//});
//
//$('#btnStop').click(function(){
//    $('#box').stop();
//});





//Animation 

$('#moveRight').click(function(){
    $('#box2').animate({
        left:500, 
        height:'300px',
        width:'300px',
        opacity: '0.5'
    });
});

$('#moveLeft').click(function(){
    $('#box2').animate({
        left:0,
    height:'100px',
    width:'100px',
    opacity: '1'
    });
});


//mulitple animation 
$('#moveAround').click(function(){
    var box = $('#box2')
    box.animate({
        left: 300
    });
    box.animate({
        top: 300
    });
    box.animate({
        top: 300,
        left:0
    });
    box.animate({
        left: 0,
        top:0
    });
});