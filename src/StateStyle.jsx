import styled, { css } from "styled-components";



 export   const Container =styled('div') `
 
 
 display:flex;
background:coral;
color:blue;
/* justify-content:center;
align-items:center; */
width:100%;
padding:20px;
margin:200px;
 
 `;
const common = css`
    
    color:green;
font-family:bold;
font-weight:400;
padding:10px;
border:1px solid black;
height:fit-content;
background-color:red;
font-size:20px;
`;
 export const Title =styled.h1`
${common}

 
 
 
 `;
  export const Description =styled.h1`
${common}

font-size:12px;
color:${({left})=>left? 'blue' :'white'}
 
 
 
 `;
    const getSize=(props)=>{
    switch(props.type){
        case 'large':return '200px';
        case 'medium':return '150px';
        case 'small':return '100px';
        default :
        return '150px'

    }

    };
    const getColor=(props)=>{
        switch(props.type){
            case 'large':return 'white';
            case 'medium':return 'green';
            case 'small':return 'yellow';
            default :
            return 'red'
    
        }
    
        };
   export const Box=styled.div`
  width:${getSize};
  height:${getSize};

  border: 2px solid blue;
  margin:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:${(props)=>props.tc};
  /* background-color:${getColor}; */
  background:${(props)=>props.bg};
  font-size:18px;

 
 
 
 `;

