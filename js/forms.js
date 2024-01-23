$(document).ready(function(){
/* =========================================== Form Section ======================================= */
 /* Donate Form */

 $('.aPart_popup_btn').click(function() {

    var popupId = $(this).data('popup')
  $('#' + popupId).fadeIn();
  });
  $(document).mouseup(function(e) {
  var popup = $('.popupForm');
  if (!popup.is(e.target) && popup.has(e.target).length === 0) {
  $('.forms').fadeOut();
  }
  });
  $('.close_form').click(function() {
  $('.forms').fadeOut('slow');
  });
  
  /* ================================= Join Us Code Start =========================================== */
  const items = document.querySelectorAll('.accordion button');
  
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
  
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
  
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach((item) => item.addEventListener('click', toggleAccordion));
  /* ================================= Join Us Code End =========================================== */
  
  /* ================================= Career Form ============================================= */
  $('.accordion_btn').click(function(){
    $('#careerForm').show(200);
  });
  
  /* ================================== Upload Button =============================== */
  const realFileBtn = document.getElementById("real-file");
  const customBtn = document.getElementById("upload-button");
  const customTxt = document.getElementById("upload-text");
  
  customBtn.addEventListener("click", function() {
    realFileBtn.click();
  });
  
  realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
      customTxt.innerHTML = realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];
    } else {
      customTxt.innerHTML = "No file chosen, yet.";
    }
  });
  /* ================================== Upload Button End =============================== */



});