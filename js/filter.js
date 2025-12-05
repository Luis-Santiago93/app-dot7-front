$(document).ready(function(){
  $("#myInput").on("keyup", function() {
		$('.card').removeClass('d-none');
		var filter = $(this).val(); // get the value of the input, which we filter on
		$("#myDIV *").find('.card .card-body h4:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
    // var value = $(this).val().toLowerCase();
    // $("#myDIV *").filter(function() {
      // $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    // });
  });
});