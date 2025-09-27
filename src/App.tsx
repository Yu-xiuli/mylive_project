import { lazy, Suspense, useCallback, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { RouteItem, RouterList } from "@/router/index";
import Navigate from "@/components/navigate";

function App() {
  const [activeNav, setActiveNav] = useState<string>("首页");
  const renderRoute = useCallback((routeParam: RouteItem) => {
    const Component = lazy(routeParam.ac);
    return (
      <Route
        key={routeParam.path}
        path={routeParam.path}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        }
      />
    );
  }, []);

  return (
    <HomeWrapper>
      <GlobalStyle />
      <div className="home_top">
        <div style={{ height: "40px" }} />
        <div className="home_top_title">
          <img src={require("@/imgs/home.jpg")} alt="" />
          <span>于平凡生活中记录美好</span>
        </div>
      </div>
      <Router>
        <div className="home_bottom">
          <div className="home_left">
            {RouterList.map((item: RouteItem) => (
              <Navigate
                key={item.path}
                url={item.path}
                title={item.title}
                className={item.title === activeNav ? "is_active" : ""}
                onChange={setActiveNav}
              />
            ))}
          </div>
          <div className="home_content">
            <Routes>
              {RouterList.map((item: RouteItem) => {
                return renderRoute(item);
              })}
            </Routes>
          </div>
        </div>
      </Router>
    </HomeWrapper>
  );
}

export default App;

const HomeWrapper = styled.div`
  min-width: 1280px;
  width: calc(100vw);
  height: calc(100vh);
  background-image: url(${require("@/imgs/home_bg2.jpg")});
  background-size: cover;
  font-family: cursive;

  @media screen and (max-width: 1280px) {
    height: calc(100vh - 16px) !important;

    .home_bottom {
      height: calc(100vh - 116px) !important;
    }
  }

  @media screen and (min-width: 1400px) {
    .home_bottom {
      width: 1300px !important;
      height: 800px !important;
      margin: auto;
    }
    .home_top {
      width: 1300px !important;
      margin: auto;
    }
  }

  @media screen and (max-height: 940px) {
    height: 1000px !important;

    .home_bottom {
      height: 800px !important;
    }
  }

  .home_top {
    width: 100%;
    padding: 0 50px;

    .home_top_title {
      height: 60px;
      /* background-color: rgba(255, 255, 255, 0.9); */
      line-height: 60px;
      font-size: 28px;
      color: #2072bb;
      font-weight: bold;
      border-radius: 10px;
      padding-left: 40px;
      display: flex;
      align-items: center;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      span {
        margin-left: 15px;
      }
    }
  }
  .home_bottom {
    width: 100%;
    height: calc(100vh - 100px);
    padding: 18px 50px 100px 50px;
    display: flex;
    .home_left {
      display: flex;
      width: 120px;
      height: 100%;
      border-radius: 10px;
      flex-direction: column;

      > div:not(:first-child) {
        margin-top: 20px;
      }
      // active tab
      .is_active {
        position: relative;
        color: rgb(255, 117, 0);
        background-color: rgba(255, 117, 0, 0.2);
        &::after {
          content: "";
          width: 21px;
          height: 10px;
          position: absolute;
          right: -20px;
          top: 21px;
          background-color: rgba(255, 117, 0, 0.2);
        }
      }
    }
    .home_content {
      width: calc(100% - 120px);
      height: 100%;
      margin-left: 20px;
      padding: 30px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0 !important;
    div{
      box-sizing: border-box;
    }
  }
`;
