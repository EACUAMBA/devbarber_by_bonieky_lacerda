import React from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import BarberLogo from './../../assets/svg/barber.svg';

const Preload = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {

      } else {
        navigation.navigate('SignIn');
      }
    };

    checkToken();
  });

  return (
    <Container>
      <BarberLogo width="100%" height={160} />
      <LoadingIcon size={'large'} color={'#FFFFFF'} />
    </Container>
  );
};

export default Preload;
