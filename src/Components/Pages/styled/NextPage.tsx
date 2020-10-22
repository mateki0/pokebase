import styled from 'styled-components';
import { MdChevronRight } from 'react-icons/md';

const NextPage = styled(MdChevronRight)`
  margin-top: 4px;
  padding: 0;
  font-size: 34px;
  transition: color 0.5s;
  &:hover {
    color: #e6001f;
  }
`;

export default NextPage;
