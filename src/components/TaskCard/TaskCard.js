import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoint';
import Avatar from '../Avatar';

const CardContainer = styled.a`
  box-shadow: 0 1px rgb(187 194 220 / 60%);
  display: block;
  opacity: 1;
  padding: 0 12px;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-radius: 4px;
  margin: 10px 7px 10px 0;
  box-sizing: border-box;
  transition: box-shadow .1s ease-out;
  cursor: pointer;
  border: 1px solid transparent;
  @media screen and ${breakpoint.device.sm} and ${breakpoint.device.ml} {
    margin: 10px auto;
    max-width: 500px;
  } 
`;

const TaskHeader = styled.div`
  display: flex;
  margin: 10px 0 5px;
`;

const TaskTitle = styled.span`
  font-weight: 300;
  flex-grow: 1;
  font-size: 17px;
  line-height: 20px;
  color: #292b32;
  word-break: break-word;
`;

const TaskPrice = styled.div`
  font-weight: 500;
  float: right;
  font-size: 24px;
  margin-left: 10px;
  line-height: 24px;
  color: #292b32;
`;

const TaskBody = styled.div`
  margin: 5px 0 10px;
  min-height: 34px;
`;

/* Could use same components */
const TaskIcon = styled.div`
`;

const TaskDate = styled.div`
`;

const TaskFooter = styled.div`
  height: 32px;
  font-size: 11px;
  line-height: 32px;
  box-sizing: border-box;
  border-top: 1px solid #e7ebfb;
`;

const TaskStatus = styled.span`
  font-weight: 700;
  text-transform: uppercase;
/*   -webkit-font-smoothing: antialiased; */
`;

const TaskBids = styled.span`
  color: #545a77;
  margin-left: 10px;
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: #545a77;
    border-radius: 50%;
    left: -6px;
    top: 50%;
    margin-top: -1px;
  }
`;

const TaskCard = () => {
  return (
    <CardContainer>
      <TaskHeader>
        <TaskTitle>LOGO - Sneaker Boutique and Hype clothing</TaskTitle>
        <TaskPrice>
          <span>$100</span>
        </TaskPrice>
      </TaskHeader>
      <TaskBody>
        <Avatar />
        <TaskIcon>
          <span>Remote</span>
        </TaskIcon>
        <TaskDate>
          <span>Wed, 30 Jun</span>
        </TaskDate>
        <TaskFooter>
          <TaskStatus>
            OPEN
          </TaskStatus>
          <TaskBids>
            8 offers
          </TaskBids>
        </TaskFooter>
      </TaskBody>

    </CardContainer>
  )
}

export default TaskCard;