import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  background-color: #83D6E3;
  width: 100%;
  height: 60px;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export default ({IconSvg}) => {
    return (
        <InputArea>
            <IconSvg width={'24'} height={'24'} fill={'#268596'}/>
        </InputArea>
    );
}
