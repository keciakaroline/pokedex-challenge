import styled from "styled-components";

export const Main = styled.div`
  margin-top: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  flex-wrap: wrap;
`;

export const Name = styled.div`
  font-size: 36px;
  text-transform: capitalize;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 15px;
`;

export const Details = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  padding-right: 10px;
  font-weight: 600;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  padding-top: 10px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Hr = styled.hr`
  width: 40%;
  margin-bottom: 30px;
`;
