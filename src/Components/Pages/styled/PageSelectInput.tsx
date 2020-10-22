import styled from 'styled-components';

const PageSelectInput = styled.input<{ showMultiple: boolean }>`
    position:relative;
    bottom:20px;
    margin-left:55px;
    width:30px;
    padding:5px
    background:#fff;
    display:${(props) => (props.showMultiple ? 'block' : 'none')};
 `;
export default PageSelectInput;
