import React from "react";
import { StyleSheet } from "react-native";

const BikeCard = () => {
	return (
		<div style={styles.container}>
			<h2 style={styles.title}>Nukeproof Mega 290</h2>
			<div style={styles.status}>Chain has exceeded wear limit.</div>
			<div style={styles.added}>Added 260 days ago.</div>
			<div style={styles.distanceContainer}>
				<div style={styles.mileage}>2700 Miles</div>
				<div style={styles.hours}>10,000 Hours</div>
			</div>
		</div>
	);
};

export default BikeCard;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#EEF09C",
		padding: "1rem",
		width: "100%",
		maxWidth: "500px",
		boxSizing: "border-box",
		borderRadius: "4px",
		lineHeight: "1.8em",
	},
	title: {
		margin: 0,
		textDecorationLine: "underline",
	},
	status: {
		color: "#FF0000",
	},
	distanceContainer: {
		display: "flex",
		marginTop: "8px",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
