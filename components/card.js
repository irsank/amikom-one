import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default class Card extends React.Component {
  render() {
    const { data } = this.props;
    return (
        <View style={styles.card}>
             <View style={styles.cardMatkul}> 
              <View style={styles.matkul}>
                <Text style={styles.matkulText}>{ data.matkul }</Text>
              </View>
             </View>
             <View style={styles.cardKlsDosen}>  
             <View style={styles.kls}>
                <Text style={styles.ruangkls}>{ data.ruangkls }</Text>
              </View>
              <View style={styles.dosen}>
                <Text style={styles.dosenText}>{ data.dosen }</Text>
              </View>
             </View> 
            </View>
    );
  }
}

const styles = StyleSheet.create({
  card:{
   minHeight: 250,
   paddingTop:15,  
   paddingHorizontal: 20,
 },
 cardMatkul:{
   borderWidth:0, 
   borderTopLeftRadius:10,
   borderTopRightRadius:10,
   backgroundColor:"#482273",
   paddingVertical:25,
   flex:1,
 },
 cardKlsDosen:{
   borderWidth:0,
   borderBottomLeftRadius:10,
   borderBottomRightRadius:10,
   backgroundColor:"#3f1e64",
   paddingVertical:17,
 },
 matkulText:{
   color:"white",
   fontSize:23,
   fontWeight:"bold",
   paddingHorizontal:15,
 },
 kls:{
    position: "absolute",
    right: 0,
    top: -15,
    backgroundColor:"#ff971e",
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
 },
 ruangkls:{
   color:"white",
   paddingHorizontal:10,
   paddingVertical:3,
   marginVertical:5,
 },
 
 dosenText:{
   color:"white",
   fontWeight:"bold",
   paddingHorizontal:16,
 },
});
