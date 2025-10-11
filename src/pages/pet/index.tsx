import { Tabs } from "antd";
import { useMemo } from "react";
import styled from "styled-components";
import Snowball from "./snowball";

const Pet = () => {
  const tablist = useMemo(() => {
    return [
      {
        label: "雪球",
        key: "1",
        children: <Snowball />,
      },
      {
        label: "团子",
        key: "2",
        children: "Content of Tab Pane 2",
      },
      {
        label: "咪咪",
        key: "3",
        children: "Content of Tab Pane 3",
      },
    ];
  }, []);

  return (
    <ContainerWtapper>
      <Tabs
        defaultActiveKey="1"
        items={tablist}
        onChange={() => {}}
        type="card"
      />
    </ContainerWtapper>
  );
};

export default Pet;

const ContainerWtapper = styled.div`
  .ant-tabs-nav {
    &::before {
      border: 0 !important;
    }
    .ant-tabs-nav-wrap {
      .ant-tabs-nav-list {
        & > div:not(:first-child) {
          margin-left: 10px !important;
        }
        // tab item
        .ant-tabs-tab {
          width: 80px;
          height: 36px;
          padding: 6px 0;
          line-height: 36px;
          font-size: 20px;
          background: none !important;
          border-radius: 8px !important;
          border: 1px solid rgb(238, 238, 238) !important;
          .ant-tabs-tab-btn {
            width: 100%;
            text-align: center;
            border-radius: 8px !important;
            color: rgb(85, 85, 85) !important;
          }
          &.ant-tabs-tab-active {
            border: 1px solid rgb(255, 117, 0) !important;
            .ant-tabs-tab-btn {
              color: rgb(255, 117, 0) !important;
            }
          }
        }
      }
    }
  }
`;
