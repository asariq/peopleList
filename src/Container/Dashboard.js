import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Header, ListName} from '../Components/DashBoardComponent';

const DashBoard = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const employeeDetail = useSelector(state => state?.valueData?.employeeDetail);

  useEffect(() => {
    setData(employeeDetail);
    storeUser();
  }, [employeeDetail]);

  const storeUser = async () => {
    try {
      await AsyncStorage.setItem('userDetails', JSON.stringify(employeeDetail));
    } catch (error) {
      alert('Error while storing');
    }
  };

  const sortFirst = () => {
    let value = [...employeeDetail];

    const sorted = value?.sort((first, second) => {
      let fa = first.firstName.toLowerCase(),
        fb = second.firstName.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setData(sorted);
  };

  const sortLast = () => {
    let value = [...employeeDetail];

    const sorted = value?.sort((first, second) => {
      let fa = first.lastName.toLowerCase(),
        fb = second.lastName.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setData(sorted);
  };

  return (
    <View style={styles.container}>
      <Header
        onPressRight={() => navigation.goBack()}
        onPressLeft={() => navigation.openDrawer()}
      />
      <View style={{flexDirection: 'row'}}>
        <Button title="sort with First Name" onPress={sortFirst} />
        <Button title="sort with Last Name" onPress={sortLast} />
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <ListName
              item={item}
              index={index}
              dispatch={dispatch}
              fullArr={employeeDetail}
            />
          );
        }}
      />
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
