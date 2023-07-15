import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// button
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				maxLength={2}
				style={styles.inputFieldContainer}
				keyboardType='number-pad'
				autoCorrect={false}
				autoCapitalize='none'
			/>

			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 100,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: '#72063c',
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
		borderWidth: 2,
		borderBottomColor: 'orange',
		borderColor: 'transparent',
		width: 50,
		height: 50,
		textAlign: 'center',
		fontSize: 28,
		color: 'orange',
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
