import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { RouteType } from "./config";
import Status from "../views/status/danh-sach/index";
import { ViewA } from "../views/view-a/index";
import { AboutView } from "../views/view-b/index";
import StatusAdd from "../views/status/xu-ly/create";
import StatusEdit from "../views/status/xu-ly/edit";
import StatusView from "../views/status/xu-ly/view";
import { Rating } from "../components/Rating";
import LeftTabs from "../components/Rating/src/leftTabs";

const appRoutes: RouteType[] = [
  {
    path: "/account-management",
    element: <Status />,
    state: "Home",
    displayText: "Quản lý tài khoản",
    icon: <DesktopOutlined />,
    child: [
      {
        path: "rating",
        element: <Rating />,
        state: "rating",
        displayText: "Rating",
        hiddenMenu: true,
      },
    ],
  },
  {
    path: "/status",
    state: "status",
    element: <Status />,
    displayText: "Status",
    icon: <FileOutlined />,
    // hiddenMenu:true,
    child: [
      {
        path: "add",
        element: <StatusAdd />,
        state: "status.add",
        displayText: "Add",
        hiddenMenu: true,
      },
      {
        path: "edit/:id",
        element: <StatusEdit />,
        state: "status.edit",
        displayText: "Edit",
        hiddenMenu: true,
      },
      {
        path: "view/:id",
        element: <StatusView />,
        state: "status.view",
        displayText: "view",
        hiddenMenu: true,
      },
    ],
  },
  {
    path: "/component",
    state: "component",
    element: <StatusView />,
    displayText: "Components",
    icon: <PieChartOutlined />,
    child: [
      {
        path: "alert",
        element: <AboutView />,
        state: "component.alert",
        displayText: "Alert",
      },
      {
        path: "button",
        element: <Status />,
        state: "component.button",
        displayText: "Button",
      },
    ],
  },
  {
    path: "/documentation",
    element: <ViewA />,
    state: "documentation",
    displayText: "Documentation",
    icon: <TeamOutlined />,
  },
  {
    path: "/changelog",
    element: <LeftTabs />,
    state: "changelog",
    displayText: "Changelog",
    icon: <UserOutlined />,
  },
  {
    path: "/profile",
    element: <></>,
    state: "profile",
    displayText: "Trang cá nhân",
    hiddenMenu: true,
    child: [
      {
        path: "edit",
        element: <></>,
        state: "edit_profile",
        displayText: "Sửa trang cá nhân",
        hiddenMenu: true,
      },
    ],
  },
  {
    path: "/avatar",
    element: <></>,
    state: "avatar",
    displayText: "Ảnh đại diện",
    hiddenMenu: true,
  },
  {
    path: "/change_password",
    element: <></>,
    state: "change_password",
    displayText: "Đổi mật khẩu",
    hiddenMenu: true,
  },
];

export default appRoutes;
