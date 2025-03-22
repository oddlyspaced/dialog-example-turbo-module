import { Button, View } from 'react-native';
import NativeDialog from './specs/NativeDialog';

const App = () => {
	return (
		<View
			style={{
				flex: 1,
				paddingTop: 50,
			}}
		>
			<Button
				title={'Show'}
				onPress={() => {
					NativeDialog?.showDialog(
						'Do you like React Native?',
						'Yes',
						'No',
					)
						?.then((res) => {
							console.log('RESULT : ' + res);
						})
						.catch((err) => {
							console.log('ERR : ' + err);
						});
				}}
			></Button>
		</View>
	);
};

export default App;
