$(document).ready(function(){

 for(var j = 10; j < 20; j++){	 
     for(var i = 0; i < 10; i++){
	$("#Div").append('<div class="new ' + j + i + '"></div>' );
  }
  $("#Div").append('<br>');
}
$('.new').click(function() {
    $('div.backColorRed').removeClass('backColorRed');
	$(this).addClass('backColorRed');
   
});



 for(var j = 10; j < 20; j++){	 
     for(var i = 0; i < 10; i++){
	$("#Div1").append('<div class="newOne ' + j + i + '"></div>' );
  }
  $("#Div1").append('<br>');
 }



$('.newOne').hover(function() {
    
for(var g = 0; g < ships.length; g++){
	
	var number = ships[g];
		
	if($(this).hasClass(number)){
		
		$(this).addClass('backColorBlue');

	}else{
		
		$(this).addClass('backColorRed');
	  }
	}
    
   console.log(this); 
    
});

var ships = [];
//choose rendomly positions for ships on the fild
var  shipsPosition = function(){
	//for 4decks ship, should be 1 of them
var x = Math.floor(Math.random()*60)+ 100;
for(var g = x; g < x+40; g+=10){
	  ships.push(g);
 }
   //tree decks shipit should be 2 of them
  for(var b = 0; b < 2; b++){
 var y = Math.floor(Math.random()*70)+ 100;
 for(var i = y ; i < y + 30; i+=10){
	  ships.push(i);
    }
 } 
 //two decks ship, it should be 3 of them
 for(var z = 0; z < 3; z++){
 var d = Math.floor(Math.random()*80)+ 100;
 for(var s = d ; s < d + 20; s+=10){
	  ships.push(s);
   }
 }
 //one decks ship, it should be 4 of them
  for(var p = 0; p < 4; p++){
 var q = Math.floor(Math.random()*90)+ 100;
  for(var f = q ; f < q + 10; f+=10){
	  ships.push(f);
     }
   }
 };
 
 shipsPosition();
 checkMatch(ships);
 //function checks if any numbers in the array ships match
 // it call function shipsPosition 
 function checkMatch(arr){
 	for(var i = 0; i <arr.length; i++){
 		for(var j = i+1; j<arr.length+1; j++){
 			while(arr[i] === arr[j]){
 				ships.length = 0;
 			   shipsPosition();
 			}
 		}
 	}
 }

 // checkMatch(ships);

console.log(ships);

 



});
