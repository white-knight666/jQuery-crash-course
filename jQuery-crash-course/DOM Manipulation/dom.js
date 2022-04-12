//$('p.para1').css('color','red');

//$('p.para1').css({color:'red',background:'#ccc'});
//
//$('p.para2').addclass('myClass');
//$('p.para2').removeclass('myClass');
//
//
//$('#btn1').click(function(){
//    $('p.para2').toggleclass('myClass');
//});


//$('#myDiv').text('Hello World');
//$('#myDiv').html('<h3>Hello World2</h3>');
//alert($('#myDiv').text());

//$('ul').append('<li>Append List Items</li>');
//$('ul').prepend('<li>Prepend List Items</li>');
//
//$('.para1').appendTo('para2');
//$('.para1').prependTo('para2');
//
//$('ul').before('<h4>Hello</h4>');
//$('ul').after('<h4>World</h4>');
//$('ul').empty();
//$('ul').detach();
//$('a').attr('target', '-blank');
//alert($('a').attr('href'));
//$('a').removeAttr('target');


//$('p').wrap('<h1>');
//$('p').wrapAll('<h1>');




//add item to list 
//$('#newItem').keyup(function(e){
//    var code = e.which;
//    if(code == 13){
//        e.preventDefault();
//        $('ul').append('<li>' +e.target.value + '</li>');
//    }
//})



//array methods 


//var myArr = ['Brad','Kelley', 'Nate', 'Jose'];

// if you wanna loop throw an array you have to use for each

//$.each(myArr, function(i, val){
//    $('#users').append('<li>'+val+'</li>');
//});

//take list items and put itinto array.

var newArr = $('ul#list li').toArray();
$.each(newArr, function(i, val){
    console.log(val.innerHTML);
});

