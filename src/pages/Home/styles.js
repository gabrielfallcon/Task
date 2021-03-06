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

  span {
    width: 100px;
    height: 37px;
    background-color: #46434C;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    cursor: pointer;
  }

  @media(max-width: 768px) {
    h1 {
      font-size: 18px;
      margin-left: 10px;
    }
    span {
      width: 45px;
      height: 43px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  padding: 35px 20px;
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px) {
    flex-direction: column;
    padding: 35px 5px;
  }
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

  @media(max-width: 768px) {
    h2 {
      font-size: 32px;
      margin-left: 10px;
    }
    form {
      max-width: 100%;

      input {
        height: 50px;
        font-size: 15px;
      }
      button {
        align-self: center;
        width: 80%;
        height: 50px;
        font-size: 20px;
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
    justify-content: start;
    border-radius: 40px;
    padding-left: 80px;
    position: relative;

    & + .tbody {
      margin-top: 10px;
    }

    svg.concluir {
      background-color: #0FA958;
      border-radius: 50%;
      position: absolute;
      left: calc(0px + 20px);
      cursor: pointer;
    }

    li {
     width: 25%;
     font-size: 14px;
    }
    li.icons {
      position: absolute;
      right: calc(0px - 30px);

      svg.zoom {
        cursor: zoom-in;
      }
      svg.edit {
        cursor: -webkit-grabbing;
      }
      svg.cancel {
        cursor: pointer;
      }
      svg {
        & + svg {
          margin-left: 15px;
        }
      }
    }
  }

  @media(max-width: 768px) {
    padding: 0 5px;

    h2 {
      margin: 25px 0;
      font-size: 33px;
    }
    .thead{
      padding-left: 0px;
    }
    .tbody {
      padding: 0 10px;
      svg.concluir {
        display: none;
      }

      li.icons {
        .zoom, .edit {
          display: none;
        }
      }
    }
  }
`;