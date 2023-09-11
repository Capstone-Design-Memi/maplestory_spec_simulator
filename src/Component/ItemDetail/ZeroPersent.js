import React from "react";
import styled from 'styled-components';
import Line_img from '../../images/frame/line.png';
import BDR_img from '../../images/summary/bdr.png';
import IGPDDR_img from '../../images/summary/igpddr.png';
import PDD_img from '../../images/summary/pdd.png';
import Disable0_img from '../../images/Numbers/disable/0.png';
import DisablePercent_img from '../../images/Numbers/disable/percent.png';

export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  width: 261px;
  height: 25px;
  background-image: url('${Line_img}');
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Persent = styled.div`
  width: 5px;
  height: 17px;
  background-image: url('${DisablePercent_img}');
  float: left;
  background-repeat: no-repeat;
  background-position: center center;
`

export const Disable0 = styled.div`
  width: 5px;
  height: 17px;
  background-image: url('${Disable0_img}');
  float: left;
  background-repeat: no-repeat;
  background-position: center center;
`

export const BDR = styled.div`
  width: 17px;
  height: 17px;
  background-image: url('${BDR_img}');
  float: left;
`

export const IGPDDR = styled.div`
  width: 16px;
  height: 16px;
  background-image: url('${IGPDDR_img}');
  float: left;
`

export const PDD = styled.div`
  width: 17px;
  height: 17px;
  background-image: url('${PDD_img}');
  float:left;
`

export const InnerDiv = styled.div`
  width: 100%;
  height: 17px;
  float: left;
`

export const Blank = styled.div`
  width: 17px;
  height: 17px;
  float: left;
`

export const BlankHalf = styled.div`
  width: 8px;
  height: 17px;
  float: left;
`

export const BlankHalfandHalf = styled.div`
  width: 4px;
  height: 17px;
  float: left;
`

const ZeroPersent = (props) => {
    return(
        <Line>
            <InnerDiv>
              <BlankHalf/>
              <PDD/>
              <Blank/><Blank/>
              <Disable0/>
              <BlankHalf/>
              <BDR/>
              <Blank/><Blank/>
              <Disable0/>
              <BlankHalfandHalf/>
              <Persent/>
              <BlankHalfandHalf/>
              <IGPDDR/>
              <Blank/>
              <BlankHalf/>
              <Disable0/>
              <BlankHalfandHalf/>
              <Persent/>
            </InnerDiv>
        </Line>
    );
}

export default ZeroPersent;