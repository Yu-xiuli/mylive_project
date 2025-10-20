import Map from "@/components/map";
import Flip from "@/components/picFlip";
import styled from "styled-components";
import cn from "classnames";
// import { KeepAlive, useActivate, useUnactivate } from "react-activation";

const Travel = () => {
  // useActivate(() => {
  //   console.log("页面被激活（显示）: 进入时刷新数据");
  // });

  // // 组件失活时调用（从该组件跳出，但未卸载），类似 componentWillPause
  // useUnactivate(() => {
  //   console.log("页面被隐藏但未卸载: 退出时保存状态");
  // });

  return (
    // <KeepAlive id="pet">
      <TravelContainer>
        <div className="travel_picContent">
          <div className={cn("travel_rows", "first_row")}>
            <div>
              <Flip
                beforeContent={
                  <Img src={require("@/imgs/travel/travel_3.jpg")} alt="" />
                }
                afterContent={<>恩施-小溪古村落，好像世外桃源的入口。</>}
              />
            </div>
            <div>
              <Flex>
                <Flip
                  beforeContent={
                    <Img src={require("@/imgs/travel/travel_4.jpg")} alt="" />
                  }
                  afterContent={<>仙气飘飘的原野。</>}
                />
                <Flex direction="row">
                  <Flip
                    beforeContent={
                      <Img
                        src={require("@/imgs/travel/travel_10.jpg")}
                        alt=""
                      />
                    }
                    afterContent={<>在蜿蜒盘曲的山路上行驶。</>}
                  />
                  <Flip
                    beforeContent={
                      <Img
                        src={require("@/imgs/travel/travel_13.jpg")}
                        alt=""
                      />
                    }
                    afterContent={
                      <>在泸定休息，打开车门呼吸清新的空气，眺望远方景色。</>
                    }
                  />
                </Flex>
              </Flex>
            </div>
            <div>
              <Flip
                beforeContent={
                  <Img src={require("@/imgs/travel/travel_30.jpg")} alt="" />
                }
                afterContent={<>波密——江边、小曲、夕阳、散步。</>}
              />
            </div>
            <div>
              <Flex>
                <Flex direction="row">
                  <Flip
                    beforeContent={
                      <Img
                        src={require("@/imgs/travel/travel_34.jpg")}
                        alt=""
                      />
                    }
                    afterContent={<>在察尔汗盐湖捧一捧盐。</>}
                  />
                  <Flip
                    beforeContent={
                      <Img
                        src={require("@/imgs/travel/travel_25.jpg")}
                        alt=""
                      />
                    }
                    afterContent={<>高原上的场景。</>}
                  />
                </Flex>
                <Flex>
                  <Flip
                    beforeContent={
                      <Img src={require("@/imgs/travel/5.jpg")} alt="" />
                    }
                    afterContent={<>合肥的小岭南花海。</>}
                  />
                </Flex>
              </Flex>
            </div>
            <div>
              <Flip
                beforeContent={
                  <Img src={require("@/imgs/travel/14.jpg")} alt="" />
                }
                afterContent={<>烈士陵园的石碑。</>}
              />
            </div>
          </div>
          <div className={cn("travel_rows", "second_row")}>
            <div>
              <Flex>
                <Flip
                  beforeContent={
                    <Img src={require("@/imgs/travel/9.jpg")} alt="" />
                  }
                  afterContent={<>西安不夜城的演出。</>}
                />
                <Flip
                  beforeContent={
                    <Img src={require("@/imgs/travel/10.jpg")} alt="" />
                  }
                  afterContent={<>西安秦始皇兵马俑博物馆里的兵马俑像。</>}
                />
              </Flex>
            </div>
            <div>
              <Flip
                beforeContent={
                  <Img src={require("@/imgs/travel/13.jpg")} alt="" />
                }
                afterContent={<>南昌网红铛铛车。</>}
              />
            </div>
            <div>
              <Map />
            </div>
            <div>
              <Flip
                beforeContent={
                  <Img src={require("@/imgs/travel/travel_5.jpg")} alt="" />
                }
                afterContent={<>杭州动物园里正在休息的熊猫。</>}
              />
            </div>
            <div>
              <Flex>
                <Flex direction="row">
                  <Flip
                    beforeContent={
                      <Img src={require("@/imgs/travel/12.jpg")} alt="" />
                    }
                    afterContent={<>李白笔下的庐山真面目，雨后更为壮观。</>}
                  />{" "}
                  <Flip
                    beforeContent={
                      <Img
                        src={require("@/imgs/travel/travel_16.jpg")}
                        alt=""
                      />
                    }
                    afterContent={
                      <>
                        四川折多山，由于海拔较高，山顶的气温低，山顶有积雪覆盖。
                      </>
                    }
                  />
                </Flex>
                <Flex direction="row">
                  <Flip
                    beforeContent={
                      <Img src={require("@/imgs/travel/11.jpg")} alt="" />
                    }
                    afterContent={<>西安秦始皇雕像。</>}
                  />
                  <Flip
                    beforeContent={
                      <Img src={require("@/imgs/travel/17.jpg")} alt="" />
                    }
                    afterContent={
                      <>江西景德镇-陶瓷博物馆内的“无语菩萨”，其实是沉思罗汉。</>
                    }
                  />
                </Flex>
              </Flex>
            </div>
          </div>
          <div className={cn("travel_rows", "third_row")}>
            <div>
              <Flex>
                <Flip
                  beforeContent={
                    <Img src={require("@/imgs/travel/8.jpg")} alt="" />
                  }
                  afterContent={<>在山东日照看海。</>}
                />
                <Flex direction="row">
                  <Flip
                    beforeContent={
                      <Img
                        src={require("@/imgs/travel/travel_32.jpg")}
                        alt=""
                      />
                    }
                    afterContent={
                      <>在可可西里遇见的野生狼，看见人会主动要吃的。</>
                    }
                  />
                  <Flip
                    beforeContent={
                      <Img
                        src={require("@/imgs/travel/travel_33.jpg")}
                        alt=""
                      />
                    }
                    afterContent={<>昆仑山脉，雪铺在山上，看起来像随变雪糕。</>}
                  />
                </Flex>
              </Flex>
            </div>
            <div>
              <Flip
                beforeContent={
                  <Img src={require("@/imgs/travel/travel_37.jpg")} alt="" />
                }
                afterContent={<>阴天下的天空之境，倒映的也是灰色的镜像。</>}
              />
            </div>
            <div>
              <Flex>
                <Flex direction="row">
                  <Flip
                    beforeContent={
                      <Img src={require("@/imgs/travel/travel_9.jpg")} alt="" />
                    }
                    afterContent={<>重庆的夜景。</>}
                  />
                  <Flip
                    beforeContent={
                      <Img
                        src={require("@/imgs/travel/travel_11.jpg")}
                        alt=""
                      />
                    }
                    afterContent={<>在高原地区膨胀的包装袋。</>}
                  />
                </Flex>
                <Flip
                  beforeContent={
                    <Img src={require("@/imgs/travel/6.jpg")} alt="" />
                  }
                  afterContent={<>安徽黄山上的怪石。</>}
                />
              </Flex>
            </div>
            <div>
              <Flip
                beforeContent={
                  <Img src={require("@/imgs/travel/3.jpg")} alt="" />
                }
                afterContent={<>南京的网红猴子，在水里不敢上岸。</>}
              />
            </div>
            <div>
              <Flip
                beforeContent={
                  <Img src={require("@/imgs/travel/travel_8.jpg")} alt="" />
                }
                afterContent={<>重庆动物园里躺平的熊。</>}
              />
            </div>
          </div>
        </div>
      </TravelContainer>
    // </KeepAlive>
  );
};

export default Travel;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

const Flex = styled.div<{ direction?: "row" | "column" }>`
  display: flex;
  flex-direction: ${(props) => props?.direction || "column"};
  height: 100%;
  gap: 5px;
  > div {
    flex: 1;
  }
`;

const TravelContainer = styled.div`
  height: 100%;

  .travel_picContent {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .travel_rows {
      flex: 1;
      display: grid;
      grid-gap: 5px;
      &.first_row {
        grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
        grid-template-rows: 1fr;
      }
      &.second_row {
        grid-template-columns: 1fr 1fr 2.5fr 1fr 1.5fr;
        grid-template-rows: 1fr;
      }
      &.third_row {
        grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
        grid-template-rows: 1fr;
      }
    }
  }
`;
