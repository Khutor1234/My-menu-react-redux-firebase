import { db, auth } from "./firebase";

export default class MenuService {

	logIn(provider){
		return auth.signInWithPopup(provider)
			.then((res) => {
				return res.user
			})
			.catch((err) => console.log(err))
	}

	logOut(){
		return auth.signOut()
	}

	getUser(onAuth){
		return auth.onAuthStateChanged(onAuth)
	}

	getLists(list) {
		return db.collection(list)
			.get()
			.then(snapshot => {
				const items = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}))	
				return items;
			})
			.catch((error) => console.log("Error getting document:", error))
	}

	getListByCategory(collection, category) {
		return db.collection(collection)
			.where('category', '==', category)
			.get()
			.then(snapshot => {
				const items = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}));
				return items;
			})
			.catch((error) => console.log("Error getting document:", error))       
	}

	createItem(collection, data){
		return db.collection(collection)
			.add({
				...data,
			})
			.then(docRef => docRef.get())
			.then(doc => ({
				id: doc.id,
				...doc.data()
			}))
			.catch((error) => {console.error("Error adding document: ", error)
	});
	}

	deleteRecipe(recipeId) {
		return db.collection('menu').doc(recipeId).delete()
			.then(() => recipeId)
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	}
}