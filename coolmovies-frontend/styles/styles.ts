import { css } from "@emotion/react";

const primary = "#5823F5";

export const styles = {
	root: css({
		height: "100%",
		width: "auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		position: "relative",
	}),
	navBar: css({
		background: "white",
		height: 72,
		alignSelf: "stretch",
		display: "flex",
		alignItems: "center",
		padding: 16,
		borderRadius: 0,
		width: "100%",
		justifyContent: "space-between",
		position: "sticky",
		button: {
			color: "black",
			marginRight: 16,
		},
		img: {
			marginLeft: "4vw",
			width: 213.32,
			height: 38.01,
		},
		"@media (max-width: 768px)": {
			height: "100%",
			width: "100%",
			padding: 8,
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			img: {
				margin: 0,
			},
		},
	}),
	headerButtons: css({
		marginRight: "3.8vw",
		"@media (max-width: 768px)": {
			display: "flex",
			width: "100%",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			margin: 0,
		},
		".buttons": {
			margin: 0,
		},
	}),

	signUpButton: css({
		width: 180,
		height: 40,
		padding: "10px 16px",
		borderRadius: 100,
		backgroundColor: "#5823F5",
		justifyContent: "center",
		alignItems: "center",

		":hover": {
			backgroundColor: "#5823F5",
		},
	}),
	body: css({
		alignSelf: "stretch",
		// padding: 32,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#F9F9F9",
	}),
	heading: css({
		marginTop: 72,
		fontSize: "2.75rem",
		textAlign: "left",
		fontWeight: 600,
		alignSelf: "self-start",
		marginLeft: "5vw",
	}),

	subtitle: css({
		fontWeight: 300,
		textAlign: "left",
		maxWidth: 600,
		marginTop: 8,
		color: "rgba(0, 0, 0, 0.6)",
		alignSelf: "self-start",
		marginLeft: "5vw",
		marginBottom: 16,
	}),

	submitButton: css({
		color: "#5823F5",
	}),

	textField: css({
		width: "100%",
		marginBottom: 16,
	}),

	textArea: css({
		width: "100%",
		marginBottom: 16,
	}),

	box: css({
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: 300,
		height: 400,
		borderRadius: 10,
		margin: "auto",
		background: "white",
		top: "20%",
		bottom: 0,
		left: 0,
		right: 0,
		padding: 16,
	}),
};

export default styles;
