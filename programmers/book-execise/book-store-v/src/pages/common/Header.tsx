import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Header</h1>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  background-color: #333;
  
  h1 {
    color: #FFFFFF
  }
`;

export default Header;

