import { db } from "./firebase";

export default class MenuService {

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

	getListRecipes(category) {
		return db.collection('recipes')
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

	createMenu(data){
		return db.collection("menu")
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