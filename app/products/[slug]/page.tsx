import { getProductBySlug } from "@/lib/api/sofmebelApi";
import ProductDetailClient from "./ProductDetailClient";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);

  return <ProductDetailClient product={product} />;
}