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

export const EventImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const ImageCaption = styled.Text`
  font-size: 12px;
  color: #555;
  text-align: center;
  margin-bottom: 16px;
`;

export const EventTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const EventDescription = styled.Text`
  font-size: 16px;
  margin-bottom: 16px;
  color: #333;
`;

export const EventLink = styled.Text`
  font-size: 16px;
  color: #007bff;
  text-decoration: underline;
`;
