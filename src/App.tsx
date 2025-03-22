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
			<Button title={'Show'} onPress={() => {
        NativeDialog?.showDialog('hello')
      }}></Button>
		</View>
	);
};

export default App;
