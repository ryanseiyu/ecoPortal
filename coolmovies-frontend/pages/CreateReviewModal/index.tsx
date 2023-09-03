import { Button, Fade, Modal, TextField } from "@mui/material";
import type { NextPage } from "next";
import { exampleActions, useAppDispatch, useAppSelector } from "../../redux";
import { createReviewStyles } from "../../styles/createReviewStyles";
import { styles } from "../../styles/styles";

import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import { useEffect } from "react";

const CREATE_REVIEW = gql`
	mutation CreateMovieReview($input: CreateMovieReviewInput!) {
		createMovieReview(input: $input) {
			movieReview {
				id
				title
				body
				rating
			}
		}
	}
`;
const CreateReviewModal: NextPage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(exampleActions.fetch());
	}, [dispatch]);
	const exampleState = useAppSelector((state) => state.example);
	const { allMovies } = exampleState.fetchData || {};
	const movies = allMovies?.nodes || [];

	const [createMovieReviewMutation] = useMutation(CREATE_REVIEW);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		// event.preventDefault();
		try {
			await createMovieReviewMutation({
				variables: {
					input: {
						movieReview: {
							movieId: exampleState.movieId,
							userReviewerId: exampleState.userReviewerId,
							title: exampleState.title,
							body: exampleState.body,
							rating: exampleState.rating,
						},
					},
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal
			open={exampleState.modalCreateOpen}
			onClose={() => dispatch(exampleActions.closeModalCreate())}
			closeAfterTransition
		>
			<Fade in={exampleState.modalCreateOpen}>
				<Box css={createReviewStyles.box}>
					<form onSubmit={handleSubmit}>
						{/* <Typography variant="h4">{exampleState.movieId}</Typography> */}
						<TextField
							label="Title"
							value={exampleState.title}
							onChange={(e) =>
								dispatch(exampleActions.setTitle(e.target.value))
							}
							required
							css={styles.textField}
						/>
						<TextField
							label="Body"
							value={exampleState.body}
							onChange={(e) => dispatch(exampleActions.setBody(e.target.value))}
							required
							multiline
							rows={5}
							css={styles.textArea}
						/>
						<TextField
							label="Rating"
							type="number"
							value={exampleState.rating}
							onChange={(e) =>
								dispatch(exampleActions.setRating(parseInt(e.target.value, 10)))
							}
							required
							css={styles.textField}
							inputProps={{ min: 0, max: 5 }}
						/>
						<Button css={createReviewStyles.submitButton} type="submit">
							Submit
						</Button>
					</form>
				</Box>
			</Fade>
		</Modal>
	);
};

export default CreateReviewModal;
