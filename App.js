import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header';
import Slide from './components/slide';
import Menu from './components/menu';

export default class App extends React.Component {
  render() {
    return (
          <ScrollView style={styles.container}>          
            <Header />
            <Slide />
            <Menu />
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
