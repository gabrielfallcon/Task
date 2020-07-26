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
  width: 762px;
  max-width: 100%;
  height: 100%;
  max-height: 489px;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #E8E9ED;
  border-radius: 9px;

  h2{
    font-size: 28px;
    font-weight: bold;
    color: #46434C;
  }
  form{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;

    input{
      width: 350px;
      max-width: 100%;
      height: 40px;
      padding: 10px 15px; 
      border: 0;
      border-radius: 40px;
      background-color: #FFF;
      color: #46434C;
      font-size: 12px;

      & + input {
        margin-top: 6px;
      }
    }

    button {
      width: 138px;
      height: 40px;
      margin-top: 24px;
      background-color: #0FA958;
      border: 1px solid #0FA958;
      color: #FFF;
      border-radius: 40px;
      font-weight: bold;
      transition: .5s;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;

      &::placeholder {
        color: #46434C;
      }

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
    
    h2 {
      font-size: 38px;
    }

    form {
      input {
        height: 50px;
        font-size: 15px;
      }
      button {
        width: 80%;
        height: 50px;
        font-size: 18px;
      }
    }
  }
`;