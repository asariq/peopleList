import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import { useDispatch} from 'react-redux';

import {SubmitButton, InputBox} from '../Components/UsableComponents';
import {regx, windowHeight} from '../Components/Global_Constants';
import {saveData} from '../redux/slice';

const UserDetail = ({navigation}) => {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');

  const submit = () => {
   
    if (
      firstName == '' ||
      lastName == '' ||
      email == '' ||
      jobTitle == '' ||
      salary == ''
    ) {
      Alert.alert('People List', 'Fill all section');
    } else if (!regx.test(email)) {
      Alert.alert('Any-Where', 'Invalid Email Format');
    } else {
      dispatch(saveData({firstName,lastName,email,jobTitle,salary,star:false}))
      setFirstName("")
      setLastName("")
      setEmail("")
      setJobTitle("")
      setSalary("")
      navigation.navigate("DashBoard")
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter employee details</Text>
      <InputBox
        title={'First Name'}
        value={firstName}
        setValue={setFirstName}
        keyboardType={'default'}
        placeholder={'Enter employee first Name'}
      />
      <InputBox
        title={'Last Name'}
        value={lastName}
        setValue={setLastName}
        keyboardType={'default'}
        placeholder={'Enter employee Last Name'}
      />
      <InputBox
        title={'Email'}
        value={email}
        setValue={setEmail}
        keyboardType={'email-address'}
        placeholder={'Enter employee Email'}
      />
      <InputBox
        title={'Job title'}
        value={jobTitle}
        setValue={setJobTitle}
        keyboardType={'default'}
        placeholder={'Enter employee Job title'}
      />
      <InputBox
        title={'Salary'}
        value={salary}
        setValue={setSalary}
        keyboardType='numeric'
        placeholder={'Enter employee Salary'}
      />

      <SubmitButton title={'Save'} onPress={submit} />
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"flex-start",
    alignItems: 'center',
    backgroundColor: '#33B864',
    paddingTop:windowHeight*0.1
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
