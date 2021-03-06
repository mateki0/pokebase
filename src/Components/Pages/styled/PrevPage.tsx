import styled from 'styled-components';
import { MdChevronLeft } from 'react-icons/md';

const PrevPage = styled(MdChevronLeft)`
  margin-top: 4px;
  padding: 0;
  font-size: 34px;
  transition: color 0.5s;
  &:hover {
    color: #003a70;
  }
`;
export default PrevPage;
