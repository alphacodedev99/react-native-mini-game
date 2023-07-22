import { LinearGradient } from 'expo-linear-gradient';
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

// screens
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
	// number witch client/user picked
	const [userNumber, setUserNumber] = useState(0);

	// root screen
	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} />;
	}

	// FN for handle number from user
	function pickedNumberHandler(pickNumberUser) {
		setUserNumber(pickNumberUser);
		console.log(pickNumberUser, 'from app js');
	}

	return (
		<>
			<StatusBar style='light' />
			<LinearGradient
				colors={['#4c669f', '#3b5998', '#192f6a']}
				style={styles.container}>
				<ImageBackground
					source={require('./assets/dice.jpg')}
					style={styles.container}
					imageStyle={styles.backgroundContainer}>
					<SafeAreaView style={styles.container}>
						{screen}
					</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
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
