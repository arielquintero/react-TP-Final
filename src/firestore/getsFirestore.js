import {
	collection,
	getFirestore,
	getDocs,
	query,
	where,
	getDoc,
	doc,
	addDoc,
} from "firebase/firestore";

export const addCollectionFirestore = async (order) => {
	const db = getFirestore();
	const queryCollection = collection(db, "orders");
	console.log(order);
	const res = await addDoc(queryCollection, order);
	return res;
};

export const getCollectionFirestore = async (choice) => {
	const { choiceId, choiceCollections } = choice;
	const db = getFirestore();
	const queryCollection = collection(db, choiceCollections);
	const queryFiltered = choiceId
		? query(queryCollection, where("categoria", "==", choiceId))
		: queryCollection;
	const data = await getDocs(queryFiltered);
	return data;
};

export const getDocFirestore = async (choice) => {
	const { choiceId, choiceCollection } = choice;
	const db = getFirestore();
	const queryDoc = doc(db, choiceCollection, choiceId);
	const data = await getDoc(queryDoc);
	return data;
};

export const getAllTheCollection = async (choice) => {
    const db = getFirestore();
	const queryCollection = collection(db, choice);
    const data = await getDocs(queryCollection);
	return data;
}
