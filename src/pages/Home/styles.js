import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.div`
  width: 100%;
  height: 60px;
  background-color: #E8E9ED;
`;

export const ContentNav = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    font-size: 28px;
    color: #46434C;
    font-weight: 400;
  }

  a {
    width: 100px;
    height: 37px;
    background-color: #46434C;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  padding: 35px 25px;
  display: flex;
  justify-content: space-between;
`;

export const RegisterTask = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    width: 100%;
    max-width: 380px;
    font-size: 36px;
    line-height: 46px;
    color: #46434C;
    font-weight: 400;
    margin-bottom: 30px;
  }
  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;

    input{
      width: 100%;
      max-width: 100%;
      height: 40px;
      padding: 10px 15px; 
      border: 0;
      border-radius: 40px;
      background-color: #E8E9ED;
      color: #46434C;
      font-size: 12px;

      & + input {
        margin-top: 12px;
      }
    }

    button {
      width: 100px;
      height: 35px;
      margin-top: 24px;
      background-color: #0FA958;
      border: 1px solid #0FA958;
      color: #FFF;
      border-radius: 40px;
      font-weight: bold;
      transition: .5s;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-end;

      &::placeholder {
        color: #46434C;
      }

      &:hover{
        background-color: #FFF;
        color: #0FA958;
      }
    }
  }
`;

export const ListTask = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;

  h2{
    font-size: 36px;
    color: #46434C;
    margin-bottom: 30px;
  }

  ul{
    list-style: none;
    display: flex;
  }
  .thead {
    width: 100%;
    max-width: 600px;
    padding-left: 50px;
    justify-content: space-around;
    margin-bottom: 25px;

    li {
      font-weight: bold;
    }
  }
  .tbody {
    width: 100%;
    max-width: 600px;
    height: 50px;
    background-color: #E8E9ED;
    align-items: center;
    justify-content: space-around;
    border-radius: 40px;
    padding-left: 80px;

    & + .tbody {
      margin-top: 10px;
    }

    li {
     width: 25%;
     font-size: 14px;
    }
  }
`;