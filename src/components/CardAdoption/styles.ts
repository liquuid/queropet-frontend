import styled from 'styled-components';
import {shade} from 'polished';

interface CardProps{
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div`

    padding: 15px;
    background-color:#fff;
    width:70%;
    border-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;


    .iconSpecie{
        color: #ff90008c;
        display: block;
        font-size: 2.5rem;
        float: right;
    }
    .invisible{
        display: none;
    }
    .item{
        margin-bottom: 20px;
        margin-top: 10px;
       display: flex;
   align-items: baseline;
   }
   .titleItemCard{
    font-weight: bold;
    padding-right:10px;
    text-transform: lowercase;
    min-width: 50px;
   }
   h1{
       padding-right: 10px;
   }
   h2{
       margin-top: 20px;
   }
`;
export const Content = styled.div`

    place-content: center;
    width: 100%;
    padding-left: 50px;
    overflow: auto;
    background-size: cover;
    img {
        max-width: 340px;
    }
    ul {
        margin-left: 40px;
        list-style:none;
        text-decoration: none;
        display: flex;
    }
    li {
        flex: 1;
        margin-bottom: 10px;
    }
    a {
        flex:1;
        text-decoration: none;
        background-color: orange;
        color: white;
        width: 50px;
        padding: 5px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;

    }

`;

export const Date = styled.p`
    font-family: 'Roboto Slab', serif;
    font-size: 16px;

    font-weight: 600;
    color: grey;
`;

export const BodyContent = styled.p`
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    font-weight: 600;
    color: grey;
    margin-bottom: 20px;
`;

export const Name = styled.h2`
    font-family: 'Roboto Slab', serif;
    font-size: 36px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
`;

export const ButtonPanel = styled.div`
    display: flex;
    margin-right: 5px;

`;

