import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function PrimaryButton({ children }) {
	function handlePress() {
		console.log('Radii');
	}

	return (
		<View style={styles.buttonContainer}>
			<Pressable
				onPress={handlePress}
				style={({ pressed }) =>
					pressed ? styles.press : styles.pressItem
				}>
				<Text style={{ color: 'white' }}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: 'red',
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 20,
	},
	press: {
		opacity: 0.5,
	},
});
