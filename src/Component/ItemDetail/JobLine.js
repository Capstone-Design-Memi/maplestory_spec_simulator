import React from "react";
import styled from 'styled-components';
import Line_img from '../../images/frame/line.png';
import Normal_img from '../../images/job/normal.png';

export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  height: 25px;
  background-image: url('${Line_img}');
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Normal = styled.div`
    width: 237px;
    height: 24px;
    background-image: url('${Normal_img}');
`

const JobLine = (props) => {
    return(
        <Line>
            <Normal/>
        </Line>
    )
}

export default JobLine;
