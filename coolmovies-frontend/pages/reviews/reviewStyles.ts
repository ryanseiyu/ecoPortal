import { css } from "@emotion/react";

const primary = "#5823F5";

export const reviewStyles = {
	root: css({
		height: "100%",
		width: "auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		position: "relative",
	}),
	logo: css({
		width: 213.32,
		height: 38.01,
		marginLeft: "4vw",
		"&:hover": {
			cursor: "pointer",
		},
	}),
	editButton: css`
		width: auto;
		height: 100%;
		/* margin-top: 16px; */
		.imgButton {
			width: 24px;
			height: 24px;
		}
		p {
			color: #5823f5;
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Roboto;
			font-size: 14px;
			font-style: normal;
			font-weight: 600;
			line-height: 16px; /* 114.286% */
			width: 100%;
			margin-left: 8px;
			margin-right: 8px;
		}
	`,
	allCards: css({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
	}),
	cards: css({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "100%",
		height: "100%",
		flexWrap: "wrap",
		justifyContent: "space-between",
		"@media (max-width: 768px)": {
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
	}),
	movieSection: css({
		paddingBottom: 72,
		paddingTop: 72,
		backgroundColor: "#F9F9F9",
		width: "100%",
		height: "100%",
	}),
	movieTitleBox: css({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		position: "relative",
		width: "100%",
		button: {
			position: "absolute",
			bottom: -40,
			width: "100%",
			marginBottom: 16,
		},
		".moviePoster": {
			borderRadius: 10,
			marginLeft: "4vw",
			width: 324.671,
			height: 481.448,
			"@media (max-width: 768px)": {
				marginBottom: 48,
			},
		},
		"@media (max-width: 768px)": {
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
	}),
	movieTitle: css({
		display: "flex",
		flexDirection: "column",

		justifyContent: "space-evenly",
		position: "relative",
		marginLeft: "4vw",
		width: 380,
		fontSize: 46,
		fontWeight: 600,
		lineHeight: 1.2,
		button: {
			position: "absolute",
			bottom: -40,
			width: "100%",
			marginBottom: 16,
		},
	}),
	infoBox: css({
		alignSelf: "flex-start",
		".star": {
			marginLeft: "4vw",
			marginTop: 16,
			alignSelf: "center",
		},
		".details": {
			marginLeft: "1vw",
			marginTop: 16,
			alignSelf: "center",
		},
	}),
	ratingBox: css({
		display: "flex",
		flexDirection: "row",
	}),
	tags: css({
		display: "flex",
		flexDirection: "row",
		marginLeft: "4vw",
		marginTop: 16,
		".infoTags": {
			display: "flex",
			padding: "10px 16px",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 100,
			background: "#F0EBF9",
			marginRight: 16,
			color: "#3A2170",
		},
	}),
	description: css({
		display: "flex",
		flexDirection: "column",
		marginLeft: "4vw",
		marginTop: 16,
		".titleDescription": {
			fontSize: 24,
			fontWeight: 600,
			lineHeight: 0,
			marginBottom: 0,
		},
		".namesDescription": {
			fontSize: 16,
			color: "#545454",
			fontWeight: 400,
		},
	}),
	reviewsBox: css({
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",

		// backgroundColor: "red",
	}),
	division: css({
		width: "60%",
		display: "flex",
		alignSelf: "flex-start",
		height: 1,
		backgroundColor: "#E5E5E5",
		marginTop: 32,
		marginBottom: 32,
		marginLeft: "1vw",
	}),
	storyline: css({
		display: "flex",
		flexDirection: "column",
		marginTop: 16,
		width: "100%",
	}),
	storylineTitle: css({
		fontSize: 24,
		marginLeft: "4vw",

		fontWeight: 600,
		lineHeight: 0,
		marginBottom: 0,
	}),
	storylineDescription: css({
		fontSize: 16,
		marginTop: 32,
		marginLeft: "4vw",
		color: "#545454",
		fontWeight: 400,
		width: 742,
		lineHeight: 1.5,
		"@media (max-width: 768px)": {
			width: "auto",
		},
	}),
	headerReviews: css({
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: 742,
		marginLeft: "4vw",
		"& p:first-child": {
			fontSize: 32,
			fontWeight: 700,
			display: "flex",
			alignSelf: "flex-start",
		},
		".createReviewButton": {
			marginTop: 32,
			display: "flex",
			padding: "8px 16px",
			height: 40,
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 100,
			backgroundColor: "#5823F5",
			color: "white",
		},
		"@media (max-width: 768px)": {
			width: "auto",
		},
	}),
	reviews: css({
		display: "flex",
		flexDirection: "column",
		width: 742,
		marginLeft: "4vw",
		marginBottom: 32,
		height: "100%",
		// backgroundColor: "red",
		"@media (max-width: 768px)": {
			width: "auto",
		},
	}),
	reviewTitle: css({
		marginTop: 24,
		fontSize: 24,
		fontWeight: 600,
		lineHeight: 0,
		marginRight: 16,
		// marginBottom: 16,
	}),
	reviewBody: css({
		fontSize: 16,
		color: "#545454",
		fontWeight: 400,
		width: 742,
		lineHeight: 1.5,
		marginTop: 16,
		"@media (max-width: 768px)": {
			width: "auto",
		},
	}),
	reviewRating: css({
		display: "flex",
		flexDirection: "row",
		// alignItems: "center",
		marginTop: 16,
		fontSize: 16,
		fontWeight: 400,
		fontStyle: "bold",
		width: 65,
		justifyContent: "space-between",
	}),
	reviewHeader: css({
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "auto",
		"@media (max-width: 768px)": {
			width: "fit-content",
			flexDirection: "column",
			alignItems: "flex-start",
		},
	}),
	boxTitleAndRating: css({
		display: "flex",
		flexDirection: "row",
		height: "auto",
	}),
};
