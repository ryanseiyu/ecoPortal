import { gql, useMutation } from "@apollo/client";
import { Button, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { exampleActions, useAppDispatch, useAppSelector } from "../redux";
import { homeStyles } from "../styles/homeStyles";
import { styles } from "../styles/styles";
import imgCard from "./assets/imgCard.jpg";
import imgCard2 from "./assets/imgCard2.jpg";
import imgCard3 from "./assets/imgCard3.jpg";
import imgCard4 from "./assets/imgCard4.jpg";
import imgCard5 from "./assets/imgCard5.jpg";
import imgCard6 from "./assets/imgCard6.jpg";
import imgCard7 from "./assets/imgCard7.jpg";
import imgCard8 from "./assets/imgCard8.jpg";
import logo from "./assets/logo.svg";
import star from "./assets/star.svg";

export const UPDATE_REVIEW = gql`
	mutation UpdateReview($input: UpdateMovieReviewInput!) {
		updateMovieReview(input: $input) {
			movieReview {
				id
				title
				body
				rating
				nodeId
			}
		}
	}
`;

const Home: NextPage = () => {
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
		router.push("/reviews");
	}

	return (
		<div css={styles.root}>
			<Paper elevation={3} css={styles.navBar}>
				<Image src={logo} alt="Logo" />
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

			<div css={styles.body}>
				<div css={homeStyles.watchSection}>
					<Typography variant={"h1"} css={styles.heading}>
						{"What to watch"}
					</Typography>
					<Typography variant={"subtitle1"} css={styles.subtitle}>
						{`TV shows and movies selected this week`}
					</Typography>

					<div css={homeStyles.movieCardsDiv}>
						<div css={homeStyles.movieCards}>
							<Image
								css={homeStyles.imageCards}
								src={imgCard}
								alt=""
								width={292}
								height={433}
								onClick={changePage}
							/>
							<div>
								<p css={homeStyles.infoText}>Rogue one</p>
								<div css={homeStyles.infoBox}>
									<Image src={star} alt="" />
									<p>5</p>
								</div>
							</div>
						</div>
						<div css={homeStyles.movieCards}>
							<Image
								css={homeStyles.imageCards}
								src={imgCard2}
								alt=""
								width={292}
								height={433}
								onClick={changePage}
							/>
							<div>
								<p css={homeStyles.infoText}>Interstellar</p>
								<div css={homeStyles.infoBox}>
									<Image src={star} alt="" />
									<p>5</p>
								</div>
							</div>
						</div>
						<div css={homeStyles.movieCards}>
							<Image
								css={homeStyles.imageCards}
								src={imgCard3}
								alt=""
								width={292}
								height={433}
								onClick={changePage}
							/>
							<div>
								<p css={homeStyles.infoText}>Dune</p>
								<div css={homeStyles.infoBox}>
									<Image src={star} alt="" />
									<p>5</p>
								</div>
							</div>
						</div>
						<div css={homeStyles.movieCards}>
							<Image
								css={homeStyles.imageCards}
								src={imgCard4}
								alt=""
								width={292}
								height={433}
								onClick={changePage}
							/>
							<div>
								<p css={homeStyles.infoText}>Moonlight</p>
								<div css={homeStyles.infoBox}>
									<Image src={star} alt="" />
									<p>5</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div css={homeStyles.topBoxSection}>
					<Typography variant={"h1"} css={homeStyles.topBoxHeading}>
						{"Top box office"}
					</Typography>
					<Typography variant={"subtitle1"} css={homeStyles.topBoxSubtitle}>
						{`This week, August 25-27`}
					</Typography>

					<div css={homeStyles.topBoxDiv}>
						<div css={homeStyles.topBoxCards}>
							<Image
								css={homeStyles.topBoxImages}
								src={imgCard5}
								alt=""
								width={292}
								height={433}
								onClick={changePage}
							/>

							<div css={homeStyles.topBoxInfo}>
								<p css={homeStyles.topBoxTitle}>1. Oppenheimer</p>
								<p css={homeStyles.topBoxValues}>$47M</p>
							</div>
						</div>
						<div css={homeStyles.topBoxCards}>
							<Image
								css={homeStyles.topBoxImages}
								src={imgCard6}
								alt=""
								width={292}
								height={433}
								onClick={changePage}
							/>

							<div css={homeStyles.topBoxInfo}>
								<p css={homeStyles.topBoxTitle}>2. Barbie</p>
								<p css={homeStyles.topBoxValues}>$30M</p>
							</div>
						</div>
						<div css={homeStyles.topBoxCards}>
							<Image
								css={homeStyles.topBoxImages}
								src={imgCard7}
								alt=""
								width={292}
								height={433}
								onClick={changePage}
							/>

							<div css={homeStyles.topBoxInfo}>
								<p css={homeStyles.topBoxTitle}>3. Gran Turismo</p>
								<p css={homeStyles.topBoxValues}>$20M</p>
							</div>
						</div>
						<div css={homeStyles.topBoxCards}>
							<Image
								css={homeStyles.topBoxImages}
								src={imgCard8}
								alt=""
								width={292}
								height={433}
								onClick={changePage}
							/>

							<div css={homeStyles.topBoxInfo}>
								<p css={homeStyles.topBoxTitle}>4. Talk to me</p>
								<p css={homeStyles.topBoxValues}>$15M</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer css={homeStyles.footer}>
				<p>All Rights Reserved | Copyright © 2023</p>
				<p>Privacy policy | User Agreements</p>
			</footer>
		</div>
	);
};

export default Home;
