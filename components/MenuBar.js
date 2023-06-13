import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faHouse,
	faUser,
	faPlus,
	faWrench,
} from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
	return (
		<div style={styles.menu}>
			<div style={styles.menuItem}>
				<div style={styles.icon}>
					<FontAwesomeIcon icon={faHouse} size={30} />
				</div>
				<div>Bikes</div>
			</div>
			<div style={styles.menuItem}>
				<div style={styles.icon}>
					<FontAwesomeIcon icon={faPlus} size={30} />
				</div>
				<div>Add</div>
			</div>
			<div style={styles.menuItem}>
				<div style={styles.icon}>
					<FontAwesomeIcon icon={faWrench} size={30} />
				</div>
				<div>Settings</div>
			</div>
			<div style={styles.menuItem}>
				<div style={styles.icon}>
					<FontAwesomeIcon icon={faUser} size={30} />
				</div>
				<div>Profile</div>
			</div>
		</div>
	);
};

export default MenuBar;

const styles = StyleSheet.create({
	menu: {
		backgroundColor: "#EDECDB",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		textTransform: "uppercase",
		color: "#454545",
		boxShadow: "0 -3px 8px #D9D8C9",
		position: "fixed",
		left: 0,
		bottom: 0,
		width: "100%",
		paddingTop: 10,
		paddingBottom: 10,
	},
	menuItem: {
		width: "25%",
		textAlign: "center",
	},
});
