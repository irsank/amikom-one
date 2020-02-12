import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Carousel from 'react-native-snap-carousel';
import Card from './card';

const ENTRIES1 = [
    {
        matkul: 'Character And Teamwork Building',
        ruangkls: "5.4.2",
        dosen: "Muhammad Baharudin, S.Kom,M.Eng"
    },

    {
        matkul: 'Pemrograman II',
        ruangkls: "5.3.3",
        dosen: "Muhammad Anjasmoro, M.Kom"
    },
    
];
export default class Slide extends React.Component {
  renderCard = ({item, index}) => {
        return (
            <Card data={item} />
        );
    }
  render() {
    return (
      <View style={styles.header}>
        <View>
        <Carousel
              ref={(c) => { this._carousel = c; }}
              data={ENTRIES1}
              renderItem={this.renderCard}
              sliderWidth={365}
              itemWidth={332}
              autoplay={true}
        />
        </View>

        <View style={styles.border} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 border:{
    marginTop:23,
    borderBottomColor: '#f6f6f6',
    borderBottomWidth: 2,
    marginLeft:24
 },
});
