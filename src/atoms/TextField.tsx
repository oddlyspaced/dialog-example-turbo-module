import { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	ViewStyle,
	StyleProp,
	StyleSheet,
} from 'react-native';

interface ITextFieldProps {
	title: string;
	placeholder: string;
	onTextChange: (value: string) => void;
	containerStyle?: StyleProp<ViewStyle>;
}

export const TextField = ({
	title,
	placeholder,
	onTextChange,
	containerStyle,
}: ITextFieldProps) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View style={containerStyle}>
			<Text style={[styles.title, isFocused && styles.focusedText]}>
				{title}
			</Text>
			<View
				style={[
					styles.inputContainer,
					isFocused && styles.focusedBorder,
				]}
			>
				<TextInput
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					placeholder={placeholder}
					style={[styles.input, isFocused && styles.focusedInput]}
					placeholderTextColor={'#8E8E93'}
					onChangeText={onTextChange}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		color: '#000000',
	},
	focusedText: {
		color: '#007AFF',
	},
	inputContainer: {
		marginTop: 8,
		borderColor: '#8E8E93',
		borderWidth: 1,
		borderRadius: 6,
		height: 36,
	},
	focusedBorder: {
		borderColor: '#007AFF',
	},
	input: {
		color: '#000000',
		height: 36,
		padding: 8,
	},
	focusedInput: {
		color: '#007AFF',
	},
});
