import { registerRootComponent } from 'expo';
import { PaperProvider } from 'react-native-paper';
import App from './App';
import './config';

const MainApp = () => {
  
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};

registerRootComponent(MainApp);
