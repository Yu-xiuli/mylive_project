import styled from "styled-components";
import { PetList, PetlListItem } from "@/config/petConfig";

const PetCard = ({ petInfo }: { petInfo: PetList[] }) => {
  return (
    <ContainerWtapper>
      {petInfo.map((info: PetList) => {
        return (
          <div className="snowball_card">
            {info.list.map((item: PetlListItem) =>
              !item?.isBlack ? (
                <div className="snowball_card_item">
                  <img src={item.img} alt="" style={item?.sizeStyle || {}} />
                  <div>{item.desc}</div>
                </div>
              ) : (
                <div className="snowball_card_item_black" />
              )
            )}
          </div>
        );
      })}
    </ContainerWtapper>
  );
};

export default PetCard;

const ContainerWtapper = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-family: cursive;
  height: 610px;
  overflow-y: scroll;

  .snowball_card {
    width: 100%;
    height: 220px;
    overflow: hidden;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .snowball_card_item {
      border: 1px solid #d9d9d9;
      flex: 1;
      height: 100%;
      border-radius: 8px;
      padding: 10px 7px 10px 10px;
      text-indent: 40px;
      img {
        width: 120px;
        height: 150px;
        float: left;
        margin: 0 10px 5px 0;
        border-radius: 4px;
      }
    }
    .snowball_card_item_black {
      width: 20px;
      height: 100%;
    }
  }
`;
