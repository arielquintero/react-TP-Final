import {
	collection,
	getFirestore,
	getDocs,
	query,
	where,
	getDoc,
	doc,
} from "firebase/firestore";

export const getCollectionFirestore = (id, setProducts, setIsLoading) => {
	const db = getFirestore();
	const queryCollection = collection(db, "productos");
	const queryFiltered = id
		? query(queryCollection, where("categoria", "==", id))
		: queryCollection;

	return getDocs(queryFiltered)
		.then((data) =>
			setProducts(
				data.docs.map((product) => ({
					id: product.id,
					...product.data(),
				})),
			),
		)
		.catch((err) => console.error(err))
		.finally(() => setIsLoading(false));
};

export const getDocFirestore = (productId, setProduct, setIsLoading) => {
	const db = getFirestore();
	const queryDoc = doc(db, "productos", productId);
	getDoc(queryDoc)
		.then((data) => setProduct({ id: data.id, ...data.data() }))
		.catch((err) => console.error(err))
		.finally(() => setIsLoading(false));
};
