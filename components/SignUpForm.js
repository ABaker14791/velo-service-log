import { Text, Button, StyleSheet, Pressable, View } from "react-native";

export default function SignUpForm() {
	return (
		<div style={styles.container}>
			<View style={styles.buttonContainer}>
				<Button title="Sign up" />
				<Button title="Log in" />
			</View>
		</div>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
	},
	buttonContainer: {
		gap: "1em",
		display: "flex",
		flexDirection: "row",
	},
});
