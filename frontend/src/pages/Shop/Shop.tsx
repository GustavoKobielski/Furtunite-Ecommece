import { useEffect, useState } from 'react';
import { fetchProductsAndCategories } from '../../services/api'; // Importe a função que busca os produtos da API

import Background_main from '../../assets/Shop/background_mains.svg';
import IconSearch from '../../assets/Icons/Shop/system-uicons_filtering.svg';
import SelectIcon from '../../assets/Icons/Shop/ci_grid-big-round.svg';
import IconList from '../../assets/Icons/Shop/bi_view-list.svg';
import ProductCard from '../../components/Product_Card/ProductCard';

// SHADCN Pagination components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Shadcn/ui/Pagination";

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  BeforePrice?: number;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  // Número de produtos por página
  const productsPerPage = 16;

  // Buscar os produtos da API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsAndCategories(currentPage, productsPerPage);
        setProducts(data.produtos);
        setTotalProducts(data.total)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchData(); // Chama a função para buscar os produtos
  }, [currentPage]); // A requisição será feita sempre que a página mudar

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
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <main className='my-28'>
      <div className='h-auto'>
        <section className="w-full">
          <img className='w-full object-cover h-full' src={Background_main} alt="Background" />

          <div className='bg-[#F9F1E7] w-full h-32'>
            <div className='flex justify-between py-9 px-32 items-center'>
              <div className='flex items-center gap-6'>
                <img src={IconSearch} />
                <p className='text-2xl'>Filter</p>
                <img src={SelectIcon} alt="Select Icon" />
                <img src={IconList} alt="Icon List" />

                <div className="border-l border-solid pl-11 ml-5 text-2xl">
                  <p>
                    Showing <span>{(currentPage - 1) * productsPerPage + 1}-{Math.min(currentPage * productsPerPage, totalProducts)}</span> of <span>{totalProducts}</span> results
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-6'>
                <p className='text-2xl'>Show</p>
                <span className='text-2xl py-4 px-5 bg-white text-[#9F9F9F] rounded'>{productsPerPage}</span>

                <p className='text-2xl'>Short by</p>
                <span className='text-2xl bg-white text-[#9F9F9F] pl-6 pr-20 py-4 rounded'>Default</span>
              </div>
            </div>
          </div>

          {/* Display Products */}
          <div className="my-14 flex justify-center">
            <div className='grid grid-cols-4 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {products.map((product, index) => {
                const imageUrl = `http://localhost:5000/assets/${product.imageUrl}`;

                return (
                  <ProductCard
                    key={index}
                    product={{
                      imageUrl: imageUrl, // Passa o URL correto da imagem
                      name: product.name,
                      description: product.description,
                      price: product.price,
                      BeforePrice: product.BeforePrice,
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center my-8 gap-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => goToPage(currentPage - 1)}
                    className={currentPage === 1 ? 'text-2xl cursor-not-allowed opacity-50' : 'text-2xl'}
                  />
                </PaginationItem>

                {/* Páginas numeradas */}
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === pageNumber}
                        onClick={() => goToPage(pageNumber)}
                        className={currentPage === pageNumber ? 'text-2xl bg-brown text-white' : 'text-2xl bg-[#F9F1E7] text-black'}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => nextPage()}
                    className={currentPage === totalPages ? 'text-2xl cursor-not-allowed opacity-50' : 'text-2xl'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Shop;
