$(document).ready(function(){
	// abstracts
	$('a.abstract-show').click(function(event){
		event.preventDefault();
		var p=$('p'+this.hash);
		$('p.abstract-block').not(p).slideUp('slow');
		p.slideDown('slow');
	});
	$('a.abstract-hide').click(function(event){
		event.preventDefault();
		$('p.abstract-block').slideUp('slow');
	});
	$('p.abstract-block').hide();
	// unhide et al link
	$('a.et-al').show();
	// hide authors over 8 for publications that have 12 or more authors
	$("span.author.hidden").hide();
	$('a.et-al').click(function(event){
		event.preventDefault();
		// show all authors
		$(this).siblings("span.author").show();
		// hide et al link
		$(this).hide();
	});
});