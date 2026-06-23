export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  iconName: string;
  items: MenuItem[];
}
