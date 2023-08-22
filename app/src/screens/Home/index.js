import React, {useState} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions'
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    HeaderArea,
    HeaderTitle,
    LocationArea,
    LocationFinder,
    LocationInput,
    Scroller,
    SearchButton,

    LoadingIcon
} from './styles';

import SearchIcon from './../../assets/search.svg';
import MyLocationIcon from './../../assets/my_location.svg';
import Geolocation from "@react-native-community/geolocation";

export default () => {
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [barbers, setBarbers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handlePressLocationFinder = async () => {
        const result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if (result == 'granted') {

            setLoading(true);
            setLocationText('');
            setCoords(null);
            setBarbers([]);

            Geolocation.getCurrentPosition((info) => {
                setCoords(info.coords);
                getBarbers();
            });
        } else {
            alert('Permita a aplicação á aceder a tua localização.');
        }
    }

    function getBarbers() {
        console.log('Getting barbers!')
    }

    return (
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle>
                        Encontre o seu barbeiro favorito
                    </HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon width={26} height={26} fill={'#FFFFFF'}/>
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder={"Onde você está?"}
                        placeholderTextColor={'#FFFFFF'}
                        value={locationText}
                        onChangeText={(text) => setLocationText(text)}
                    />
                    <LocationFinder onPress={handlePressLocationFinder}>
                        <MyLocationIcon width={24} height={24} fill={'#FFFFFF'}/>
                    </LocationFinder>
                </LocationArea>

                {
                    loading
                    &&
                    <LoadingIcon size={'large'} color={'#FFFFFF'}/>
                }
            </Scroller>
        </Container>
    );
}