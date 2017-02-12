
var items = 10;


$(document).ready(function(){
  fadeStuffs();
  itemsCount();

  /* Buttons for the shop progression
  */
  $("#searchBtn").click(function(){
      $("#secondView,#firstView").toggle();
  });

  $(".shop").click(function(){
    $("#secondView,#thirdView").toggle();
  });

  $("#onlyCart,#itemsShow").click(function(){
    if($('#thirdView').css('display') == 'block'){
    $('#forthView,#thirdView').toggle();
  }
  });

/* All the buttons for switching between admin
  sites.
*/

$("#loggaIn").click(function(){
  if($('#firstView').css('display') == 'block'){
  $("#adminLog,#firstView").toggle();
}
else if ($('#secondView').css('display') == 'block') {
  $('#adminLog,#secondView').toggle();
}
else if ($('#thirdView').css('display') == 'block') {
  $('#adminLog,#thirdView').toggle();
}
else if ($('#forthView').css('display') == 'block') {
  $('#adminLog,#forthView').toggle();
}
});

$("#confirmLogBtn").click(function(){
// kolla namn och lösen
  $("#adminLog,#adminMain").toggle();
  $("#loggaIn,#loggaUt").toggle();
});

// Checks wich "section" the user is currently in and changes it to the main page.
$("#loggaUt").click(function(){
  if($("#adminMain").css('display') == 'block'){
    $('#adminMain,#firstView').toggle();
  }
  else if($('#adminButik').css('display') == 'block'){
    $('#adminButik,#firstView').toggle();
  }
  else if ($('#adminSnacks').css('display') == 'block') {
    $('#adminSnacks,#firstView').toggle();
  }
  else if($('#shopRemoval').css('display') == 'block'){
    $('#shopRemoval,#firstView').toggle();
  }
  else if($('#snacksRemoval').css('display') == 'block'){
    $('#snacksRemoval,#firstView').toggle();
  }
  $('#loggaUt,#loggaIn').toggle();
});

$('#toShops').click(function(){
  $('#adminMain,#adminButik').toggle();
});

$('#toSnacks').click(function(){
  $('#adminMain,#adminSnacks').toggle();
});

$('#removeShop').click(function(){
  $('#adminMain,#shopRemoval').toggle();
});

$('#removeSnack').click(function(){
  $('#adminMain,#snacksRemoval').toggle();
});

$("#saveShop").click(function(){
  $("#adminButik,#adminMain").toggle();
});

$("#saveSnacks").click(function(){
  $("#adminSnacks,#adminMain").toggle();
});

$('#deleteSnack').click(function(){
  $('#adminMain,#snacksRemoval').toggle();
});

$('#deleteShop').click(function(){
  $('#adminMain,#shopRemoval').toggle();
});

  /* AJAX functions.
  */

  // Test AJAX funktion, används som mall
  $('#testbtn').click(function(){
    $.ajax({
    type: 'GET',
    url: 'http://date.jsontest.com',
      success: function(dbStuff){
  //    $.each(dbStuff, function(i, stuffStuff){   Använd denna sedan när du får array
        $("#theMall").append('<div class="theShop"><div class="shopItem"><p>' + dbStuff.time + '</p></div><div class="numbers"><p class="price">' + dbStuff.date + '</P><input class="quantity" type="number"><button class="add"><i class="fa fa-cart-plus" aria-hidden="true"></i></button></div></div>')
  //    });
      }
    });
  });




/* functions for footer info
*/



  $("#vanligaFragorBtn").click(function(e){
    e.preventDefault();
    $("#vanligaFragor").toggle();
  });

  $("#kontaktBtn").click(function(e){
    e.preventDefault();
    $("#kontakt").toggle();
  });

  $("#omOssBtn").click(function(e){
    e.preventDefault();
    $("#omOss").toggle();
  });

  $("#jobbBtn").click(function(e){
    e.preventDefault();
    $("#jobb").toggle();
  });

  $("#hjalpBtn").click(function(e){
    e.preventDefault();
    $("#hjalp").toggle();
  });

  /* Just a buch of "good to have" functions.
  */

  // Functin for showing how many items is in the cart.
    function itemsCount(){
      $("#itemsShow").html(items);
    }

  // Fade to stuffs, self explanatory
    function fadeStuffs(){
      $(".hidden").fadeIn('slow','swing').removeClass('hidden');
    }


});
