import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Helvetica', sans-serif;
        font-weight: 400;
    }

    html,
    body,
    #root {
        height: 100vh;
        width: 100%;
    }
    
    #root {
        display: flex;
    }
`

export const defaultTheme = {
    // Colors:
    orangeLuna: `E47D31`,

    // Sizes
    controlHeight: '40px',
    controlHeightMini: '24px',
    controlHeightSmall: '32px',
    controlHeightLarge: '48px',
    spaceXXS: '4px',
    spaceXS: '8px',
    spaceS: '16px',
    spaceM: '24px',
    spaceL: '32px',
    spaceXL: '48px',
    spaceXXL: '220px',

    // Text Size
    textSizeXXL: '30px',
    textSizeXL: '24px',
    textSizeL: '22px',
    textSizeM: '15px',
    textSizeDefault: "16px",
    textSizeS: '12px',

    // Text Weight
    textWeightThin: '300',
    textWeightRegular: '400',
    textWeightMedium: '500',
    textWeightBold: '700'
}


