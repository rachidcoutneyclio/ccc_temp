$(function(){
	$('html').addClass('page-load-fade-in')
	//Don't float the last .speaker-box right if the number of .speaker-boxes is not a multiple of four.
  speaker_length = $('.speaker-box').length;
  if (speaker_length % 4 != 0) {
    $("#speakers").addClass('dont-float-last')
  }
	//Don't float the last .workshop right if the number of .workshops is not a multiple of four.
  workshop_length = $('.workshop').length;
  if (workshop_length % 4 != 0) {
    $("#workshops").addClass('dont-float-last');
  }
});