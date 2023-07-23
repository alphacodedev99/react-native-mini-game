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
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	// number witch client/user picked
	const [userNumber, setUserNumber] = useState(0);
	// for game over state
	const [isGameOver, setIsGameOver] = useState(true);
	// guess rounds
	const [guessRounds, setGuessRounds] = useState(0);

	// root screen
	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen
				userNumber={userNumber}
				onGameOver={gameOverHandler}
			/>
		);
	}

	if (isGameOver && userNumber) {
		screen = (
			<GameOverScreen
				guessRounds={guessRounds}
				onStartNewGame={startNewGameHandler}
				userNumber={userNumber}
			/>
		);
	}

	// FN for handle number from user
	function pickedNumberHandler(pickNumberUser) {
		setUserNumber(pickNumberUser);
		setIsGameOver(false);
	}

	// FN for handle game over screen and number of rounds
	function gameOverHandler(numbOfRounds) {
		setIsGameOver(true);
		setGuessRounds(numbOfRounds);
	}

	// start new game over and over
	function startNewGameHandler() {
		setUserNumber(0);
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
