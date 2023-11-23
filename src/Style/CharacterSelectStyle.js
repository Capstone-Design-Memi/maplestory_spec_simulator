import { Row } from "antd";
import styled from "styled-components";

// SelectCharacterPage
export const CharacterListRow = styled(Row)`
  transform: translateY(25rem);
  height: 34rem;
`;

export const ButtonRow = styled(Row)`
  transform: translateY(25rem);
  height: 13.3rem;
  text-align: center;
`;

export const CRButton = styled.button`
  color: #f2c12e;
  font-size: 25px;
  font-weight: bold;
  background-color: #705545;
  min-width: 15vw;
  height: 7vh;
  border-radius: 30px;
  border: 1px solid #705545;
  margin-left: 10px;
  cursor: pointer;
`;

export const Background = styled.div`
  background-image: url(../../assets/maplestory_character_select_menu_by_pixel_rydol_de9aaup-fullview.jpg);
  height: 140vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 1024px;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

// CharacterItem

export const Basic = styled.img`
  margin-bottom: 31vh;
  margin-right: 8.5vw;
  margin-top: -4vh;
  width: 5vw;
  height: 12.5vh;
`;

export const Load = styled.img`
  height: 30vh;
  width: 20vw;
  float: left;
  margin-top: -15vh;
`;
