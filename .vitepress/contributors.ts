export interface WikiContributor {
  /**
   * 贡献者的显示名称
   */
  name: string;
  /**
   * 贡献者的 GitHub 用户名
   *
   * 如果没有配置 links 和 avatar，网站将根据这个属性生成链接和头像
   */
  username: string;
  /**
   * 名称别名
   *
   * 主要针对多个账号属于同一个人的情况
   */
  mapByNameAliases?: string[];
  /**
   * 邮箱别名
   *
   * 主要针对多个账号属于同一个人的情况
   */
  mapByEmailAliases?: string[];
  /**
   * 主页
   *
   * 可以连接到个人主页，如果不填，默认使用 GitHub 主页
   */
  links?: string[];
}

export const wikiContributors: WikiContributor[] = [
  {
    name: "Northword",
    username: "northword",
    mapByNameAliases: ["northword"],
    mapByEmailAliases: ["44738481+northword@users.noreply.github.com"],
  },
  {
    name: "Chikit-L",
    username: "Chikit-L",
    mapByNameAliases: ["Chikit_L", "Chikit"],
  },
  {
    name: "l0o0",
    username: "l0o0",
  },
  {
    name: "阿狸",
    username: "Comte0825",
    mapByNameAliases: ["Comte0825", "Ali"],
  },
  {
    name: "Maple-YZ",
    username: "Maple-YZ",
  },
  {
    name: "jiaojiaodubai",
    username: "jiaojiaodubai",
  },
  {
    name: "可口可乐",
    username: "wakewon",
    mapByNameAliases: ["Victor", "wakewon"],
  },
  {
    name: "syt2",
    username: "syt2",
  },
  {
    name: "windingwind",
    username: "windingwind",
    mapByNameAliases: ["winding"],
  },
  {
    name: "X木林森 Z2.3",
    username: "MoYuXianR",
    mapByNameAliases: ["MoYuXianR"],
  },
  {
    name: "zepinglee",
    username: "zepinglee",
  },
];
