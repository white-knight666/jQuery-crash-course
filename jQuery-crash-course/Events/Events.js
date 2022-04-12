//$('#btn1').click(function(){
  //  alert('Button clicked');
//});

//$('#btn1').click(function(){
//    $('.para1').hide();
//});
//
//$('#btn2').click(function(){
//    $('.para1').show();
//});


//$('#btn1').click(function(){
//    $('.para1').toggle();
//});


//$('#btn1').dblclick(function(){
//    $('.para1').toggle();
//})


//$('#btn1').hover(function(){
//    $('.para1').toggle();
//})


//$('#btn1').on('mouseenter', function(){
//    $('.para1').toggle();
//})
//
//
//$('#btn1').on('mouseleave', function(){
//    $('.para1').toggle();
//})


//$('#btn1').on('mousemove', function(){
//    $('.para1').toggle();
//})


//$('#btn1').on('mousedown', function(){
//    $('.para1').toggle();
//})
//
//$('#btn1').on('mouseup', function(){
//    $('.para1').toggle();
//})



//$('#btn1').click(function(e){
//    alert(e.currentTarget.id);
//    alert(e.currentTarget.innerHTML);
//    alert(e.currentTarget.outerHTML);
//    alert(e.currentTarget.className);
//});


//$('#btn1').on('mousemove', function(e){
//    console.log('Coords: Y: ' + e.clientY+"X:"+e.clientX);
//})

//$(document).on('mousemove', function(e){
//    console.log('Coords: Y: ' + e.clientY+"X:"+e.clientX);
//})


//$(document).on('mousemove', function(e){
//    $('#coords').html('Coords: Y: ' + e.clientY+"X:"+e.clientX);
//})



//$('input').focus(function(){
//  //  alert(focus);
//    $(this).css('background','pink');
//});
//
//
//$('input').blur(function(){
//    $(this).css('background','white');
//});


//$('input').keyup(function(e){
//    console.log(e.target.value);
//});

//$('select#gender').change(function(){
//    alert(e.target.value);
//})

$('#form').submit(function(e){
    e.preventDefault();
    var name = $('input#name').val();
    console.log(name);
})