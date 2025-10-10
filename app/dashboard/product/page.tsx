import ProductCard from '@/components/product-card'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-7xl px-4">
      <h1 className="text-3xl font-bold mb-5">Product Dashboard Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
