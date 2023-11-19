import styled from "styled-components";

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
