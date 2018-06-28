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
				provider: 'password',
				email: user,
				password: pass
			}).then(()=>{
				//si
				alert('si a huevo si')
				this.transitionToRoute('index')
			}).catch((e)=>{
				console.log(e)
				switch(e.code){
					case "auth/user-not-found":
					alert('usuario no encontrado')
					break;
					case "auth/wrong-password":
					alert('contraseña incorrecta')
				}
				//no
				alert('nel prro')
			})


		},
		logout(){
			this.get('session').close()
		}
	}




});
