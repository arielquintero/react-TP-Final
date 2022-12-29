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

export const addCollectionFirestore = async (order, emptyCart) => {
	const db = getFirestore();
	const queryCollection = collection(db, "orders");
    console.log(order)
	return await addDoc(queryCollection, order)
		.then((res) => console.log(res))
		.catch((err) => console.error(err))
		.finally(() => emptyCart());
};

export const getCollectionFirestore = async (id, setProducts, setIsLoading) => {
	const db = getFirestore();
	const queryCollection = collection(db, "productos");
	const queryFiltered = id
		? query(queryCollection, where("categoria", "==", id))
		: queryCollection;

	try {
		try {
			const data = await getDocs(queryFiltered);
			return setProducts(
				data.docs.map((product) => ({
					id: product.id,
					...product.data(),
				})),
			);
		} catch (err) {
			return console.error(err);
		}
	} finally {
		return setIsLoading(false);
	}
};

export const getDocFirestore = async (productId, setProduct, setIsLoading) => {
	const db = getFirestore();
	const queryDoc = doc(db, "productos", productId);
	try {
		try {
			const data = await getDoc(queryDoc);
			return setProduct({ id: data.id, ...data.data() });
		} catch (err) {
			return console.error(err);
		}
	} finally {
		return setIsLoading(false);
	}
};
