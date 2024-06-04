import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const EventContainer = styled.View`
  flex-direction: row;
  padding: 16px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const EventImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const EventDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

export const EventTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const EventDescription = styled.Text`
  font-size: 14px;
  color: #555;
`;
