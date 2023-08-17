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

    function goTo(screenName){
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Appointments')}>
                <TodayIcon width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoriteIcon width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <PersonIcon width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
        </TabArea>
    );
}