import styled from '@emotion/styled';
import { Form, Field } from 'formik';

const StyleList = {
  SearchbarContainer: styled.div`
    width: 100%;
    padding: 20px;
    background-color: rgba(224, 38, 38, 0.719);
  `,

  FormStyle: styled(Form)`
    display: flex;
    justify-content: center;
  `,

  FieldStyles: styled(Field)`
    width: 50%;
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid brown;
    background-color: bisque;
    padding: 10px;
    color: brown;
  `,

  FormBtnStyle: styled.button`
    position: relative;
    right: 60px;
    width: 60px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid brown;
    background-color: rgb(240, 103, 69);
    color: brown;
    padding: 10px;
    &:hover {
      background-color: brown;
      color: bisque;
      font-weight: 600;
    }
  `,

  ListOfImagesStyle: styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 30px;
    margin: 30px auto;
    font-size: 28px;
    & > li {
      border-radius: 20px;
      box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      overflow: hidden;
      &:hover {
        transform: scale(1.3);
      }
    }
  `,

  IsEmptyList: styled.div`
    display: block;
    height: calc(100vh - 100px);
    padding: 50px;
    color: brown;
    font-size: 28px;
    font-weight: bold;
    background-image: radial-gradient(
      red 15%,
      yellow 25%,
      rgba(224, 38, 38, 0.719) 60%
    );
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `,

  BtnLoadMoreStyle: styled.button`
    display: block;
    margin: 0 auto;
    width: 20%;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid brown;
    background-color: rgb(240, 103, 69);
    color: brown;
    padding: 10px;
    &:hover {
      background-color: brown;
      color: bisque;
      font-weight: 600;
    }
  `,

  ModalBackdrop: styled.div`
   position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  `,

  ModalBox: styled.div`
  width: 1000px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &>img{
      display: block;
      width: 100%;
      height: 100%; }
  `
};

export default StyleList;
