var app = new Vue({
	el: "#app",


	data: {

		city: 'Paris',
		dataCity: null,
		icon: ''


	},
	methods: {
		getCity: function () {
			return "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&units=metric&APPID=07581da1e389d480d227750c8972b935"
		},
		getIcon: function () {
			return "http://openweathermap.org/img/w/" + this.icon + ".png"
		},


		fetchStart: function (url) {

			fetch(url)
				.then(function (data) {
					return data.json();
				}).then(function (myData) {
					console.log(myData);
					app.dataCity = myData;
					app.icon = myData.weather[0].icon;

				})
		},

	},

	created: function () {
		this.fetchStart(this.getCity());
		console.log("created");
	}

})
