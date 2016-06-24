$(document).ready(function(){

 for(var j = 10; j < 20; j++){	 
     for(var i = 0; i < 10; i++){
	$("#Div").append('<div class="new name' + j + i + '"></div>' );
  }
  $("#Div").append('<br>');
}
$('.new').click(function() {
    $('div.backColorRed').removeClass('backColorRed');
	$(this).addClass('backColorRed');
   
});



 for(var j = 10; j < 20; j++){	 
     for(var i = 0; i < 10; i++){
	$("#Div1").append('<div class="newOne name' + j + i + '"></div>' );
  }
  $("#Div1").append('<br>');
 }



var checkArr = [121, 122, 123, 198, 176, 177, 178, 199, 100,101,102,103, 166, 156, 146];

$('.newOne').click(function() {

for(var g = 0; g < checkArr.length; g++){
	var number = checkArr[g];
		
	if($(this).hasClass('name' + number)){
		$(this).addClass('backColorBlue');
	}else{
		$(this).addClass('backColorRed');
	  }
	}
    // console.log(this);
});



// var arr = [];
//  for(var i = 100; i<200; i++){
//   arr.push(i);
//   }


 



});
