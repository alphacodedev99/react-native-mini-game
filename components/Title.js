import { StyleSheet, Text, View } from 'react-native';

function Title({ children }) {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.titleItem}>{children}</Text>
		</View>
	);
}

export default Title;

const styles = StyleSheet.create({
	titleContainer: {
		borderWidth: 2,
		borderColor: 'white',
		width: '80%',
		marginTop: 100,
		padding: 24,
		borderRadius: 10,
		alignItems: 'center',
	},
	titleItem: {
		color: 'white',
		fontSize: 24,
	},
});
