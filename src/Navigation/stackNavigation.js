import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import OnBoarding from '../Container/Onboarding';
import DashBoard from '../Container/Dashboard';
import UserDetail from '../Container/UserDetail';

function CustomDrawerContent({totalNumber = 0, fav = 0}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Number :{totalNumber}</Text>
      <Text style={styles.text}>My Favourite :{fav}</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const [totalFav, setTotalFav] = useState(0);
  const employeeDetail = useSelector(state => state?.valueData?.employeeDetail);

  useEffect(() => {
    let favNum = 0;
    if (employeeDetail.length != 0 && employeeDetail) {
      employeeDetail.map(value => {
        if (value?.star) favNum = favNum + 1;
      });
      setTotalFav(favNum);
    }
  }, [employeeDetail]);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="OnBoarding"
        drawerContent={props => (
          <CustomDrawerContent
            totalNumber={employeeDetail?.length}
            fav={totalFav}
          />
        )}>
        <Drawer.Screen name="OnBoarding" component={OnBoarding} />
        <Drawer.Screen name="DashBoard" component={DashBoard} />
        <Drawer.Screen name="UserDetail" component={UserDetail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 100, justifyContent: 'center'},
  text: {padding: 10, color: 'black', fontSize: 16, fontWeight: 'bold'},
});
