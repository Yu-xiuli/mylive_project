import styled from "styled-components";
// import cn from "classnames";
// import { useEffect, useMemo } from "react";
import Carousel from "./carousel.jsx";

const Home = () => {
  const images = [
    {
      imgIdx: "1",
      info: "确切的说，这是进山的第一站，也是我第一次直观、近距离的接触山里村民的生活。不得不说，身处这种依山傍水，风景如画的地方，真的能让人忘记城市的喧嚣，全身心都变得清明了。入夜以后满天繁星点点，世界都变得浪漫起来。",
    },
    {
      imgIdx: "12",
      info: "随着海拔慢慢的升高，视野渐渐变得开阔起来，从前遥远的云朵，此刻仿佛就在头顶，一大团一大团的，让人总想伸手去够个试试。书本上总是喜欢用层峦叠翠来形容山，如今我才算是真的领略了。",
    },
    {
      imgIdx: "14",
      info: "泸定是318的必经之地，也是先辈们为革命事业献身的壮烈之地。远远的看到泸定桥，内心不禁感慨万千。光是看到这桥横跨两座山，就已经想到当年的不易。",
    },
    {
      imgIdx: "15",
      info: "入藏之后路边总是能看见很多石头堆起来的石头塔，仔细查了资料发现，这是藏民们为了祈求平安，保佑家人而建的。藏区的石堆也可以作为路标，表示这条路可以走。",
    },
    {
      imgIdx: "22",
      info: "高原上最常见的就是牦牛，因为气候原因它们有着厚厚的皮毛，可以抵御高原的寒冷，牦牛肉也是藏区的主要食物来源。听说藏民们还把它们当作交通工具，不过，我还没见过。",
    },
    {
      imgIdx: "34",
      info: "察尔汗盐湖是亚洲第一，世界第二大盐湖，盛产钾盐、食盐，还有镁、锂、硼、碘等多种矿产。因为湖水呈浅绿色，可以清晰的倒映出天空和白云，所以又叫'天空之镜'，晴天的时候去看极为壮观。可惜我去的时候正赶上阴天，只能看见湖水原本的颜色，不过也足够新奇美丽了。",
    },
  ];

  return (
    <HomeContainer>
      <div className="home_pics">
        <div className={"home_content_box"}>
          <Carousel images={images} autoPlay={true} interval={4000} />
        </div>
        <div className={"home_content_center"}>
          <dt>美好不是一场需要盛装出席的盛宴，而是一种专注的凝视。</dt>
          <dt>当你愿意为一片云的形状驻足，为一句寻常的关怀感动，</dt>
          <dt>生活便会向你展现它最朴素也最珍贵的质地——</dt>
          <dt>如同掌心里一块被体温捂暖的卵石，不耀眼，却实在、恒久。</dt>
          <dt>记录它们，或许是我对平淡生活最温柔的反抗。</dt>
        </div>
        <div className={"home_content_box"}></div>
      </div>
      {/* <Map style={{ marginTop: "180px" }} />
      <div className="home_pics">
        <div className="home_pics_right"></div>
        <div className="home_pics_right"></div>
        <div className="home_pics_right"></div>
      </div> */}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100%);
  .home_pics {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .home_content_box {
      flex: 1;
      border: 1px solid blue;
    }
    .home_content_center {
      width: 100%;
      height: 190px;
      padding: 15px 0;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
