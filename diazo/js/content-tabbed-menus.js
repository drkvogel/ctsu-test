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
	// PI pages & project pages
	$('ul.content-menu a').click(function(event){
		event.preventDefault();
		var t=$('li#content-menu-'+this.hash.substr(9));
		$('ul.content-menu li').not(t).removeClass('current');
		t.addClass('current');
		var p=$('div'+this.hash);
		$('div.content-panel').not(p).slideUp('slow');
		p.slideDown('slow');
	});
	$('ul.content-menu li:eq(0)').addClass('current');
	$('div.content-panel:gt(0)').hide();
});