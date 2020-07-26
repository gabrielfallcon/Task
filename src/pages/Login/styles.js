import styled from 'styled-components'

import img from '../../assets/task.jpeg' 

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 489px;
  max-width: 762px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #E8E9ED;
  border-radius: 9px;

  h2{
    font-size: 48px;
    font-weight: bold;
    color: #46434C;
  }
  form{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;

    .input{
      width: 402px;
      max-width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      border: 2px solid #FFF;
      border-radius: 40px;
      background-color: #FFF;
      margin-bottom: 20px;
      flex-direction: row;
      padding-left: 10px;

      input{
        width: 80%;
        height: 50px;
        padding: 10px 15px; 
        border: 0;
        background-color: transparent;

        & + input {
          margin-top: 36px;
        }
      }
    }

    button {
      width: 138px;
      height: 40px;
      margin-top: 34px;
      background-color: #0FA958;
      border: 1px solid #0FA958;
      color: #FFF;
      border-radius: 40px;
      font-weight: bold;
      transition: .5s;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover{
        background-color: #FFF;
        color: #0FA958;
      }
    }

    & > a {
      margin-top: 40px;
      text-decoration: none;
      color: #18A0FB;
    }
  }

  @media(max-width: 768px) {
    max-height: 100%;
    border-radius: 0;

    form {
      width: 100%;

      button {
        width: 100%;
        width: 320px;
        height: 50px;
      }
    }
  }
`;