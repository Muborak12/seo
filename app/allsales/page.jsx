import Link from "next/link";
import React from "react";

export default async function ShoppingCart() {
  const data = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=8&offset=1"
  );

  const posts = await data.json();

  console.log(posts);

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/allsales/${post.id}`}
          className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition"
        >
          <img
            src={post.images[0]}
            alt={post.title}
            className="w-full h-60 object-cover rounded-lg"
          />

          <h2 className="text-lg font-bold mt-4">
            {post.title}
          </h2>

          <p className="text-gray-600 mt-2 line-clamp-2">
            {post.description}
          </p>

          <p className="text-xl font-bold mt-3">
            ${post.price}
          </p>
        </Link>
      ))}
    </div>
  );
}