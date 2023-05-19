
const data = [
  {
    id: 7,
    text: "酒店入驻管理",
    urlpath: "/settle",
    permissions:
      '["HotelCheckInManagementJT:create","HotelCheckInManagementJT:edit"]',
    meta: {
      icon: "icon-jiudian",
      title: "酒店入驻管理",
    },
    isSubmenu: false,
  },
  {
    id: 12,
    text: "权限管理",
    urlpath: "/3",
    permissions: "",
    children: [
      {
        id: 24,
        parentid: 12,
        text: "角色管理",
        urlpath: "/authority/role",
        permissions:
          '["RoleManagement:view","RoleManagement:create","RoleManagement:edit"]',
        meta: {
          title: "角色管理",
        },
        isSubmenu: true,
      },
      {
        id: 25,
        parentid: 12,
        text: "用户管理",
        urlpath: "/authority/user",
        permissions:
          '["UserManagement:view","UserManagement:create","UserManagement:edit"]',
        meta: {
          title: "用户管理",
        },
        isSubmenu: true,
      },
    ],
    meta: {
      icon: "icon-quanxian",
      title: "权限管理",
    },
    isSubmenu: false,
  },
  {
    id: 1,
    text: "资料管理",
    urlpath: "/datum",
    permissions:
      '["DataManagement:view","DataManagement:create","DataManagement:edit","DataManagement:publish"]',
    meta: {
      icon: "icon-ziliaoku",
      title: "资料管理",
    },
    isSubmenu: false,
  },
  {
    id: 2,
    text: "活动管理",
    urlpath: "/1",
    permissions: "",
    children: [
      {
        id: 14,
        parentid: 2,
        text: "活动处理",
        urlpath: "/activity/handle",
        permissions:
          '["ActivityProcessing:view","ActivityProcessing:create","ActivityProcessing:edit","ActivityProcessing:publish","ActivityProcessing:off"]',
        meta: {
          title: "活动处理",
        },
        isSubmenu: true,
      },
      {
        id: 13,
        parentid: 2,
        text: "八大支柱处理",
        urlpath: "/activity/eight",
        permissions:
          '["EightTypeManaget:view","EightTypeManaget:create","EightTypeManaget:edit","EightTypeManaget:publish","EightTypeManaget:off"]',
        meta: {
          title: "八大支柱处理",
        },
        isSubmenu: true,
      },
    ],
    meta: {
      icon: "icon-huodong",
      title: "活动管理",
    },
    isSubmenu: false,
  },
  {
    id: 3,
    text: "打卡管理",
    urlpath: "/2",
    permissions: "",
    children: [
      {
        id: 15,
        parentid: 3,
        text: "打卡处理",
        urlpath: "/sign/handle",
        permissions:
          '["ClockInProcessing:view","ClockInProcessing:real","ClockInProcessing:content"]',
        meta: {
          title: "打卡处理",
        },
        isSubmenu: true,
      },
      {
        id: 16,
        parentid: 3,
        text: "评论处理",
        urlpath: "/sign/comment",
        permissions: '["CommentProcessing:view","CommentProcessing:content"]',
        meta: {
          title: "评论处理",
        },
        isSubmenu: true,
      },
    ],
    meta: {
      icon: "icon-kaoqindaka",
      title: "打卡管理",
    },
    isSubmenu: false,
  },
  {
    id: 4,
    text: "客户管理",
    urlpath: "/customer",
    permissions:
      '["CustomerManagement:view","CustomerManagement:create","CustomerManagement:edit"]',
    meta: {
      icon: "icon-kehu",
      title: "客户管理",
    },
    isSubmenu: false,
  },
  {
    id: 11,
    text: "排名查看",
    urlpath: "/rank",
    permissions: '["RankingView:view","RankingView:create","RankingView:edit"]',
    meta: {
      icon: "icon-paimingbiaoqian",
      title: "排名查看",
    },
    isSubmenu: false,
  },
];

export default data;