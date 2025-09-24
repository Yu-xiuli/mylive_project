import {
  HOME,
  PET,
  PET_SNOWBALL,
  PET_DUMPLING,
  PET_MIMI,
} from "@/config/index";

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
    title: "宠物",
    path: PET,
    ac: () => import("@/pages/home"),
    routes: [
      {
        title: "雪球",
        path: PET_SNOWBALL,
        ac: () => import("@/pages/pet/snowball"),
      },
      {
        title: "团子",
        path: PET_DUMPLING,
        ac: () => import("@/pages/pet/dumpling"),
      },
      {
        title: "咪咪",
        path: PET_MIMI,
        ac: () => import("@/pages/pet/mimi"),
      },
    ],
  },
  {
    title: "散步",
    path: HOME,
    ac: () => import("@/pages/home"),
  },
];
