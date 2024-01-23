
$(window).on('beforeunload', function() {
  $('#loading').fadeIn('slow');
});

$(document).ready(function(){
  

  $('#loading').fadeIn('slow');
  setTimeout(function() {
    $('#loading').fadeOut('slow');
  }, 4000);

///////////////////////////////////////// Menu DropDown Code Start /////////////////////////
$('.founder_list').click(function(){
$(".founder_sub_menus").toggle(200);
});


/* Commitment Code */
$(".commit_menu").click(function(){
  var targetMenu = $(this).data('list');
  console.log(targetMenu);
  $(".commit_sub_menus").hide();
  $(targetMenu).show();
});


$(".conertHall_nav_menu,.Sound_music_nav_menu").mouseenter(function() {
  $(".smvrh_nav_img").show(200);
});

$(".nav_menus_list").mouseleave(function() {
  $(".smvrh_nav_img").hide(200);
});
////////////////// Hover Code For Founders//////////////////
$('.sir_mutha_nav_menu').hover(function(){
  $(".sir_mutha_nav_img").show(200);
});
$('.andal_nav_menu').hover(function(){
  $(".sir_mutha_nav_img").hide(200);
  $(".andal_nav_img").toggle(200);
});
$('.mr_rao_nav_menu').hover(function(){
  $(".sir_mutha_nav_img").hide(200);
  $(".rao_nav_img").toggle(200);
});
$('.prema_nav_menu').hover(function(){
  $(".sir_mutha_nav_img").hide(200);
  $(".prema_nav_img").toggle(200);
});
///////////////////////////////////////// Menu DropDown Code End /////////////////////////
////////////////////////////////  Color Code ////////////////////////////////////////////////

$(".palette-container").click(function(){
  $(".plaette-colors").toggle();
});
document.documentElement.style.setProperty('--color',localStorage.getItem('pageColor'));

const colors= document.querySelectorAll('.colors');

colors.forEach(function(color) {
    color.addEventListener('click',function() {
        let hex = color.dataset.color;
        document.documentElement.style.setProperty('--color',hex);

        localStorage.setItem('pageColor',color.dataset.color);
        
    })
})
////////////////////////////////  Color Code End ////////////////////////////////////////////////
///////////////////////////////   Page ScrollBar/////////////////////////////////////////////////
function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};
///////////////////////////////   Page ScrollBar/////////////////////////////////////////////////

  /* Page Title Code Start */
  let docTitle = document.title;
  window.addEventListener('blur', ()=>{
    document.title = 'Come Back : (';
  });
  window.addEventListener("focus",()=> {
    document.title = docTitle;
  });
  /* Page Title Code End */
/* Home Menu */
$('.menu').click(function(){
  $('#sidebar').toggle('slow');
})
/*  */
/* Back To Priviouse Page */
$("#Back_button").click(function (){
  window.history.back();
});
/* Back To Priviouse Page */
/* Back To Top SEction Start */
var secBtn = $('#button_main_sec');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    secBtn.addClass('show');
  } else {
    secBtn.removeClass('show');
  }
});
secBtn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
/* Back To Top SEction End */


///////////////////////////////////Our People Popup Code Start/////////////////////////////////////
$('#boared_memb').click(function(){
  window.location.href = "our_people_detail.html";
});
$('#mgmt_team').click(function(){
  window.location.href = "our_people_detail.html";
});
/* ========================== */
$('.profile-card').click(function() {

  var popupId = $(this).data('popup')
$('#' + popupId).fadeIn();
});
$(document).mouseup(function(e) {
var popup = $('.popup-content');
if (!popup.is(e.target) && popup.has(e.target).length === 0) {
$('.profile_popup').fadeOut();
}
});
$('.close_btn').click(function() {
$('.profile_popup').fadeOut('slow');
});

/* Tab View Code  */
// Get all tab buttons and tab panels
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

// Add event listeners to tab buttons
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add 'active' class to clicked button and corresponding panel
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    const tabPanel = document.getElementById(tabId);
    tabPanel.classList.add('active');
  });
});



