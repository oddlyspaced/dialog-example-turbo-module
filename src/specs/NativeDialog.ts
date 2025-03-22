import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
	showDialog(text: string): Promise<'YES' | 'NO'>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeDialog');
