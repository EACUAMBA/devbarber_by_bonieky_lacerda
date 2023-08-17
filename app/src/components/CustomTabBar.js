import React, {useContext} from 'react';
import {styled} from 'styled-components/native';
import {UserContext} from './../contexts/UserContext'

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

const TabItemCenter = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 35px;
  margin-left: 15px;
  margin-right: 15px;
  border: 3px solid #4EADBE;
  margin-top: -30px;
`;

const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;

`;

export default ({state, navigation}) => {

    const {state: user} = useContext(UserContext);

    function goTo(screenName) {
        navigation.navigate(screenName);
    }

    function getOpacity(index) {
        return state.index === index ? 1 : 0.6;
    }

    function getAvatar() {

    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{opacity: getOpacity(0)}} width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon style={{opacity: getOpacity(1)}} width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}>
                <TodayIcon width={"32"} height={"32"} fill={"#4EADBE"}/>
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoriteIcon style={{opacity: getOpacity(3)}} width={"24"} height={"24"} fill={"#FFFFFF"}/>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                {
                    (user.avatar != '') ?
                        <AvatarIcon source={{uri: user.avatar}}/>
                        :
                        <PersonIcon style={{opacity: getOpacity(4)}} width={"24"} height={"24"} fill={"#FFFFFF"}/>
                }
            </TabItem>
        </TabArea>
    )
        ;
}