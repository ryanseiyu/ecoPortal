import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useMutation } from "@apollo/client";
import { UPDATE_REVIEW } from "../../../pages";
import { stat } from "fs";

export type Movie = {
	id: string;
	imgUrl: string;
	title: string;
	releaseDate: string;
	nodeId: string;
	movieReviewsByMovieId: {
		nodes: {
			body: string;
			id: string;
			movieId: string;
			rating: number;
			title: string;
			nodeId: string;
			userByUserReviewerId: {
				name: string;
				nodeId: string;
				id: string;
			};
		}[];
	};
	movieDirectorByMovieDirectorId: {
		name: string;
		nodeId: string;
		id: string;
	};
};

export interface FetchData {
	allMovies: {
		nodes: Movie[];
	};
}

interface ExampleState {
	value: number;
	sideEffectCount: number;
	fetchData?: FetchData | null;
	isOpen: boolean;
	reviewNodeId: string | null;
	title: string | null;
	body: string | null;
	rating: number | null;
	modalCreateOpen: boolean;
	name: string | null;
	movieId: string | null;
	userReviewerId: string;
}

const initialState: ExampleState = {
	value: 0,
	sideEffectCount: 0,
	fetchData: null,
	isOpen: false,
	reviewNodeId: "",
	title: "",
	body: "",
	rating: 0,
	modalCreateOpen: false,
	name: "",
	movieId: "",
	userReviewerId: "beb2473b-2c31-44a2-81e3-01efd5c7ac6e",
};

export const slice = createSlice({
	initialState,
	name: "example",
	reducers: {
		fetch: () => {},
		clearData: (state) => {
			state.fetchData = undefined;
		},
		loaded: (state, action: PayloadAction<{ data: FetchData }>) => {
			state.fetchData = action.payload.data;
		},
		loadError: (state) => {
			state.fetchData = {
				allMovies: {
					nodes: [],
				},
			};
		},
		increment: (state) => {
			state.value += 1;
		},
		epicSideEffect: (state) => {
			state.sideEffectCount += 1;
		},
		setIsOpen: (state, action: PayloadAction<string>) => {
			state.isOpen = true; // Set isOpen to true when handleOpen is called
			state.reviewNodeId = action.payload;
			console.log(state.reviewNodeId);
		},
		handleClose: (state) => {
			state.isOpen = false; // Set isOpen to false when handleClose is called
		},
		setTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
			console.log(state.title);
		},
		setBody: (state, action: PayloadAction<string>) => {
			state.body = action.payload;
			console.log(state.body);
		},
		setRating: (state, action: PayloadAction<number>) => {
			state.rating = action.payload;
			console.log(state.rating);
		},
		openModalCreate: (state, action: PayloadAction<string>) => {
			state.modalCreateOpen = true;
			state.movieId = action.payload;
			console.log(state.modalCreateOpen);
		},
		closeModalCreate: (state) => {
			state.modalCreateOpen = false;
		},
		setname: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
	},
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
