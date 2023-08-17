import React from 'react';
import {styled} from 'styled-components/native';

import HomeIcon from './../assets/home.svg';
import SearchIcon from './../assets/search.svg';
import TodayIcon from './../assets/today.svg';
import FavoriteIcon from './../assets/favorite.svg';
import PersonIcon from './../assets/person.svg';

const TabArea = styled.View`
  height: 60px;
  background-color: #4EADBE;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default ({state, navigation}) => {

    function goTo(screenName) {
        navigation.navigate(screenName);
    }

    function getOpacity(index) {
        return state.index === index ? 1 : 0.6;
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{opacity: getOpacity(0)}} width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon style={{opacity: getOpacity(1)}} width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Appointments')}>
                <TodayIcon style={{opacity: getOpacity(2)}} width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoriteIcon style={{opacity: getOpacity(3)}} width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <PersonIcon style={{opacity: getOpacity(4)}} width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
        </TabArea>
    );
}