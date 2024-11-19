import React, { useEffect, useState } from "react";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [disable, setDisable] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const skip = products.length;
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skip}`
      );

      const data = await response.json();

      if (data && data.products) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const loadMore = () => {
    if (products.length >= 50) {
      setDisable(true);
      return;
    }
    fetchProducts();
  };

  return (
    <>
      {loading && (
        <div className="font-bold p-4 text-2xl text-center">
          Please Wait, Products is loading!
        </div>
      )}
      <div className="w-full h-auto bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-10 py-10 text-black">
        {products.map((item) => (
          <div
            className="w-[400px] h-auto border-2 border-black rounded-lg text-center py-4"
            key={item.id}
          >
            <img
              src={item.images[0]}
              alt={item.id}
              className="w-[200px] h-[200px] mx-auto"
            />
            <span className="text-xl font-medium">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="text-center bg-slate-50 py-5">
        <button
          className="border-none outline-none px-4 py-2 bg-red-500 hover:bg-red-700 duration-300 transition-colors mx-auto text-white rounded-lg font-medium cursor-pointer"
          onClick={loadMore}
          disabled={disable || loading}
        >
          {disable ? "No more data" : "Load more data"}
        </button>
        {disable && (
          <div className="mt-2 text-black">You reached 50 Products</div>
        )}
      </div>
    </>
  );
}

export default LoadMore;
