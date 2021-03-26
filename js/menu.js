$(".submenu").click(function(){
	$(this).children("ul").slideToggle("slow");
});
$("ul").click(function(p){
	p.stopPropagation();
});