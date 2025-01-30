import React, { useState } from 'react';

import Background_main from '../../assets/Shop/background_mains.svg'

// Icons
import IconSearch from '../../assets/Icons/Shop/system-uicons_filtering.svg'
import SelectIcon from '../../assets/Icons/Shop/ci_grid-big-round.svg'
import IconList from '../../assets/Icons/Shop/bi_view-list.svg'

// Images
import imageCardCategory1 from '../../assets/Home/CardCategory/Mask Group.svg'
import ProductCard from '../../components/Product_Card/ProductCard';

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  BeforePrice?: number;
}

const Shop = () => {

   const products: Product[] = [
    { name: "Product 1", description: "algoo", price: 10.99, BeforePrice: 30, imageUrl: imageCardCategory1 },
    { name: "Product 2", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 3", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 4", description: "algoo", price: 40.99, BeforePrice: 80, imageUrl: imageCardCategory1 },
    { name: "Product 5", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 6", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 7", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 8", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 9", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 10", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 11", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 12", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 13", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 14", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 15", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 16", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 17", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 18", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
  ];

  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(1);

  // Número de produtos por página
  const productsPerPage = 16;

  // Calcula os produtos a serem exibidos para a página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Função para ir para a próxima página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };



  // Função para ir para uma página específica
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // Calcula o total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <main>
      <div className='h-auto'>
        <section className="w-full">
          <img className='w-full object-cover h-full' src={Background_main} alt="" />

          <div className='bg-[#F9F1E7] w-full h-32'>
            <div className='flex justify-between py-9 px-32 items-center'>
              <div className='flex items-center gap-6'>
                <img src={IconSearch} />
                <p className='text-2xl'>Filter</p>

                <img src={SelectIcon} alt="" />
                <img src={IconList} alt="" />

                <div className="border-l border-solid pl-11 ml-5 text-2xl">
                  <p>
                    Showing <span>{indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)}</span> of <span>{products.length}</span> results
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-6'>
                <p className='text-2xl'>Show</p>
                <span className='text-2xl py-4 px-5 bg-white text-[#9F9F9F] rounded'>16</span>

                <p className='text-2xl'>Short by</p>
                <span className='text-2xl bg-white text-[#9F9F9F] pl-6 pr-20 py-4 rounded'>Default</span>
              </div>
            </div>
          </div>

          {/* Display Products */}
          <div className="my-14 flex justify-center">
            <div className='grid grid-cols-4 gap-8'>
              {currentProducts.map((category, index) => (
                <ProductCard
                  key={index}
                  imageUrl={category.imageUrl}
                  name={category.name}
                  description={category.description}
                  price={category.price}
                  BeforePrice={category.BeforePrice}
                />
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center my-8 gap-4">
            <div className={`flex gap-10 ${currentProducts.length < 16 ? 'pt-16' : ''}`}>


              {/* Páginas numeradas */}
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`px-6 py-4 rounded-md text-xl ${currentPage === pageNumber ? 'bg-brown text-white' : 'bg-[#F9F1E7] text-black'} text-lg transition-all duration-300`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button onClick={nextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-[#F9F1E7] rounded-md text-xl">
                Next
              </button>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
};

export default Shop;
