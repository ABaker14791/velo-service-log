import React from "react";
import { StyleSheet } from "react-native";

const Header = () => {
	return (
		<header style={styles.header}>
			<h1>Velo Service Log</h1>
		</header>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#F2F555",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		textTransform: "uppercase",
		color: "#454545",
	},
});
