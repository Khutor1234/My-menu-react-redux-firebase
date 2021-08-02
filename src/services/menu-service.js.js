import { db } from "./firebase";

export function getLists(){
    return db.collection("recipes")
		.get()
		.then((snapshot) => {
			snapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
			});
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});
}

export default class BookstoreService {

	getLists(){
		return db.collection("recipes")
			.get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, " => ", doc.data());
				});
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
	}
		
}