import { LinearGradient } from 'expo-linear-gradient';
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
	return (
		<LinearGradient
			colors={['#4c669f', '#3b5998', '#192f6a']}
			style={styles.container}>
			<ImageBackground
				source={require('./assets/dice.jpg')}
				style={styles.container}
				imageStyle={styles.backgroundContainer}>
				<StartGameScreen />
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundContainer: {
		opacity: 0.8,
	},
});
