import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigate = ({
  url,
  title,
  className = "",
  onChange,
}: {
  url: string;
  title: string;
  className?: string;
  onChange?: (tab: string) => void;
}) => {
  const navigate = useNavigate();

  return (
    <NavWrapper
      className={className}
      onClick={() => {
        navigate(url);
        onChange && onChange(title);
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
  background: rgb(232 241 253);
  color: #719be0;
  border-radius: 25px;
  cursor: pointer;
`;
