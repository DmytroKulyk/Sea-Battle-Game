$(document).ready(function(){



//when the page loads, it makes 100 divs on right side
 for(var j = 10; j < 20; j++){	 
     for(var i = 0; i < 10; i++){
	$("#Div").append('<div class="new ' + j + i + '"></div>' );
  }
  $("#Div").append('<br>');
}


//on click function addBackground colore red
// $('.new').click(function() {
//     $('div.backColorRed').removeClass('backColorRed');
// 	$(this).addClass('backColorRed');
   
// });


//when the page loads, it makes 100 divs on Left side
 for(var j = 10; j < 20; j++){	 
     for(var i = 0; i < 10; i++){
	$("#Div1").append('<div class="newOne ' + j + i + '"></div>' );
  }
  $("#Div1").append('<br>');
 }



//on click the function check the position of cell
//if its match with the number in the array ships
//it makes background colore blue
//if not red;
$('.newOne').click(function() {
    
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

//array that holds ships positions on the fild
var ships = [];

//count how many times it loops before faund the number that are not match
var counter = 0;
//choose rendomly positions for ships on the fild
var  shipsPosition = function(){

	
	//for 4decks ship, should be 1 of them
var x = Math.floor(Math.random()*60)+ 100;//randomly chosse position on a fild
for(var g = x; g < x+40; g+=10){          // and than add fore more cell s
	  ships.push(g);
 }

   //tree decks shipit should be 2 of them
  var y = Math.floor(Math.random()*70)+ 100;
 for(var i = y ; i < y + 30; i+=10){
	  ships.push(i);
 }
  var t = Math.floor(Math.random()*100)+100;
  for(var h = t; h < t + 3; h++){
	ships.push(h);
}  
      
 //two decks ship, it should be 3 of them
 for(var z = 0; z < 2; z++){
 var d = Math.floor(Math.random()*80)+ 100;
 for(var s = d ; s < d + 20; s+=10){
	  ships.push(s);
   }
 }
 var e = Math.floor(Math.random()*100)+ 100;
 for(var m = e ; m < e + 2; m++){
	  ships.push(m);
 }
 //one decks ship, it should be 4 of them
  for(var p = 0; p < 4; p++){
 var q = Math.floor(Math.random()*90)+ 100;
  for(var f = q ; f < q + 10; f+=10){
	  ships.push(f);
     }
   }
   checkMatch(ships);//its call function checkMatch after its finish pushin numbers to array
 };
 
 shipsPosition();
 
 //function checks if any numbers in the array ships match
 // it call function shipsPosition 
 function checkMatch(arr){
 	for(var i = 0; i <arr.length; i++){
 		for(var j = i+1; j<arr.length+1; j++){
 			
 			if(arr[i] !== arr[j]){
 			   counter++;
            }else{
 			   ships.length = 0;
 			   shipsPosition();
 			}
 		}
 	}
 }


console.log(counter, ships);

 
document.oncontextmenu = function() {return false;};//disable the browser context menu
///=========userSide(left side)===============

	$('.new').mousedown(function(event) {
       if(event.which == 3){
            $(this).removeClass('backgroundOrange');
        }  
});

var countClicks = 0

function addShipsUser(){

$('.new').click(function() {
	countClicks++;
 	$(this).addClass('backgroundOrange');
 	
     });
 }

$(".buttonStart button").on("click", addShipsUser); 
   	
$(".buttonDone button").click(function(){
	$('.new').off('click');
	$('.new').off('mousedown');
})














});
