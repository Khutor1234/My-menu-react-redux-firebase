import { db } from "./firebase";

export default class MenuService {

	getLists() {
		return db.collection('recipes')
			.get()
			.then(snapshot => {
				const items = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}));
				
				return items;
			});        
	}
		
}