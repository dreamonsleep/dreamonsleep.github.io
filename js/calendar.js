// still need to add AFTER stage for dot notification

//creating dates
// var i;
// for (i=0; i < 32; i++) {
// 	dateday = i;
// 	dates[i] = "
// }

var app = {
	settings: {
		container: $('.calendar'),
		calendar: $('.front'),
		days: $('.weeks span'),
		form: $('.back'),
		input: $('.back input'),
		buttons: $('.back button')
	},

	init: function() {
		instance = this;
		settings = this.settings;
		this.bindUIActions();
	},

	swap: function(currentSide, desiredSide) {
		settings.container.toggleClass('flip');

		currentSide.fadeOut(900);
		currentSide.hide();

		desiredSide.show();
	},

	bindUIActions: function() {
		settings.days.on('click', function(){
			instance.swap(settings.calendar, settings.form);
			settings.input.focus();
		});

		settings.buttons.on('click', function(){
			instance.swap(settings.form, settings.calendar);
		});
	}
}

function saveInfo(){
	let academicNotes = document.getElementById('academic_header').value;
	infoDict[selectedDay] = [academicNotes, physicalNotes, sleepNotes]


}

app.init();

let infoDict = {};
infoDict['May012021'] = ["hey"]
console.log(infoDict.May012021)