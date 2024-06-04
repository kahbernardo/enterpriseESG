import styled from 'styled-components/native';

export const EventItemContainer = styled.View`
  flex-direction: row;
  padding: 16px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  margin: 20px auto;
  background-color: #ffffff;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const EventImage = styled.Image`
  width: 150px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
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
