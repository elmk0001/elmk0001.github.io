// initialize variables used across the program
var srcVal;
var altVal;
var currentImage;
var currentSelection;
var totalImages = $('.wrapper img').length;

// show/hide prev/next buttons according
// to the currentImage number
function showHideBtns(){
  if(currentImage===0){
    $('.overlay .prev').hide();
  } else if(currentImage===totalImages-1){
    $('.overlay .next').hide();    
  } else {
    $('.overlay .prev, .overlay .next').show();    
  }
}

// display image and image caption
// based on the value passed
// to the function
function displayImage(t){
  // get and store the src value
  // of the selected image
  srcVal = t.attr('src');
  // get and store the alt value
  // of the selected image
  altVal = t.attr('alt');
  // update the img tag in the .overlay
  // with the variable values
  $('.overlay img').attr('src',srcVal);
  $('.overlay p').text(altVal);
  // display prev/next buttons based
  // on current image position
  showHideBtns();
}

// append an element to the page
// to serve as an overlay for displaying
// images (<img>) and captions (<p></p>)
// as well as prev/next buttons
// for navigating images
$('body').append('<div class="overlay"><img src="#" alt="" /><p></p><button class="prev">&#60;</button><button class="next">&#62;</button></div>');

// handle click on image to open overlay
$('img').click(function(){
  // get the position of the selected image
  // this number will be used for prev/next
  currentImage = $(this).parent().children().index($(this));
  // display image given the present selection
  currentSelection = $(this);
  displayImage(currentSelection);
  // show the overlay
  $('.overlay').fadeIn(400);
});

// handle click on prev
$('.prev').click(function(){
  // store the value of the current selection
  currentSelection = $('.wrapper img').eq(currentImage-1);
  // update the current position
  currentImage--;
  // display image given the present selection
  displayImage(currentSelection);
});

// handle click on next
$('.next').click(function(){
  // store the value of the current selection
  currentSelection = $('.wrapper img').eq(currentImage+1);
  // update the current position
  currentImage++;
  // display image given the present selection
  displayImage(currentSelection);
});

// handle click on img to close overlay
$('.overlay img').click(function(){
  // "close" .overlay by hiding it
  $('.overlay').hide();
  // reset prev/next button visibility
  $('.overlay .prev, .overlay .next').show();
});
