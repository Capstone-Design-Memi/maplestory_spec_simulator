import { Row } from "antd";
import styled from "styled-components";

// SelectCharacterPage
export const CharacterListRow = styled(Row)`
  transform: translateY(25rem);
  height: 34rem;
`;

//캐릭터 선택 div
export const CharacterSel = styled.div`
  color: #f2c12e;
  font-size: 25px;
  font-weight: bold;
  background-color: #705545;
  border-radius: 0px 0px 10px 10px / 0px 0px 10px 10px;
  border-bottom: solid 5px #f5d682;
  border-left: solid 5px #f5d682;
  border-right: solid 5px #f5d682;
  margin-left: 70px;
  width: 270px;
  height: 70px;
  text-align: center;
  float: left;
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
  margin-left: 5vw;
  cursor: pointer;
`;

export const Background = styled.div`
  background-image: url(../../assets/maplestory_character_select_menu_by_pixel_rydol_de9aaup-fullview.jpg);
  height: 1000px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

// CharacterItem

export const Basic = styled.img`
  height: 60%;
  width: 50%;
  object-fit: cover;
  margin-top: -20px;
`;

export const Load = styled.img`
  height: 100%;
  width: 100%;
  margin-top: -85px;
  object-fit: cover;
`;

export const LoadBox = styled.div`
  height: 220px;
  width: 100px;
  float: left;
  margin: -65px 80px 150px 20px;
`;

export const BasicBox = styled.div`
  height: 150px;
  width: 100px;
  float: left;
  margin: -45px 80px 235px 20px;
`;
