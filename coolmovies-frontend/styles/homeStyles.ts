import { css } from "@emotion/react";

const primary = "#5823F5";

export const homeStyles = {
	movieCards: css`
		display: flex;
		flex-direction: column;
		width: 292px;
		height: 433px;
		flex-shrink: 0;
		border-radius: 20px;
		margin: 16px;
		margin-bottom: 72px;
	`,
	movieCardsDiv: css`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	`,
	imageCards: css`
		width: 292px;
		height: 433px;
		border-radius: 10px;
		&:hover {
			cursor: pointer;
		}
	`,
	infoText: css`
		color: #333;
		font-family: Roboto;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin: 8px 0;
	`,
	infoBox: css({
		display: "flex",
		flexDirection: "row",
		alignSelf: "self-start",
		height: 25,
		"& p": {
			margin: 0,
			marginLeft: 8,
			fontSize: 24,
		},
	}),
	watchSection: css({
		marginBottom: 72,
		width: "100%",
	}),

	topBoxSection: css({
		paddingTop: 32,
		paddingBottom: 72,
		backgroundColor: "white",
		width: "100%",
		marginBottom: 0,
		height: "100%",
	}),
	topBoxHeading: css({
		marginTop: 16,
		fontSize: "2.75rem",
		textAlign: "left",
		fontWeight: 600,
		alignSelf: "self-start",
		marginLeft: "5vw",
	}),
	topBoxSubtitle: css({
		fontWeight: 300,
		textAlign: "left",
		maxWidth: 600,
		marginTop: 8,
		color: "rgba(0, 0, 0, 0.6)",
		alignSelf: "self-start",
		marginLeft: "5vw",
		marginBottom: 16,
	}),
	topBoxDiv: css({
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
	}),
	topBoxCards: css({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: 292,
		height: 433,
		borderRadius: 20,
		margin: 16,
		marginBottom: 72,
	}),
	topBoxImages: css({
		width: 292,
		height: 433,
		borderRadius: 10,
		marginBottom: 16,
		"&:hover": {
			cursor: "pointer",
		},
	}),
	topBoxInfo: css({
		display: "flex",
		flexDirection: "column",
		alignSelf: "self-start",
		height: 25,
	}),
	topBoxTitle: css`
		color: #333;
		font-family: Roboto;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin: 0;
	`,
	topBoxValues: css`
		color: #333;
		font-family: Roboto;
		font-size: 24px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
		margin-top: 16px;
		margin-bottom: 16px;
	`,
	footer: css({
		backgroundColor: "#5823F5",
		height: 72,
		alignSelf: "stretch",
		display: "flex",

		padding: 16,
		width: "100%",
		justifyContent: "space-between",
		// position: "relative",
		// bottom: 0,

		"& p": {
			color: "white",
		},
	}),
};

export default homeStyles;
