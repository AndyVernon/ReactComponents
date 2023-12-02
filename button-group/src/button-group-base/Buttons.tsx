import React from 'react';
import { Button, Container, ThemeProvider } from '@mui/material';
import { ButtonGroup } from '@mui/material'
import { ButtonsProps } from './Buttons.types';
import ButtonsTheme from './ButtonsTheme'
import BemIt from '../bem-it/BemItButtonGroup';
import './Buttons.scss';

const Buttons = (props: ButtonsProps) => {

    const bem = new BemIt('ButtonGroup');

    return (
        <Container className={bem.out} fixed>
            <ThemeProvider theme={ButtonsTheme}>
                <ButtonGroup>
                    <Button className={bem.el('button').out}>Button 1</Button>
                    <Button className={bem.el('button').out}>Button 2</Button>
                    <Button className={bem.el('button').out}>Button 3</Button>
                </ButtonGroup>
            </ThemeProvider>
        </Container>
    )
}

export default Buttons;