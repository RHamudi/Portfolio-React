import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  color: white;

  ul {
    display: flex;
    list-style: none;
    gap: 20px;

    a {
        color: white;
    }

    li {
      text-decoration: none;
      font-weight: 500;
      color: #fff;
      transition: all 0.2s ease;
      display: inline-block;
      position: relative;

      &::before {
        content: "";
        width: 0;
        background-color: #fff;
        height: 0.2rem;
        position: absolute;
        bottom: -3px;
        transition: all 0.2s ease;
        left: -2.5px;
      }

      &:hover::before {
        width: 110%;
      }

    }
  }
`;
