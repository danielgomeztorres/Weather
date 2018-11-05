var app = new Vue({
	el: "#app",


	data: {
		
		city: 'roma',
		search: ''
	},
	methods: {
		getCity: function () {
			return "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&units=metric&APPID=07581da1e389d480d227750c8972b935"
		},

		fetchStart: function (url) {

			fetch(url)
				.then(function (data) {
					return data.json();
				}).then(function (myData) {
					console.log(myData);
					app.city = myData;


				})
		}

	},


	created: function () {
		this.fetchStart(this.getCity());
		console.log("created");
	},
	computed: {
		SearchCity: function () {
			var arrayFilter = this.city.filter(theWeather => {
				return theWeather.name.toLowerCase().includes(this.search.toLowerCase())
			});
			return arrayFilter
		}
	}
})
