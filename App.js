import { Provider as PaperProvider } from "react-native-paper";
import MainScreen from './Screens/MainScreen';
import Header from './Screens/Header';

export default function App() {
  return (
    <PaperProvider>
      <Header/>
      <MainScreen/>
    </PaperProvider>
  );
}


