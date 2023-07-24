import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';

export default function ItemPerGuess({ item }) {
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.itemText}>
				{' '}
				<Text style={styles.innerItemText}>#{item}</Text> your guess
				is wrong
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		backgroundColor: Colors.accent500,
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 20,
		marginTop: Platform.OS === 'android' ? 5 : 10,
	},
	itemText: {
		color: Colors.primary500,
		fontSize: 16,
		fontFamily: 'openBold',
	},
	innerItemText: {
		color: Colors.primary800,
	},
});
