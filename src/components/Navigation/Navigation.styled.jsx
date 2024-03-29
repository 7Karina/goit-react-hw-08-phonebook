import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #5690e6;
  font-size: 20px;

  &:hover {
    color: #12a76e;
  }
`;
