import React, { useState } from 'react';
import {
	View,
	TextInput,
	StyleSheet,
	Alert,
	KeyboardAvoidingView,
	ScrollView,
	useWindowDimensions,
	Platform,
} from 'react-native';

// components
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import InstructorTitle from '../components/InstructorTitle';

// constants
import Colors from '../constants/Colors';

export default function StartGameScreen({ onPickNumber }) {
	const [enterNumber, setEnterNumber] = useState('');

	// for responsive and check dimensions
	const { width, height } = useWindowDimensions();

	// here i first get number from input and handle state up
	function numberFromInputHandler(entNum) {
		setEnterNumber(entNum);
	}

	function resetInputHandler() {
		setEnterNumber('');
	}

	// confirm number between 1 and 99. for our game
	function confirmNumberHandler() {
		const parseNumberPicked = parseInt(enterNumber);

		if (
			isNaN(parseNumberPicked) ||
			parseNumberPicked <= 0 ||
			parseNumberPicked > 99
		) {
			Alert.alert(
				'Invalid number picked',
				'You must select a number between 1 and 99',
				[
					{
						text: 'Okey',
						style: 'destructive',
						onPress: resetInputHandler,
					},
				]
			);

			return;
		}

		onPickNumber(parseNumberPicked);
	}
	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior='position'>
				<View style={styles.rootContainer}>
					<Title>Guess My Number</Title>
					<View style={styles.inputContainer}>
						<InstructorTitle>Entered Your Number</InstructorTitle>
						<TextInput
							maxLength={2}
							style={styles.inputFieldContainer}
							keyboardType='number-pad'
							autoCorrect={false}
							autoCapitalize='none'
							onChangeText={numberFromInputHandler}
							value={enterNumber}
						/>

						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={resetInputHandler}>
									Reset
								</PrimaryButton>
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={confirmNumberHandler}>
									Confirm
								</PrimaryButton>
							</View>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		alignItems: 'center',
	},
	inputContainer: {
		marginTop: 50,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: Colors.primary500,
		borderRadius: 8,
		// just for Android shadow
		elevation: 4,
		// just for IOS
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.5,
		alignItems: 'center',
	},
	inputFieldContainer: {
		width: 50,
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor: Colors.accent500,
		textAlign: 'center',
		fontSize: 28,
		color: Colors.accent500,
		marginVertical: 8,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
		alignItems: 'center',
	},
});
