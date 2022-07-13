import React, { Component } from 'react';
import styled from 'styled-components';

const FormConctainer =styled.div`
    width: 330px;
    padding:0px;
    margin: 0px;
`
const LogInForm =styled.form`
    width:100%;
    padding:0px;
    margin: 0px;
`
const FormFieldContainer=styled.div`
    overflow: hidden auto;
    color: rgb(41, 43, 50);
    padding: 0px;
    margin:0px;
`
const Label=styled.label`
    display: block;
    left:10px;
    text-align:left;
    color: rgb(41, 43, 50);
    font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 14px;
    font-weight: initial;
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-bottom: 8px;
`
const TextInputContainer=styled.div`
    position: relative;
    width: 100%;
    padding:0px;
    margin:0px;
`
const TextInputBox=styled.input`
    box-shadow: none;
    animation: 0s ease 0s 1 normal none running none;
    margin: 0px;
    padding:0px;
    box-sizing: border-box;
    appearance: none;
    width: 100%;
    color: rgb(41, 43, 50);
    background-color: rgb(255, 255, 255);
    font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 14px;
    font-weight: initial;
    line-height: 20px;
    letter-spacing: 0.25px;
    border-radius: 4px;
    min-height: 48px;
    border-color: rgb(187, 194, 220);
    border-width: 1px;
    border-style: solid;
`
const ForgetPassWordContainer=styled.div`
    box-sizing: border-box;
    display: flex;
    flex: row;
    flex-wrap: nowrap;
    -webkit-box-pack: center;
    justify-content:flex-end ;
    margin: 0px 0px 20px 0px;
    padding: 0px 0px 20px 0px;
    border-color: rgb(41, 43, 50);
`
const ForgetPassWordButton=styled.button`
    margin: 0px;
    padding: 0px 0px 30px 0px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: rgb(0, 143, 180);
    font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 16px;
    font-weight: initial;
    line-height: 24px;
    letter-spacing: 0.15px;
    text-decoration: none;
    right:0px;
`
const SubmitButton=styled.button`
    border-radius: 160px;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    box-sizing: border-box;
    margin: 0px;
    border-color: rgba(0, 0, 0, 0);
    border-width: 2px;
    border-style: solid;
    color: rgb(255, 255, 255);
    padding: 8px 16px;
    font-family: museo-bold, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 16px;
    font-weight: initial;
    line-height: 24px;
    letter-spacing: 0.15px;
    width: 100%;
    background-color: rgb(125, 179, 67);
`


export default class Login extends Component {
  render() {
    return (
      
        <FormConctainer>
          <LogInForm >

            <FormFieldContainer>
              <Label>Email</Label>
                <TextInputContainer>
                  <TextInputBox/>
                </TextInputContainer>              
            </FormFieldContainer> 

            <FormFieldContainer>
              <Label>Password</Label>
                <TextInputContainer>
                  <TextInputBox/>
              </TextInputContainer>              
            </FormFieldContainer> 

            <ForgetPassWordContainer>
              <ForgetPassWordButton>
                Forgot Password?
              </ForgetPassWordButton>              
            </ForgetPassWordContainer>

            <SubmitButton type="submit">
              Log in
            </SubmitButton>
          </LogInForm>
        </FormConctainer>
    
    )
  }
}
