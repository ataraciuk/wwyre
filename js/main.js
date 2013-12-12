$( window ).load(function() {
	var btn = $('button');
	var foodRow = $('table').find('tr').last();
	var modRow = $('table').find('tr').first();
	var currentStep = 0;
	var items = $('td');

	var steps = [function() {
		modRow.hide();
		btn.html('Draw modifiers');
		foodRow.children().each(function(i,e){
			$(e).html(food[Math.floor(Math.random()*food.length)]);
		});
	},
	function() {
		modRow.show();
		btn.html('Redraw');
		modRow.children().each(function(i,e){
			$(e).html(modifiers[Math.floor(Math.random()*modifiers.length)]);
		});
	}];
	btn.click(function(e){
		e.preventDefault();
		currentStep = (currentStep + 1) % steps.length;
		steps[currentStep]();
	});
	steps[0]();

	$(document).keyup(function(e){
		if(e.which === 82) btn.click();
	});

	items.click(function(){
		items.removeClass('chosen');
		var index = $(this).index();
		$(foodRow.children().get(index)).addClass('chosen');
		$(modRow.children().get(index)).addClass('chosen');
	});
});
