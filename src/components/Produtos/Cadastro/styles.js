import styled from 'styled-components';

export const Container = styled.div`

margin-left: 7px;
background-color: rgb(245, 235, 243);
width: 380px;
display: flex;
place-content: center;
flex-direction: column;

h3 {
    
    text-align: center;
    background-color:blueviolet;
    color: white;
    border: solid 2px rgb(64, 18, 107);
    text-shadow: 1px 1px black;
}
`;

export const Form = styled.form`
max-width: 100%;
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
padding: 10px;
border-radius:5px;
margin-top: 10px;
border: 1px solid #b8b8b8;
:focus {
    border: 1px solid blueviolet;
    outline: none;
}

`;

export const Textarea = styled.textarea`
padding: 10px;
border-radius:5px;
margin-top: 10px;
border: 1px solid #b8b8b8;
:focus {
    border: 1px solid blue;
    outline: none;
}

`;

export const Button = styled.button`
height: 30px;
outline: none;
font-size: 14px;
font-family:'Noto Sans KR', sans-serif;
border-radius: 5px;
margin-top: 10px;
background-color: rgb(206, 123, 206);
color: rgb(59, 3, 59);
box-shadow: 0 5px 0 rgb(114, 20, 114); ;

:hover{
    background-color: rgb(156, 90, 156);
    color: rgb(59, 3, 59);
    box-shadow: 0 5px 0 rgb(61, 10, 61) ;
}
:active{
position:relative;
    top: 5px;
    box-shadow:none;
    
}
`;

export const Span = styled.span`
margin: 0 auto;
color: red;
font-size:18px;
text-align: left;
`;