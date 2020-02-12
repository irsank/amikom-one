import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Card from './card';

const DATA = [
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

const { width } = Dimensions.get('window');

export default class Slide extends React.Component {
  state = {
    activeIndex: 1
  };

  renderCard = ({item, index}) => {
    return (
        <Card data={item} />
    );
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <View style={styles.header}>
        <View>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={DATA}
            renderItem={this.renderCard}
            onSnapToItem={(index) => this.setState({ activeIndex: index }) }
            sliderWidth={width}
            itemWidth={width}
            autoplay
            loop
          />
          <Pagination
            dotsLength={DATA.length}
            activeDotIndex={activeIndex}
            containerStyle={styles.paginationContainer}
            carouselRef={this._carousel}
            tappableDots={!!this._carousel}
            dotElement={<View style={[styles.paginationDot, styles.paginationDotActive]} />}
            inactiveDotElement={<View style={styles.paginationDot} />}
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
  paginationContainer: {
    paddingBottom: 10,
  },
  paginationDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#c6c6c6'
  },
  paginationDotActive: {
    width: 50,
    height: 15,
    borderColor: '#FFF',
    backgroundColor: '#f3963e'
  }
});
