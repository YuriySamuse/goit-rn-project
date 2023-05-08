import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bgImage from "./assets/bg.jpg";

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require("./assets/photo-bg.png")}
			>
				<Text style={styles.title}>Регістрація</Text>
			</ImageBackground>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
		// padding: 24,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	title: {
		marginTop: 16,
		paddingVertical: 8,
		borderRadius: 25,
		backgroundColor: "#fff",
		color: "#20232a",
		textAlign: "center",
		fontSize: 30,
		fontWeight: "bold",
	},
});
