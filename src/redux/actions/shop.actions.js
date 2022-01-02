import * as actions from "./actions.types";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
	type: actions.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMaps) => ({
	type: actions.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMaps,
});

export const fetchCollectionsError = (errorMessge) => ({
	type: actions.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessge,
});

export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection("collections");
		dispatch(fetchCollectionsStart()); // sets isFetching = false

		collectionRef
			.get()
			.then((snapshot) => {
				const collectionsMaps = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMaps));
			})
			.catch((error) => dispatch(fetchCollectionsError(error.message)));
	};
};
