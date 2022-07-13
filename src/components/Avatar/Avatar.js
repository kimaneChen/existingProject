import React from 'react';
import styled from 'styled-components';

const ProfileImg = styled.img`
  border-radius: 50%;
  display: inline-block;
  position: relative;
  margin: 5px;
`;

const Avatar = () => (
  <div>
    <ProfileImg src={"https://eu7cmie.cloudimg.io/v7/https://airtasker-p…com/runner/images/person-1.png?width=32&height=32"} alt={"user avatar"} />
  </div>
);

export default Avatar;