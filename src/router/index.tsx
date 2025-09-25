import { HOME, PET, TRAVEL, LIVE } from "@/config/routePath";

export interface RouteItem {
  title: string;
  path: string;
  ac: () => Promise<any>;
  routes?: RouteItem[];
}

export const RouterList: RouteItem[] = [
  {
    title: "首页",
    path: HOME,
    ac: () => import("@/pages/home"),
  },
  {
    title: "爱宠",
    path: PET,
    ac: () => import("@/pages/pet"),
    // routes: [
    //   {
    //     title: "雪球",
    //     path: PET_SNOWBALL,
    //     ac: () => import("@/pages/pet/snowball"),
    //   },
    //   {
    //     title: "团子",
    //     path: PET_DUMPLING,
    //     ac: () => import("@/pages/pet/dumpling"),
    //   },
    //   {
    //     title: "咪咪",
    //     path: PET_MIMI,
    //     ac: () => import("@/pages/pet/mimi"),
    //   },
    // ],
  },
  {
    title: "旅行",
    path: TRAVEL,
    ac: () => import("@/pages/travel"),
  },
  {
    title: "生活",
    path: LIVE,
    ac: () => import("@/pages/live"),
  },
];
