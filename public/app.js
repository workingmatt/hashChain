//app.js

var app = new Vue ({
	el: "#vueComponent",
	data: {
		message: "Message from Vue"
	},
	methods: {
		vueAppMethod: function(){
			console.log("vueAppMethod Called.");
			this.message = "vueAppMethod Called";
		}
	}

});