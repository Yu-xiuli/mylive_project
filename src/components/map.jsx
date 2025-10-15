import { useEffect, useMemo, useRef } from "react";
import echarts from "echarts";
import "echarts/map/js/china";

const HighLightAreaList = [
  "西藏",
  "四川",
  "重庆",
  "湖北",
  "上海",
  "浙江",
  "江苏",
  "安徽",
  "江西",
  "山东",
  "河南",
  "陕西",
  "青海",
  "河北",
  "天津",
  "北京",
];
const CommonAreaItemStyle = {
  selected: true,
  itemStyle: {
    areaColor: "red",
    color: "red",
  },
};

const Map = ({ style = {} }) => {
  const mapChartRef = useRef();

  const defaultHighLightAreas = useMemo(() => {
    return HighLightAreaList.map((item) => ({
      ...CommonAreaItemStyle,
      name: item,
    }));
  }, []);

  useEffect(() => {
    if (mapChartRef.current) {
      var myChart = echarts.init(mapChartRef.current);
      var option = {
        tooltip: {
          show: false,
        },
        grid: {
          // show: true,
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          containLabel: true,
        },
        // title: {
        //   text: "世界这么大，\n我要去看看🏃‍♂️",
        //   padding: [25, 0, 0, 150],
        //   textStyle: {
        //     lineHeight: 20,
        //     color: "#1b1b1b",
        //     fontSize: 20,
        //     fontWeight: 400,
        //     fontFamily: "cursive",
        //   },
        // },
        geo: {
          // 地理坐标系组件，用于显示中国地图的地理位置信息
          map: "china",
          label: {
            emphasis: {
              show: true,
            },
          },
          roam: false, // 是否允许缩放和平移漫游
          zoom: 1.2,
          itemStyle: {
            normal: {
              areaColor: "#fdf9152d",
              // borderColor: "#111",
            },
            emphasis: {
              // areaColor: "#2a333d",
              areaColor: "#fdf9155f",
            },
          },
          regions: defaultHighLightAreas,
        },
        series: [
          {
            name: "散点图",
            type: "scatter", // 使用散点图类型
            coordinateSystem: "geo", // 指定使用地理坐标系
            data: [
              // 经纬度数据，注意顺序是[经度, 纬度]
              { name: "北京", value: [116.46, 39.92] },
              { name: "上海", value: [121.47, 31.23] },
              { name: "河北", value: [115.01, 37.97] },
              { name: "安徽", value: [117.18, 31.52] },
              { name: "重庆", value: [106.33, 29.35] },
              { name: "江苏", value: [118.5, 32.2] },
              { name: "浙江", value: [120.1, 30.2] },
              { name: "江西", value: [115.27, 28.4] },
              { name: "山东", value: [119.0, 35.54] },
              { name: "河南", value: [113.4, 34.46] },
              { name: "湖北", value: [114.17, 30.35] },
              { name: "四川", value: [104.04, 30.4] },
              { name: "西藏", value: [91.08, 29.39] },
              { name: "青海", value: [100.48, 36.38] },
              { name: "陕西", value: [108.57, 34.17] },
              { name: "天津", value: [117.12, 39.02] },
            ],
            symbol: "image://" + require("@/imgs/star.png"),
            symbolSize: 15,
            label: {
              show: false,
              emphasis: {
                show: false, // 高亮时是否显示数据标签
              },
            },
          },
        ],
      };

      myChart.setOption(option);
    }
  }, [defaultHighLightAreas]);

  return (
    <div
      ref={mapChartRef}
      style={{
        width: "400px",
        height: "300px",
        ...(style || {}),
      }}
    ></div>
  );
};

export default Map;
