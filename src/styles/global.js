import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';


const globalStyles = () => injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
  }
`;


export default globalStyles;
