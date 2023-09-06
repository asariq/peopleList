import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {IMAGES, isIos, windowHeight, windowWidth} from './Global_Constants';
import {updateData} from '../redux/slice';

export const Header = ({onPressLeft, onPressRight}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressLeft}>
        <Image source={IMAGES.line} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Inbox</Text>
      <TouchableOpacity onPress={onPressRight}>
        <Image source={IMAGES.add_circle_outline} />
      </TouchableOpacity>
    </View>
  );
};

export const ListName = ({item, index, dispatch, fullArr}) => {
  const initFirst = item?.firstName?.split('')[0].charAt(0).toUpperCase();
  const initSecond = item?.lastName?.split('')[0].charAt(0).toUpperCase();

  const updateFav = (index, isfav) => {
    const updated = fullArr.map((value, mapIndex) => {
      if (mapIndex == index) {
        return {...value, star: isfav};
      } else {
        return value;
      }
    });
    dispatch(updateData(updated));
  };

  return (
    <View style={styles.flatlistContainer}>
      <View style={styles.flatlist}>
        <View style={styles.avtarView}>
          <Text style={styles.avtarText}>
            {initFirst}
            {initSecond}
          </Text>
        </View>
        <View style={styles.nameBox}>
          <Text style={styles.textName}>
            {item?.firstName} {item?.lastName}
          </Text>
          <Text style={styles.textPost}>{item?.jobTitle}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            updateFav(index, !item?.star);
          }}>
          <Image
            source={item?.star ? IMAGES.star : IMAGES.star_border}
            style={styles.star}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {fontSize: 22, fontWeight: 'bold', color: 'black'},
  header: {
    height: windowHeight * 0.09,
    width: windowWidth,
    backgroundColor: '#33B864',
    marginTop: isIos() ? windowHeight * 0.06 : 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  flatlistContainer: {
    width: windowWidth,
    alignItems: 'center',
    paddingHorizontal: 5,
    height: windowHeight * 0.13,
  },
  flatlist: {
    height: windowHeight * 0.09,
    width: windowWidth * 0.9,
    backgroundColor: 'white',
    marginTop: windowHeight * 0.02,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 13,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    flexDirection: 'row',
  },
  avtarView: {
    height: 55,
    width: 55,
    borderRadius: 80,
    backgroundColor: '#33B864',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avtarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  nameBox: {
    height: windowHeight * 0.07,
    width: windowWidth * 0.55,
    padding: 9,
    marginLeft: 5,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  textPost: {
    fontSize: 14,
    color: 'gray',
  },
  star: {
    height: 45,
    width: 45,
    overflow: 'visible',
  },
});
