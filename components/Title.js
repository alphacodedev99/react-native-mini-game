import {
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from 'react-native';

function Title({ children }) {
	const { height } = useWindowDimensions();

	const marginTop = height < 420 ? 20 : 100;

	return (
		<View style={[styles.titleContainer, { marginTop: marginTop }]}>
			<Text style={styles.titleItem}>{children}</Text>
		</View>
	);
}

export default Title;

// without rendering or looking for new dimension(static content);
// const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	titleContainer: {
		borderWidth: 2,
		borderColor: 'white',
		maxWidth: '80%',
		padding: 20,
		borderRadius: 10,
		alignItems: 'center',
	},
	titleItem: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'openBold',
	},
});
