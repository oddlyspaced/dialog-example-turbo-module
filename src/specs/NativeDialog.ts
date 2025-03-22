import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
	showDialog(
		message: string,
		positiveLabel: string,
		negativeLabel: string,
	): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeDialog');
