import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigate = ({ url, title }: { url: string; title: string }) => {
  const navigate = useNavigate();

  return (
    <NavWrapper
      onClick={() => {
        navigate(url);
      }}
    >
      {title}
    </NavWrapper>
  );
};

export default Navigate;

const NavWrapper = styled.div`
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: rgba(68, 196, 242, 0.2);
    color: #F5F1E6;
    border-radius: 6px;
  }
`;
