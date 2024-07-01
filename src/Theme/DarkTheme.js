const { createTheme } = require("@mui/material");

export const darkTheme=createTheme({
    palette:{
        mode:'dark',
        primary:{
            main:'#8B0000',
        },
        secondary:{
            main:'#5A20CB',
        },
        black:{
            main:'#0D0D0D',
        },
        background:{
            main:'#000000',
            default:'#0D0D0D',
            paper:'#0D0D0D',
        },
        textColor:{
            main:'#111111',
        },

    }

})
