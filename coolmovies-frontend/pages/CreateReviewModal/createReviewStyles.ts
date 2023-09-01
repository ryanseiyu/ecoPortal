import { css } from "@emotion/react";

const primary = "#5823F5";

export const createReviewStyles = {
	box: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
		max-width: 500px;
		padding: 20px;
		border: 1px solid ${primary};
		border-radius: 5px;
		background-color: #fff;
		position: relative;
		top: 25%;
	`,
	submitButton: css({
		color: "#5823f5",
	}),
};
