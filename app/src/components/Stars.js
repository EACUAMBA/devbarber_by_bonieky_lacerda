import React from 'react';
import styled from 'styled-components/native';

import StarFullIcon from './../assets/star.svg';
import StarHalfIcon from './../assets/star_half.svg';
import StarEmptyIcon from './../assets/star_empty.svg';

const StarArea = styled.View`
  flex-direction: row;
`;

const StarView = styled.View`
`;

const StarText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  color: #737373;
`;

export default ({stars, removeNumber}) => {
    const showNumbers = !removeNumber;
    const starsArray = [0, 0, 0, 0, 0];

    let floor = Math.floor(stars);
    let left = stars - floor;

    let i = 0;
    for (; i < floor; i++) {
        starsArray[i] = 2;
    }

    if (left > 0) {
        starsArray[i] = 1;
    }

    return (
        <StarArea>
            {
                starsArray.map((value, index) => (
                    <StarView key={index}>
                        {value === 0 && <StarEmptyIcon width={'18px'} height={'18px'} fill={'#FF9200'}></StarEmptyIcon>}
                        {value === 1 && <StarHalfIcon width={'18px'} height={'18px'} fill={'#FF9200'}></StarHalfIcon>}
                        {value === 2 && <StarFullIcon width={'18px'} height={'18px'} fill={'#FF9200'}></StarFullIcon>}
                    </StarView>
                ))
            }

            {showNumbers && <StarText>{stars}</StarText>}
        </StarArea>
    );
}