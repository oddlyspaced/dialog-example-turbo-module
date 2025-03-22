import { Platform, Pressable, Text, View, StyleSheet, StatusBar } from 'react-native';
import NativeDialog from './specs/NativeDialog';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextField } from './atoms/TextField';
import { useCallback, useState } from 'react';

interface IAlertDialogProps {
	message: string;
	positive: string;
	negative: string;
}

interface IAlertDialogResult {
	isError: boolean;
	result: string;
}

const App = () => {
	const [alertMessageProps, setAlertMessageProps] =
		useState<IAlertDialogProps>({
			message: '',
			positive: '',
			negative: '',
		});
	const [dialogResult, setDialogResult] = useState<IAlertDialogResult | null>(
		null,
	);

	const setAlertMessage = useCallback((message: string) => {
		setAlertMessageProps((prev) => ({ ...prev, message: message }));
	}, []);

	const setAlertPositiveTitle = useCallback((message: string) => {
		setAlertMessageProps((prev) => ({ ...prev, positive: message }));
	}, []);

	const setAlertNegativeTitle = useCallback((message: string) => {
		setAlertMessageProps((prev) => ({ ...prev, negative: message }));
	}, []);

	const showAlert = useCallback(() => {
		NativeDialog?.showDialog(
			alertMessageProps?.message,
			alertMessageProps?.positive,
			alertMessageProps?.negative,
		)
			?.then((result) => {
				setDialogResult({
					isError: false,
					result: result,
				});
			})
			.catch((error) => {
				setDialogResult({
					isError: true,
					result: error?.message,
				});
			});
	}, [alertMessageProps]);

	return (
		<SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
			<View style={styles.header}>
				<Text style={styles.title}>Turbo Module Demo</Text>
				<Text
					style={styles.platformText}
				>{`Current Platform: ${Platform.OS}`}</Text>
			</View>

			<View style={styles.inputContainer}>
				<TextField
					title='Alert Title'
					placeholder='Message'
					onTextChange={setAlertMessage}
				/>
				<TextField
					title='Positive Title'
					placeholder='Message'
					onTextChange={setAlertPositiveTitle}
					containerStyle={styles.textFieldSpacing}
				/>
				<TextField
					title='Negative Title'
					placeholder='Message'
					onTextChange={setAlertNegativeTitle}
					containerStyle={styles.textFieldSpacing}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Pressable style={styles.button} onPress={showAlert}>
					<Text style={styles.buttonText}>Show Alert Dialog</Text>
				</Pressable>
			</View>

			<View>
				<Text style={styles.resultTitle}>
					Result from Turbo Module:
				</Text>
				<Text
					style={[
						styles.resultText,
						{
							color: dialogResult?.isError
								? '#FF3B30'
								: '#34C759',
						},
					]}
				>
					{dialogResult?.result}
				</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 16,
	},
	header: {
		alignItems: 'center',
		marginTop: '20%',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	platformText: {
		marginTop: 4,
	},
	inputContainer: {
		marginTop: 48,
	},
	textFieldSpacing: {
		marginTop: 16,
	},
	buttonContainer: {
		marginTop: 32,
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#007AFF',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 24,
	},
	buttonText: {
		color: 'white',
	},
	resultTitle: {
		marginTop: 40,
		textAlign: 'center',
	},
	resultText: {
		marginTop: 4,
		textAlign: 'center',
	},
});

export default App;
