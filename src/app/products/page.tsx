import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const ProductsPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div className="container mx-auto py-12 bg-white text-gray-800">
        <h1 className="text-4xl font-bold mb-8">All Products</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-[#009688]">Categories</h3>
              <ul className="space-y-2 mb-6">
                <li><label><input type="checkbox" className="mr-2" /> T-Shirts</label></li>
                <li><label><input type="checkbox" className="mr-2" /> Mugs</label></li>
                <li><label><input type="checkbox" className="mr-2" /> Business Cards</label></li>
                <li><label><input type="checkbox" className="mr-2" /> Photobooks</label></li>
              </ul>

              <h3 className="font-semibold text-lg mb-4 text-[#009688]">Price</h3>
              <input type="range" className="w-full" min="0" max="1000" />
              <div className="flex justify-between text-sm mt-2">
                <span></span>
                <span></span>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Image</span>
                  </div>
                  <h4 className="font-semibold text-lg">Product {item}</h4>
                  <p className="text-[#009688] font-bold mt-2">.00</p>
                  <button className="mt-4 w-full bg-[#009688] text-white py-2 rounded-md hover:bg-[#00796B] transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <FooterOne />
    </Wrapper>
  );
};

export default ProductsPage;
