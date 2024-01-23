$(document).ready(function(){
/////////////////////////// IN The News Page ///////////////////////////////////////////////////
var main = new Splide( '#sports_main_img', {
    fixedHeight : 500,
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );
  
  var thumbnails = new Splide( '#sports_thumbnail', {
    fixedWidth  : 260,
    fixedHeight : 250,
    gap         : 0,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } );
  
  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
  /* **************************22222222222222222222222******************************************* */
  var main = new Splide( '#arts_main_img', {
    fixedHeight : 500,
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );
  
  var thumbnails = new Splide( '#arts_thumbnail', {
    fixedWidth  : 260,
    fixedHeight : 250,
    gap         : 0,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } );
  
  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
  /* **********************3333333333333333333333333333*********************************************** */
  var main = new Splide( '#education_main_img', {
    fixedHeight : 500,
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );
  
  var thumbnails = new Splide( '#education_thumbnail', {
    fixedWidth  : 260,
    fixedHeight : 250,
    gap         : 0,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } );
  
  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
  /* *************************44444444444444444444444444******************************** */
  var main = new Splide( '#social_main_img', {
    fixedHeight : 500,
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );
  
  var thumbnails = new Splide( '#social_thumbnail', {
    fixedWidth  : 260,
    fixedHeight : 250,
    gap         : 0,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } );
  
  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
  /* ********************************************************************* */


  /////////////////////////// IN The News Page ///////////////////////////////////////////////////
});