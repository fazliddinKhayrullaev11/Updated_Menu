import React from "react";
import { Container,Title,Box,Description } from "./StateStyle.jsx";


class StyledComp extends React.Component{




    render(){


        return(
          <Container>
              {/* <Title>Styled Components</Title> */}
               <Box tc='white' bg='red' type='large'>Large</Box>
               <Box tc='yellow' bg='black '  type='medium'>Medium</Box>
               <Box tc='blue' bg='white' type='small'>Small</Box>
               <Title>HI</Title>
               <Description left>Description1</Description>
               <Description state='left'>Description2</Description>
                
                 
            </Container>

        );
    }





}
export default StyledComp