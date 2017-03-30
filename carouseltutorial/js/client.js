$(document).ready(function(){

  function nextLinkClicked(){
   var currentActiveImage = $(".image-shown");
//applying next function
   var nextActiveImage = currentActiveImage.next();
//when it reaches the end of the list, we want it to go to the first one
  if(nextActiveImage.length === 0 ){
    nextActiveImage = $(".carousel-inner img").first();
  }

//change it from shown to hidden and giving it a zindex of -10 will make it the last image in stack
  currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
  //giving the z-index of 20 so it's at the top of the stack
  nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index", 20);
  $(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

  }

  $(".next-link").on("click", function(e){
//on clicking next link

    nextLinkClicked();

    e.preventDefault();
  });
// same logic but backwards
  $(".previous-link").on("click", function(e) {

    var currentActiveImage = $(".image-shown");

    var nextActiveImage = currentActiveImage.prev();

    if(nextActiveImage.length == 0)
    {
      nextActiveImage = $(".carousel-inner img").last();
    }

    currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
    nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index", 20);
    $(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

    e.preventDefault();
  });

  setInterval(nextLinkClicked, 5000)

$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".hamburger").hide();
    $(".cross").show();
  });
});

$(".cross").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".cross").hide();
    $(".hamburger").show();
  });
});


/* hamburger */

