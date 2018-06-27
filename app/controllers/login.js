import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
	key: 'value',
	key2: 'value2',
	session: service(),

	actions: {
		login(user, pass) {
			console.log(user)
			console.log(pass)
			if (user.search('@') == -1) {
				alert('No es un correo')
			}
			this.get('session').open('firebase', {
				provider: 'google',
				// email: user,
				// password: pass
			}).then(()=>{
				//si
				alert('si a huevo si')
			}).catch(()=>{
				//no
				alert('nel prro')
			})


		},
		logout(){
			this.get('session').close()
		}
	}




});
