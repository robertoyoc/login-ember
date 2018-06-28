import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
	  logout(){
			this.get('session').close().then(()=>{
				this.transitionToRoute('login')
			})
		}
	}
});
