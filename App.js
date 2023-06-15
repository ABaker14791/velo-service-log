import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
// Components
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import BikeCard from "./components/BikeCard";

export default function App() {
	const [signedIn, setSignedIn] = useState(true);
	return (
		<View style={styles.container}>
			<Header />
			<div style={styles.content}>
				{signedIn === false ? <SignUpForm /> : null}
				<BikeCard />
				<MenuBar />
			</div>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EDECDB",
		alignItems: "center",
		fontFamily: "sans-serif",
		color: "#454545",
		boxSizing: "border-box",
	},
	content: {
		width: "100%",
		padding: "1rem",
		boxSizing: "border-box",
	},
});
