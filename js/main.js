$( window ).load(function() {
	var btn = $('button');
	var foodRow = $('table').find('tr').last();
	var modRow = $('table').find('tr').first();
	var currentStep = 0;

	var steps = [function() {
		modRow.hide();
		btn.html('<span class="hotkey">D</span>raw modifiers');
		foodRow.children().each(function(i,e){
			$(e).html(food[Math.floor(Math.random()*food.length)]);
		});
	},
	function() {
		modRow.show();
		btn.html('<span class="hotkey">R</span>edraw');
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
		if(e.which === 82 || e.which == 68) btn.click();
	});
});
