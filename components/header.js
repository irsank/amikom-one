import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Header extends React.Component {
  render() {
    return (
        <View style={styles.header}>
          <View style={styles.headerProfil}>
            <View style={styles.headerJudul}>
              <Text style={styles.headerTextDashboard}>Dashboard</Text>
            </View>
            <View style={styles.headerIcon}>
              <FontAwesome name="user-circle" size={33} color="#6b2b8b" />
            </View>
          </View>
          <View style={styles.headerText}>
            <View style={styles.textJadwal}>
              <Text style={styles.text}>Jadwal hari ini</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    flex:1,
    padding: 8,
    marginHorizontal:15,
    marginTop:35,
  },
  headerProfil:{
    flexDirection:"row"
  },
  headerJudul:{
    flex:1, 
    marginBottom:28
  },
  headerTextDashboard:{
    color:"#2e042d",
    fontSize:30,
    fontWeight:"bold"
  },
  headerIcon:{
    flex:1,
    alignItems:"flex-end"
  },
  headerText:{
    flex:1
  },
  textJadwal:{
    marginBottom:15
  },
  text:{
    fontWeight:"bold",
    fontSize:15
  },
});
