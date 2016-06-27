$(document).ready(function(){

var arrayCellNumbers = [];
var splicedNumber = [0]; 

for(var d = 100; d <200; d++){
	arrayCellNumbers.push(d);
}

//when the page loads, it makes 100 cells (divs) on right side
 for(var j = 10; j < 20; j++){	 
     for(var i = 0; i < 10; i++){
	$("#Div").append('<div class="new ' + j + i + '"></div>' );
  }
  $("#Div").append('<br>');
}



//when the page loads, it makes 100 divs on Left side
 for(var j = 10; j < 20; j++){	 
     for(var i = 0; i < 10; i++){
	$("#Div1").append('<div class="newOne ' + j + i + '"></div>' );
  }
  $("#Div1").append('<br>');
 }




//==========computerside(right)===============
//on click the function check the position of cell
//if its match with the number in the array ships
//it makes background colore blue
//if not red;
$('.newOne').click(function() {
var randomNumber;
var con = 0;

var randFunc = (function(){
  randomNumber = Math.floor(Math.random()*arrayCellNumbers.length)+100;
   console.log(randomNumber); 
 })();

function not(dat, arr) { //"not" function
for(var i=0;i<arr.length;i++) {
  if(arr[i] == dat){return false;}
}
return true;
}
  
if(not(randomNumber, splicedNumber)){
$("#Div ."+randomNumber).addClass('backColorRed');
      	var x = randomNumber-100;
	   	var y = arrayCellNumbers.splice(x, 1);
	         splicedNumber.push(y[0]);
	         console.log(2);
	         con--;

}else{
	 con++
          randFunc;
            console.log(1);
}





console.log(arrayCellNumbers.length, splicedNumber, arrayCellNumbers, con);


//===================================================

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

 
//document.oncontextmenu = function() {return false;};//disable the browser context menu

///=========userSide(left side)===============

//on click buttonStart you can start adding ships(backgroundGreen)
$(".buttonStart button").on("click", addShipsUser); 

function addShipsUser(){
$('.new').click(function() {
 	$(this).addClass('backgroundGreen');
 	
     });
 }
 //when you press on right side of mouse you can removeclass(backgroundGreen)
 //so you can change the place of the ship on the fild
$('.new').mousedown(function(event) {
    if(event.which == 3){
         $(this).removeClass('backgroundGreen');
       }  
});


//when you add ships(backgroundGreen) you press buttonDone that torn off click event   	
$(".buttonDone button").click(function(){
	$('.new').off('click');
	$('.new').off('mousedown');
	$(".buttonStart").remove();
})

//================computer gess=============

//evry time when user press on the cell on right side and miss
// computer randomly chosse the cell on the left side












});