/* Tab View Code  End*/
///////////////////////////////////Our People Popup Code End/////////////////////////////////////

  
  /*  */
  /* ///////////////// Code For Google Translater  */

  /* ///////////////// Code For Google Translater  */ 
          //////////////////////////// Random Image Start  ///////////////////////////////////////
         /*  const imageArray = [
           "./img/home/Home-Founders-O&U-kritika.jpg",
           "./img/home/Home-Founders-O&U-premvihar.jpg",
           "./img/home/Home-Founders-O&U-Ngo.jpg",
           "./img/home/Home-Founders-premkumar.jpg",
           "./img/home/Home-Ladyandal.jpg",
           "./img/home/Home-O&U-C_stadium.jpg",
           "./img/home/Home--O&U-improving-chtpet.jpg",
           "./img/home/Home-O&U-improving-tbm.jpg",
           "./img/home/Home--O&U-LAIB.jpg",
           "./img/home/Home-sir_mutha-schl.jpg",
           "./img/home/Home-so1st-Gif.gif",
           "./img/home/Home-BF-MS.jpg",
           "./img/home/Home-BF-MSS-c.jpg",
           "./img/home/Home-BF-MS-tbm.jpg",
           "./img/home/Home-EBF-BF.jpg",
           "./img/home/Home-concert-hall.jpg",
           "./img/home/Home-Founders-4-gif.gif"
          ];
          
          const image = document.querySelector("img");
          const randomImg = document.querySelector("img");
          
          window.onload = () => generateRandomPicture(imageArray);
          
          randomImg.addEventListener("mousemove", () => generateRandomPicture(imageArray));
          
          function generateRandomPicture(array){
            let randomNum = Math.floor(Math.random() * array.length); 
            image.setAttribute("src", array[randomNum]);
          
            // Generate a random index within the range of the array length
          var randomIndex = Math.floor(Math.random() * imageArray.length);
          
          // Retrieve the value at the random index
          var randomValue = imageArray[randomIndex];
          
          // Print the random index and its corresponding value
          console.log("Random Index: " + randomIndex);
          console.log("Random Value: " + randomValue);
          
          if(randomIndex == 0 || randomIndex == 1 || randomIndex == 2 || randomIndex == 3 || randomIndex == 4 || randomIndex == 10 || randomIndex == 12){
          
              const something = document.getElementById('something');
          
              something.href = "/projects/mssWebsite/about.html";
          
          }if(randomIndex == 5 || randomIndex == 6 || randomIndex == 7 || randomIndex == 8 || randomIndex == 9 || randomIndex == 11 || randomIndex == 15){
          
          const something = document.getElementById('something');
          
          something.href = "/projects/mssWebsite/effect.html";
          } else{
            const something = document.getElementById('something');
          
          something.href = "/projects/mssWebsite/generative_art.html";
          }
        }  */
         //////////////////////////// Random Image End  /////////////////////////////////

         

///////////////////////////////  About Us Page Slides Start /////////////////////
/* document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel_1', {
perPage    : 3,
breakpoints: {
  640: {
    perPage: 2,
  },
},
} ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel_2', {
perPage    : 3,
breakpoints: {
  640: {
    perPage: 2,
  },
},
} ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel_3', {
perPage    : 3,
breakpoints: {
  640: {
    perPage: 2,
  },
},
} ).mount();
} ); */
///////////////////////////////  About Us Page Slides End /////////////////////

/////////////////////////////    Gallery Start     ///////////////////////////
[...document.querySelectorAll('.column')].map(column => {
	column.style.setProperty('--animation', 'slide');
	column.style.setProperty('height', '200%');
	column.innerHTML = column.innerHTML + column.innerHTML;
});
/////////////////////////////    Gallery End     ///////////////////////////

/////////////////////////////  Our Commitments Page     ////////////////////
$('#social_btn').click(function(){
  $('.social_popup').show();
  $(".img_heilight_card_popup").addClass('highlights_bg');
});
 // close modal on clicking close button
 $('.social_popup').find('.highlight_pop_close').on('click',function(){
  $(this).parents('.social_popup').hide();
 });
 // close modal on click outside at anywhere
 $(document).on('click',function(e){
   if(!(($(e.target).closest(".social_popup").length > 0 ) || ($(e.target).closest("#social_btn").length > 0))){
   $(".social_popup").hide();
  }
 });

 /* In Education */
 $('#edu_btn').click(function(){
  $('.edu_popup').show();
  $(".img_heilight_card_popup").addClass('highlights_bg');
});
 // close modal on clicking close button
 $('.edu_popup').find('.highlight_pop_close').on('click',function(){
  $(this).parents('.edu_popup').hide();
 });
 // close modal on click outside at anywhere
 $(document).on('click',function(e){
   if(!(($(e.target).closest(".edu_popup").length > 0 ) || ($(e.target).closest("#edu_btn").length > 0))){
   $(".edu_popup").hide();
  }
 });

/* In Art */
$('#art_btn').click(function(){
  $('.art_popup').show();
  $(".img_heilight_card_popup").addClass('highlights_bg');
});
 // close modal on clicking close button
 $('.art_popup').find('.highlight_pop_close').on('click',function(){
  $(this).parents('.art_popup').hide();
 });
 // close modal on click outside at anywhere
 $(document).on('click',function(e){
   if(!(($(e.target).closest(".art_popup").length > 0 ) || ($(e.target).closest("#art_btn").length > 0))){
   $(".art_popup").hide();
  }
 });

 /* In Sports */
$('#art_btn').click(function(){
  $('.art_popup').show();
  $(".img_heilight_card_popup").addClass('highlights_bg');
});
 // close modal on clicking close button
 $('.art_popup').find('.highlight_pop_close').on('click',function(){
  $(this).parents('.art_popup').hide();
 });
 // close modal on click outside at anywhere
 $(document).on('click',function(e){
   if(!(($(e.target).closest(".art_popup").length > 0 ) || ($(e.target).closest("#art_btn").length > 0))){
   $(".art_popup").hide();
  }
 });

 /* In Sports */
$('#sports_btn').click(function(){
  $('.sports_popup').show();
  $(".img_heilight_card_popup").addClass('highlights_bg');
});
 // close modal on clicking close button
 $('.sports_popup').find('.highlight_pop_close').on('click',function(){
  $(this).parents('.sports_popup').hide();
 });
 // close modal on click outside at anywhere
 $(document).on('click',function(e){
   if(!(($(e.target).closest(".sports_popup").length > 0 ) || ($(e.target).closest("#sports_btn").length > 0))){
   $(".sports_popup").hide();
  }
 });

 


});