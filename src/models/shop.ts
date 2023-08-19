export type Category = {
  id: string;
  name: string;
  imageUrl: string;
  subcategories?: Subcategory[];
  products?: Product[];
  createdAt: Date;
  updatedAt: Date;
};

export type Subcategory = {
  id: string;
  categoryId: string;
  category: Category;
  name: string;
};

export type Product = {
  id: string;
  categoryId: string;
  category: Category;
  subcategoryId: string;
  subcategory: Subcategory;
  name: string;
  price: number;
  stock: number;
  description: string;
  isFeatured: boolean;
  isArchived: boolean;
  images?: Image[];
  createdAt: Date;
  updatedAt: Date;
};

export type Image = {
  id: string;
  productId: string;
  product: Product;
  url: string;
  createdAt: Date;
  updatedAt: Date;
};
