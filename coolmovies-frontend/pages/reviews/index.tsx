import { useMutation } from "@apollo/client";
import {
	Box,
	Button,
	Card,
	Fade,
	Modal,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { UPDATE_REVIEW } from "..";
import edit from "../../public/edit.svg";
import { exampleActions, useAppDispatch, useAppSelector } from "../../redux";
import { Movie } from "../../redux/slices/example/slice";
import { reviewStyles } from "../../styles/reviewStyles";
import { styles } from "../../styles/styles";
import CreateReviewModal from "../CreateReviewModal";
import logo from "../assets/logo.svg";
import star from "../assets/star.svg";

function Reviews() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(exampleActions.fetch());
	}, [dispatch]);
	const exampleState = useAppSelector((state) => state.example);
	const { allMovies } = exampleState.fetchData || {};
	const movies = allMovies?.nodes || [];

	const [updateReviewMutation] = useMutation(UPDATE_REVIEW);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// event.preventDefault();

		updateReviewMutation({
			variables: {
				input: {
					nodeId: exampleState.reviewNodeId,
					movieReviewPatch: {
						body: exampleState.body,
						rating: exampleState.rating,
						title: exampleState.title,
					},
				},
			},
		});
		exampleActions.handleClose();
	};

	const router = useRouter();
	function changePage() {
		router.push("/");
	}

	return (
		<div css={reviewStyles.root}>
			<Paper elevation={3} css={styles.navBar}>
				<Image
					onClick={changePage}
					src={logo}
					alt="Logo"
					css={reviewStyles.logo}
				/>
				<div css={styles.headerButtons}>
					<Button className="buttons">Watchlist</Button>
					<Button className="buttons">Login</Button>
					<Button
						className="buttons"
						css={styles.signUpButton}
						style={{ color: "white" }}
					>
						Sign up free
					</Button>
				</div>
			</Paper>

			<div css={reviewStyles.allCards}>
				{movies.map((movie: Movie) => (
					<Card key={movie.id} css={reviewStyles.cards} variant="outlined">
						<div css={reviewStyles.movieSection}>
							<div css={reviewStyles.movieTitleBox}>
								<Image
									src={movie.imgUrl}
									alt="Movie Poster"
									width={200}
									height={300}
									className="moviePoster"
								/>
								<div css={reviewStyles.infoBox}>
									<Typography css={reviewStyles.movieTitle} variant={"h6"}>
										{movie.title}
									</Typography>
									<div css={reviewStyles.ratingBox}>
										<Image src={star} alt="Star" className="star" />
										<Typography variant={"h5"} className="details">
											4.5 | 2016 | 2h 13m
										</Typography>
									</div>
									<div css={reviewStyles.tags}>
										<div className="infoTags">Adventure</div>
										<div className="infoTags">Sci-Fi</div>
										<div className="infoTags">Action</div>
									</div>
									<div css={reviewStyles.description}>
										<p className="titleDescription">Director</p>
										<p className="namesDescription">Gareth Edwards</p>
										<br />
										<p className="titleDescription">Writers</p>
										<p className="namesDescription">
											Chris Weitz, Tony Gilroy, John Knoll
										</p>
										<br />
										<p className="titleDescription">Stars</p>
										<p className="namesDescription">
											Felicity Jones, Diego Luna, Alan Tudyk
										</p>
									</div>
								</div>
							</div>
							<div css={reviewStyles.division}></div>
							<div css={reviewStyles.storyline}>
								<p css={reviewStyles.storylineTitle}>Storyline</p>
								<p css={reviewStyles.storylineDescription}>
									In a time of conflict, a group of unlikely heroes band
									together on a mission to steal the plans to the Death Star,
									the Empire&apos;s ultimate weapon of destruction. All looks
									lost for the Rebellion against the Empire as they learn of the
									existence of a new super weapon, the Death Star.{" "}
								</p>
							</div>
						</div>
						<div css={reviewStyles.reviewsBox}>
							<div css={reviewStyles.headerReviews}>
								<p>Reviews</p>
								<Button
									className="createReviewButton"
									onClick={() =>
										dispatch(exampleActions.openModalCreate(movie.id))
									}
								>
									+ Create Review
								</Button>
							</div>
							{movie.movieReviewsByMovieId.nodes.map((review) => (
								<div key={review.id} css={reviewStyles.reviews}>
									<div css={reviewStyles.reviewHeader}>
										<div css={reviewStyles.boxTitleAndRating}>
											<p css={reviewStyles.reviewTitle}>
												{review.title} • {review.userByUserReviewerId.name}
											</p>
											<p css={reviewStyles.reviewRating}>
												Rating: <b>{review.rating}</b>
											</p>
										</div>
										<Button
											onClick={() =>
												dispatch(exampleActions.setIsOpen(review.nodeId))
											}
											css={reviewStyles.editButton}
										>
											<Image src={edit} alt="Edit" className="imgButton" />
											<p>Edit review</p>
										</Button>
									</div>
									<Typography variant={"body2"} css={reviewStyles.reviewBody}>
										{review.body}
									</Typography>
								</div>
							))}
						</div>
					</Card>
				))}
			</div>

			<Modal
				open={exampleState.isOpen}
				onClose={() => dispatch(exampleActions.handleClose())}
				closeAfterTransition
			>
				<Fade in={exampleState.isOpen}>
					<Box css={styles.box}>
						<form onSubmit={handleSubmit}>
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
								onChange={(e) =>
									dispatch(exampleActions.setBody(e.target.value))
								}
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
									dispatch(
										exampleActions.setRating(parseInt(e.target.value, 10))
									)
								}
								required
								css={styles.textField}
								inputProps={{ min: 0, max: 5 }}
							/>
							<Button css={styles.submitButton} type="submit">
								Submit
							</Button>
						</form>
					</Box>
				</Fade>
			</Modal>

			<CreateReviewModal />
		</div>
	);
}

export default Reviews;
