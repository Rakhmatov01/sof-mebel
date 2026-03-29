import api from "./axios";
import type {
  CategoryModel,
  CategoryDetail,
  ContactPayload,
  LoginPayload,
  ManagerCreatePayload,
  UserCreateByManagerPayload,
  OrderCreatePayload,
  PaginatedProductModelList,
  ProductModel,
} from "../types/api";

export const listCategories = async (): Promise<CategoryModel[]> => {
  const { data } = await api.get<CategoryModel[]>("/api/v1/categories/");
  return data;
};

export const getCategoryBySlug = async (slug: string): Promise<CategoryDetail> => {
  const { data } = await api.get<CategoryDetail>(`/api/v1/category/${slug}/`);
  return data;
};

export const listProducts = async (params?: {
  category?: string;
  max_price?: number;
  min_price?: number;
  ordering?: string;
  page?: number;
  product_name?: string;
}): Promise<PaginatedProductModelList> => {
  const { data } = await api.get<PaginatedProductModelList>("/api/v1/products/", { params });
  return data;
};

export const getProductBySlug = async (slug: string): Promise<ProductModel> => {
  const { data } = await api.get<ProductModel>(`/api/v1/product/${slug}/`);
  return data;
};

export const sendContactMessage = async (payload: ContactPayload): Promise<void> => {
  await api.post("/api/v1/contact/", payload);
};

export const login = async (payload: LoginPayload): Promise<unknown> => {
  const { data } = await api.post<unknown>("/api/v1/login/", payload);
  return data;
};

export const createManager = async (payload: ManagerCreatePayload): Promise<void> => {
  await api.post("/api/v1/create-manager/", payload);
};

export const createUserByManager = async (payload: UserCreateByManagerPayload): Promise<void> => {
  await api.post("/api/v1/create-user/", payload);
};

export const createOrder = async (payload: OrderCreatePayload): Promise<void> => {
  await api.post("/api/v1/orders/create/", payload);
};
