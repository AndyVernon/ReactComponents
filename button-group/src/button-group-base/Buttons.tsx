import React from 'react';
import { Button, Container } from '@mui/material';
import { ButtonGroup } from '@mui/material'
import { ButtonsProps } from './Buttons.types';
import './Buttons.scss';

const Buttons = (props: ButtonsProps) => {
    return (
        <Container className='ButtonGroup' fixed>
           Button Group
           <ButtonGroup>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            

           </ButtonGroup>
        </Container>
    )
}

export default Buttons;