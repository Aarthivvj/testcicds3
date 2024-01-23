$(document).ready(function(){
  /* paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function () {
    $('#preloader').addClass("isdone");
    $('.loading').addClass("isdone");
}); */

$(document).ready(function() {
  $('#loading').fadeIn('slow');
  setTimeout(function() {
    $('#loading').fadeOut('slow');
  }, 2000); // Set the duration in milliseconds
});

/* Header Section Start*/
  // show/hide the mobile menu based on class added to container
  $('.menu-icon').click(function() {
      $(this).parent().toggleClass('is-tapped');
      $('#hamburger').toggleClass('open');
  });

  // handle touch device events on drop down, first tap adds class, second navigates
  $('.touch .sitenavigation li.nav-dropdown > a').on('touchend',
      function(e) {
          if ($('.menu-icon').is(':hidden')) {
              var parent = $(this).parent();
              $(this).find('.clicked').removeClass('clicked');
              if (parent.hasClass('clicked')) {
                  window.location.href = $(this).attr('href');
              } else {
                  $(this).addClass('linkclicked');

                  // close other open menus at this level
                  $(this).parent().parent().find('.clicked').removeClass('clicked');

                  parent.addClass('clicked');
                  e.preventDefault();
              }
          }
      });

  // handle the expansion of mobile menu drop down nesting
  $('.sitenavigation li.nav-dropdown').click(
      function(event) {
          if (event.stopPropagation) {
              event.stopPropagation();
          } else {
              event.cancelBubble = true;
          }

          if ($('.menu-icon').is(':visible')) {
              $(this).find('> ul').toggle();
              $(this).toggleClass('expanded');
          }
      }
  );

  // prevent links for propagating click/tap events that may trigger hiding/unhiding
  $('.sitenavigation a.nav-dropdown, .sitenavigation li.nav-dropdown a').click(
      function(event) {
          if (event.stopPropagation) {
              event.stopPropagation();
          } else {
              event.cancelBubble = true;
          }
      }
  );

  // javascript fade in and out of dropdown menu
  $('.no-touch .sitenavigation li').hover(
      function() {
          if (!$('.menu-icon').is(':visible')) {
              $(this).find('> ul').fadeIn(100);
          }
      },
      function() {
          if (!$('.menu-icon').is(':visible')) {
              $(this).find('> ul').fadeOut(100);
          }
      }
  );

/* Header Section End */

/* ================================/////////////////////////======================= */
var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' ),
    
    opts = {
      
      len: 20,
      count: 50,
      baseTime: 10,
      addedTime: 10,
      dieChance: .05,
      spawnChance: 1,
      sparkChance: .1,
      sparkDist: 10,
      sparkSize: 2,
      
      color: 'hsl(hue,100%,light%)',
      baseLight: 50,
      addedLight: 10, // [50-10,50+10]
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: .01,
      addedLightInputMultiplier: .02,
      
      cx: w / 2,
      cy: h / 2,
      repaintAlpha: .04,
      hueChange: .1
    },
    
    tick = 0,
    lines = [],
    dieX = w / 2 / opts.len,
    dieY = h / 2 / opts.len,
    
    baseRad = Math.PI * 2 / 6;
    
ctx.fillStyle = 'black';
ctx.fillRect( 0, 0, w, h );

function loop() {
  
  window.requestAnimationFrame( loop );
  
  ++tick;
  
  ctx.globalCompositeOperation = 'source-over';
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', opts.repaintAlpha );
  ctx.fillRect( 0, 0, w, h );
  ctx.globalCompositeOperation = 'lighter';
  
  if( lines.length < opts.count && Math.random() < opts.spawnChance )
    lines.push( new Line );
  
  lines.map( function( line ){ line.step(); } );
}
function Line(){
  
  this.reset();
}
Line.prototype.reset = function(){
  
  this.x = 0;
  this.y = 0;
  this.addedX = 0;
  this.addedY = 0;
  
  this.rad = 0;
  
  this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
  
  this.color = opts.color.replace( 'hue', tick * opts.hueChange );
  this.cumulativeTime = 0;
  
  this.beginPhase();
}
Line.prototype.beginPhase = function(){
  
  this.x += this.addedX;
  this.y += this.addedY;
  
  this.time = 0;
  this.targetTime = ( opts.baseTime + opts.addedTime * Math.random() ) |0;
  
  this.rad += baseRad * ( Math.random() < .5 ? 1 : -1 );
  this.addedX = Math.cos( this.rad );
  this.addedY = Math.sin( this.rad );
  
  if( Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY )
    this.reset();
}
Line.prototype.step = function(){
  
  ++this.time;
  ++this.cumulativeTime;
  
  if( this.time >= this.targetTime )
    this.beginPhase();
  
  var prop = this.time / this.targetTime,
      wave = Math.sin( prop * Math.PI / 2  ),
      x = this.addedX * wave,
      y = this.addedY * wave;
  
  ctx.shadowBlur = prop * opts.shadowToTimePropMult;
  ctx.fillStyle = ctx.shadowColor = this.color.replace( 'light', opts.baseLight + opts.addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
  ctx.fillRect( opts.cx + ( this.x + x ) * opts.len, opts.cy + ( this.y + y ) * opts.len, 2, 2 );
  
  if( Math.random() < opts.sparkChance )
    ctx.fillRect( opts.cx + ( this.x + x ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.cy + ( this.y + y ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize )
}
loop();

window.addEventListener( 'resize', function(){
  
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  ctx.fillStyle = 'black';
  ctx.fillRect( 0, 0, w, h );
  
  opts.cx = w / 2;
  opts.cy = h / 2;
  
  dieX = w / 2 / opts.len;
  dieY = h / 2 / opts.len;
});


})