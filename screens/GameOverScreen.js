import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

export default function GameOverScreen({
	guessRounds,
	onStartNewGame,
	userNumber,
}) {
	return (
		<View style={styles.rootContainer}>
			<Title>Game Over</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.imageLogo}
					source={require('../assets/success.png')}
				/>
			</View>

			<Text style={styles.textOfRounds}>
				There was {guessRounds} of rounds to pick your number{' '}
				{userNumber}.
			</Text>
			<PrimaryButton onPress={onStartNewGame}>
				Start New Game
			</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: 20,
	},
	textOfRounds: {
		color: 'white',
		fontFamily: 'openBold',
	},
	imageContainer: {
		width: 300,
		height: 300,
		overflow: 'hidden',
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.accent500,
	},
	imageLogo: {
		width: '100%',
		height: '100%',
	},
});
