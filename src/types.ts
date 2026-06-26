export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  price: number | string;
  popular?: boolean;
  imageUrl?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  titleEn?: string;
  iconName: string;
  items: MenuItem[];
}
