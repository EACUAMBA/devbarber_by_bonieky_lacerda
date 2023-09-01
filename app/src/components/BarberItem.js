import React from 'react';
import styled from 'styled-components/native';

import Stars from './Stars';

const Area = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: #FFFFFF;
  flex-direction: row;
  padding: 15px;
  margin-bottom: 15px;
`;

const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000000;
  
`;

const SeeProfileButton = styled.View`
    width: 85px;
  height: 26px;
  border: 1px solid #4EADBE;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;

export default ({barber}) => {
    return (
        <Area>
            <Avatar source={{uri: barber.avatar}}/>

            <InfoArea>
                <UserName>{barber.name}</UserName>

                <Stars stars={barber.stars} />

                <SeeProfileButton>
                    <SeeProfileButtonText>
                        Ver perfil
                    </SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    )
}