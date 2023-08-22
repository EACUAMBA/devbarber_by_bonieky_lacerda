import {styled} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63C2D1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

export const HeaderArea = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
`;
export const SearchButton = styled.TouchableOpacity`
  min-width: 50px;
  min-height: 50px;
  align-items: center;
  justify-content: center;
`;

export const LocationArea = styled.View``;
export const LocationInput = styled.TextInput``;
export const LocationFinder = styled.TouchableOpacity``;