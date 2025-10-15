import Map from "@/components/map";
import styled from "styled-components";
import cn from 'classnames';

const Travel = () => {
  return (
    <TravelContainer>
      有时间要去看看祖国的大好河山！
      <div className="travel_map">
        <Map />
      </div>
      <div className="travel_picContent">
        <div className="travel_picWall">hahahha</div>
        <div className={cn("travel_picWall",'travel_pickWall_right')}>hahahhaha</div>
      </div>
      <div className="travel_picContent">
        <div className="travel_picWall">xiixixiixixi</div>
        <div className={cn("travel_picWall",'travel_pickWall_right')}>hahahhaha</div>
      </div>
    </TravelContainer>
  );
};

export default Travel;

const TravelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  .travel_map {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -200px;
  }
  .travel_picContent {
    flex: 1;
    display: flex;
    .travel_picWall {
      flex: 1;
      border: 1px solid #ccc;
    }
    .travel_pickWall_right{
      text-align: right;
    }
  }
`;
