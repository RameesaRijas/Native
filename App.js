import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import Dashboard from './Screens/Dashboard';
import MainScreen from './Screens/MainScreen';

export default function App() {
  return (
    <PaperProvider>
      <MainScreen/>
      </PaperProvider>
  );
}


