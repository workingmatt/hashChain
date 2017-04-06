//components/1.js

Vue.component('component1', {
	props: ['initialHash'],
	data: function() {
		return {
			local_previousHash: this.initialHash,
			local_inputData: "anders",
			local_outputHash: "oData"
		}
	},
	methods: {
		calcHash: function(){
			console.log('Recalculating Hash');
			this.$http.post('/', {iData: this.local_inputData}).then(function(res){
				console.log('1.js posted: '+this.local_inputData);
				this.local_outputHash =  res.body;
				console.log(this.local_outputHash);
				this.$emit("event_hash_updated", this.local_outputHash);
			});
		}
	},
	template:`
		<div class="col-md-3">
			Previous Block Hash: <input class="form-control" v-model="this.local_previousHash">
			Input Data: <input class="form-control" v-model="this.local_inputData">
			Output: <input class="form-control" v-model="this.local_outputHash">
			<button class="btn btn-primary" v-on:click="calcHash()">Calc Hash</button>
		</div>
		`
})