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
			{signedIn === false ? <SignUpForm /> : null}
			<BikeCard />
			<MenuBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EDECDB",
		alignItems: "center",
		fontFamily: "sans-serif",
	},
});
