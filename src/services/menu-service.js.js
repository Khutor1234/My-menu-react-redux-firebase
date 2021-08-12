import { db } from "./firebase";

export default class MenuService {

	getRecipes() {
		return db.collection('recipes')
			.get()
			.then(snapshot => {
				const items = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}))
			//.catch((error) => console.log("Error getting document:", error))
				
				return items;
			});        
	}

	getMenu(){
		return db.collection('menu')
			.get()
			.then(snapshot => {
				const items = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}))
			//.catch((error) => console.log("Error getting document:", error))
				
				return items;
			});
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
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
		
	}

	updateMenu(todoId, data) {
		return db.collection('todos').doc(todoId).update(data)
		.then(() => ({
			id: todoId,
			...data
		}));
	}

	deleteRecipe(recipeId) {
		return db.collection('menu').doc(recipeId).delete()
			.then(() => recipeId)
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	}
		
}