import React, { useState } from 'react';
import { Button, Container, ThemeProvider } from '@mui/material';
import { ButtonGroup } from '@mui/material'
import { ButtonsProps } from './Buttons.types';
import ButtonsTheme from './ButtonsTheme'
import BemIt from '../bem-it/BemItButtonGroup';
import './Buttons.scss';

const Buttons = (props: ButtonsProps) => {

    const [selectedButton, setSelectedButton] = useState<number>(0);

    const bem = new BemIt('ButtonGroup');

    const handleClick = (index: number) => {
        setSelectedButton(index);
    }

    return (
        <Container className={bem.out} fixed>
            <ThemeProvider theme={ButtonsTheme}>
                <ButtonGroup>
                    <Button 
                        className={bem.el('button').out} 
                        onClick={() => handleClick(1)}>
                            Button 1
                    </Button>
                    <Button 
                        className={bem.el('button').out}
                        onClick={() => handleClick(2)}>
                            Button 2
                    </Button>
                    <Button 
                        className={bem.el('button').out}
                        onClick={() => handleClick(3)}>
                            Button 3
                    </Button>
                </ButtonGroup>
            </ThemeProvider>
            <div>
                {selectedButton} is selected
            </div>
        </Container>
    )
}

export default Buttons;