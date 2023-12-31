import {
	View,
	Text,
	StyleSheet,
	FlatList,
	useWindowDimensions,
	ScrollView,
} from 'react-native';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import Colors from '../constants/Colors';

// icons
import Ionicons from '@expo/vector-icons/Ionicons';
import PrimaryButton from '../components/PrimaryButton';
import { Alert } from 'react-native';
import ItemPerGuess from '../components/ItemPerGuess';

// function for genereating random number between 1 and 100
function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
	// init number of computer guess
	let initialGuess = generateRandomBetween(1, 100, userNumber);
	// state of my current guesses
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	// rounds of game
	const [roundsOfGame, setRoundsOfGame] = useState([initialGuess]);

	const { height } = useWindowDimensions();

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(roundsOfGame.length);
		}
	}, [currentGuess]);

	function nextGuessHandler(direction) {
		// we must check if user/client want a abuses of the current guess
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert(
				'Wrong Information',
				'Please dont lie for the current guess',
				[{ text: 'Sorry', style: 'cancel' }]
			);
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		console.log(minBoundary, maxBoundary);

		let newRandomGuess = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRandomGuess);
		setRoundsOfGame((prevGuess) => [...prevGuess, newRandomGuess]);
	}

	return (
		<View style={styles.rootContainer}>
			{height < 420 ? null : <Title>Opponent's Guess</Title>}
			<Text style={styles.currentGuessText}>{currentGuess}</Text>

			<View style={styles.guessContainer}>
				<Text
					style={{
						color: Colors.accent500,
						textAlign: 'center',
						fontFamily: 'openBold',
					}}>
					Higher or Lower
				</Text>
				<View style={styles.guessIconsContainer}>
					<PrimaryButton onPress={() => nextGuessHandler('greater')}>
						<Ionicons
							name='md-add'
							size={25}
							color={Colors.accent500}
						/>
					</PrimaryButton>
					<PrimaryButton onPress={() => nextGuessHandler('lower')}>
						<Ionicons
							name='md-remove'
							size={25}
							color={Colors.accent500}
						/>
					</PrimaryButton>
				</View>
			</View>

			{/* items render */}
			<View style={styles.listContainer}>
				<FlatList
					data={roundsOfGame}
					renderItem={({ item }) => {
						return <ItemPerGuess item={item} />;
					}}
				/>
			</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		alignItems: 'center',
	},
	currentGuessText: {
		color: 'white',
		fontSize: 28,
		marginTop: 20,
		padding: 20,
		borderWidth: 1,
		borderColor: Colors.accent500,
		borderRadius: 20,
		fontWeight: 'bold',
		fontFamily: 'openBold',
	},
	guessContainer: {
		backgroundColor: Colors.primary500,
		padding: 20,
		marginTop: 30,
		width: '80%',
		borderRadius: 20,
	},
	guessIconsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 15,
		gap: 20,
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
});
