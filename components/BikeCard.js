import React from "react";
import { StyleSheet } from "react-native";

const BikeCard = () => {
	return (
		<div style={styles.container}>
			<div style={styles.title}>Title</div>
			<div style={styles.status}>Status</div>
			<div style={styles.added}>Added</div>
			<div style={styles.distanceContainer}>
				<div style={styles.mileage}>Miles</div>
				<div style={styles.hours}>Hours</div>
			</div>
		</div>
	);
};

export default BikeCard;

const styles = StyleSheet.create({
	container: {
		display: "flex",
	},
});
