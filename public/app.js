//app.js

var app = new Vue ({
	el: "#vueComponent",
	data: {
		initialHash: "00000005",
		mattHash: "mattHash"
	},
	methods: {
		update: function(msg){
			console.log("app.js update method Called. "+msg);
			return;
		}
	}

});