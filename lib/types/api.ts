export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
}

export type RoleEnum = "admin" | "manager" | "master";

export interface CategoryModel {
  id: number;
  slug: string;
  name: string;
}

export interface ProductModel {
  id: number;
  images: string;
  slug: string;
  name: string;
  description: string;
  price: string;
  rating?: number;
  category: number;
}

export interface CategoryDetail {
  id: number;
  slug: string;
  name: string;
  products: ProductModel[];
}

export interface PaginatedProductModelList {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProductModel[];
}

export interface ContactPayload {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
}

export interface LoginPayload {
  phone: string;
  password: string;
}

export interface ManagerCreatePayload {
  phone: string;
  full_name: string;
  password: string;
}

export interface UserCreateByManagerPayload {
  phone: string;
  full_name: string;
  password: string;
  role: RoleEnum;
}

export interface OrderItemCreate {
  product_id: number;
  quantity: number;
}

export interface OrderCreatePayload {
  full_name: string;
  phone: string;
  message?: string;
  items: OrderItemCreate[];
}
