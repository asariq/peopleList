import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import {SubmitButton} from '../Components/UsableComponents';
import {updateData} from '../redux/slice';

const OnBoarding = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const myArray = await AsyncStorage.getItem('userDetails');
      if (myArray !== null) {
        const data = JSON.parse(myArray);
        data?.length > 0 && navigation.navigate('DashBoard');
        dispatch(updateData(data));
        setLoading(false);
      }else{
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert('Error');
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <SubmitButton
          title="ADD EMPLOYEE"
          onPress={() => navigation.navigate('UserDetail')}
        />
      )}
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33B864',
  },
});
