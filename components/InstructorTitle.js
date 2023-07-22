import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InstructorTitle({ children }) {
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.title}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		borderWidth: 1,
		borderColor: 'white',
		padding: 20,
		borderRadius: 20,
	},
	title: {
		color: 'white',
		fontSize: 16,
		textTransform: 'uppercase',
	},
});
