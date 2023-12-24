export interface IProfileItem {
  id: number;
  name: string;
  path: string;
  page: string;
  icon: string;
}

export interface ISidebar {
  activeTab: string;
  onTabClick: (page: string) => void;
}
