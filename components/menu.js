import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons, Foundation, FontAwesome, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';

export default class Menu extends React.Component {
  render() {
    return (
        <View style={styles.header}>
          <View>
            <Text style={styles.textMenu}>Menu</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menuIcon}>
              <View style={styles.icon}>
                <FontAwesome name="qrcode" size={30} color="#cac0d6" />
              </View>
              <View >
                <Text style={styles.text}>Absen QR</Text>
              </View>
            </View>
            <View style={styles.menuIcon}>
              <View style={styles.icon}>
                <MaterialIcons name="sort-by-alpha" size={30} color="#cac0d6" />
              </View>
              <View >
                <Text style={styles.text}>Absen Kode</Text>
              </View> 
            </View>
            <View style={styles.menuIcon}>
              <View style={styles.icon}>
                <SimpleLineIcons name="notebook" size={30} color="#cac0d6" />
              </View>
              <View>
                <Text style={styles.text}>Jadwal</Text>
              </View> 
            </View>
          </View>
           <View style={{flexDirection:"row"}}>
            <View style={styles.menuIcon}>
              <View style={styles.icon}>
                <Foundation name="clipboard-notes" size={30} color="#cac0d6" />
              </View>
              <View>
                <Text style={styles.text}>KHS</Text>
              </View>  
            </View>
            <View style={styles.menuIcon}>
              <View style={styles.icon}>
                <SimpleLineIcons name="note" size={30} color="#cac0d6" />
              </View>
              <View>
                <Text style={styles.text}>KRS</Text>
              </View> 
            </View>
            <View style={styles.menuIcon}>
              <View style={styles.icon}>
                <MaterialCommunityIcons name="notebook" size={30} color="#cac0d6" />
              </View> 
              <View>
                <Text style={styles.text}>Transkip Nilai</Text>
              </View>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    flex:2,
    marginTop:20,
    marginHorizontal:25
  },
  textMenu:{
    fontWeight:"bold",
    fontSize:17
  },
  menu:{
    flexDirection:"row"
  },
  menuIcon:{
    flex:1,
    marginVertical:10,
    alignItems:"center",
  },
  icon:{
    marginVertical:10,
    padding:20,
    borderWidth:1,
    borderRadius:6,
    backgroundColor:"#482273"
  },
  text:{
    fontWeight:"500"
  },
});