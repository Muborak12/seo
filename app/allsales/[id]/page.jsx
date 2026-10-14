import React from "react";

async function getProduct(id) {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | Gardening Store",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} | Gardening Store`,
    description: product.description,
  };
}

export default async function AllSales({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto border rounded-xl p-6 shadow">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full h-96 object-cover rounded-xl"
        />

        <h1 className="text-3xl font-bold mt-6">
          {product.title}
        </h1>

        <p className="text-gray-600 mt-4">
          {product.description}
        </p>

        <p className="text-2xl font-bold mt-5">
          ${product.price}
        </p>

        <p className="text-gray-500 mt-2">
          Category: {product.category?.name}
        </p>
      </div>
    </div>
  );
}
