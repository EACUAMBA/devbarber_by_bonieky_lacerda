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

export const LocationArea = styled.View`
  background-color: #4EADBE;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #FFFFFF;
`;
export const LocationFinder = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;