var items = 0;

$(document).ready(function(){
  $(".hidden").fadeIn('slow','swing').removeClass('hidden');
  itemsCount();

  $("#searchBtn").click(function(){
      $("#secondView,#firstView").toggle();
  });

  function itemsCount(){
    $("#itemsShow").html(items);
  }

});
