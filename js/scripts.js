$(document).ready(function () {
	$("#header-content-1").hover(function () {
		$("#header-content-1").toggleClass("animated bounceIn");
	})
	$("#header-content-2").hover(function () {
		$("#header-content-2").toggleClass("animated bounceIn");
	})
	$("#header-content-3").hover(function () {
		$("#header-content-3").toggleClass("animated bounceIn");
	})
	$("#img-section-1").hover(function () {
		$("#img-section-1").toggleClass("animated rotateIn");
		$("#section-content-1").fadeToggle(1900);
	})
	$("#img-section-2").hover(function () {
		$("#img-section-2").toggleClass("animated rotateIn");
		$("#section-content-2").fadeToggle(1900);
	})
	$("#img-section-3").hover(function () {
		$("#img-section-3").toggleClass("animated rotateIn");
		$("#section-content-3").fadeToggle(1900);
	})
});
