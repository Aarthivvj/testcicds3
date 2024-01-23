$(document).ready(function() {
  var video = $('#video-player')[0];

  $('#play-pause-button').on('click', function() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  });

  $(video).on('timeupdate', function() {
    var progress = (video.currentTime / video.duration) * 100;
    $('#progress').css('width', progress + '%');
  });
});
