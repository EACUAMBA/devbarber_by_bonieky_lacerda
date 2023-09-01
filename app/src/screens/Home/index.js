import React, {useState} from 'react';
import {Platform, RefreshControl} from 'react-native';
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

    LoadingIcon,

    ListArea
} from './styles';

import SearchIcon from './../../assets/search.svg';
import MyLocationIcon from './../../assets/my_location.svg';
import Geolocation from "@react-native-community/geolocation";
import Api from "../../Api";
import BarberItem from '../../components/BarberItem'

export default () => {
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [barbers, setBarbers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

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

            Geolocation.getCurrentPosition(async (info) => {
                setCoords(info.coords);
                await getBarbers();
            });
        } else {
            alert('Permita a aplicação á aceder a tua localização.');
        }
    }

    async function getBarbers() {
        setLoading(true);
        setBarbers([]);

        let lat = null;
        let lng = null;

        if(coords){
            lat = coords.latitude
            lng = coords.longitude
        }

        const responseAsJson = await Api.getBarbers(lat, lng);

        if(responseAsJson.error == ""){
            if(responseAsJson.loc != ''){
                setLocationText(responseAsJson.loc)
            }
            setBarbers(responseAsJson.data);
        }else{
            alert("Error: " + responseAsJson.error);
        }

        setLoading(false);
    }

    useState(async () => {
        await getBarbers();
    }, [])

    const onRefresh = ()=> {
        //disable the refresh icon
        setRefreshing(false);
        getBarbers();
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>

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


                <ListArea>
                    {
                        barbers.map((barber, index) => <BarberItem key={index} barber={barber}/>)
                    }
                </ListArea>
            </Scroller>
        </Container>
    );
}