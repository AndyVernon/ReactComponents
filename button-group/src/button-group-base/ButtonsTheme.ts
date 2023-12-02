import { createTheme } from "@mui/material";

const ButtonsTheme = createTheme({
    components: {
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    border: 'none',
                    fontSize: '16px'
                },
                firstButton: {
                    border: '1px solid #000',
                    marginRight: '8px',
                    borderRadius: '4px'
                },
                middleButton: {
                    border: '1px solid #000',
                    marginRight: '8px',
                    borderRadius: '4px'
                },
                lastButton: {
                    border: '1px solid #000',
                    borderRadius: '4px'
                }
            }
        }
    }
});

export default ButtonsTheme;