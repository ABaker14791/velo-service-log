import { StyleSheet, Text, View } from "react-native";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
	const [signedIn, setSignedIn] = useState(true);
	return (
		<View style={styles.container}>
			<Header />
			{signedIn === false ? <SignUpForm /> : null}
			<div>Content</div>
			<div>Navigation bar</div>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		fontFamily: "sans-serif",
	},
});
