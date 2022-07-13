import React from 'react';
import styled from 'styled-components';

const General = styled.span`
    border-radius: 10px;
    padding: 2px 12px;
`;

const Offer = styled(General)`
    border-radius: 160px;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    box-sizing: border-box;
    margin: 0px;
    color: rgb(255, 255, 255);
    padding: 8px 16px;
    font-family: museo-bold, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 16px;
    font-weight: initial;
    line-height: 24px;
    letter-spacing: 0.15px;
    width: 100%;
    background-color: rgb(125, 179, 67);
`;

const StatusFocus = styled(General)`
  background-color: rgb(229, 240, 217);
  color: rgb(125, 179, 67);
  margin-right: 20px;
`;

const StatusNonFocus = styled(General)`
background-color: transparent;
color: rgb(187, 194, 220);
margin-right: 20px;
`;

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            title: this.props.title,
            onClick: this.props.onClick,
            focus: this.props.focus
        }
    }

    render() {
        switch (this.state.type) {
            case 'Status':
                if (this.state.focus) {
                    return (<StatusFocus>{this.state.title}</StatusFocus>)
                } else {
                    return (<StatusNonFocus>{this.state.title}</StatusNonFocus>)
                }
            case 'Offer':
                return (<Offer onClick={this.props.onClick}>{this.state.title}</Offer>);
            default:
                return (<General />);
        }
    }
}

export default Button;