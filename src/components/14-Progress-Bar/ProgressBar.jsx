import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [products, setProducts] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error);
      setLoading(false);
    }
  }

  function handleScrollPercentage() {
    // console.log(
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const value = (howMuchScrolled / height) * 100;

    setScrollPercentage(value.toFixed(0));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <div>
      <div className="relative">
        <div className="fixed w-full bottom-0">
          <div className="w-full h-[150px] bg-green-950 text-white flex items-center justify-center text-2xl font-medium">
            <h1>Custom Scroll Indicator</h1>
          </div>
          <div className="w-full h-3 bg-indigo-600">
            <div
              className="h-full bg-slate-50"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>

        {loading && (
          <div className="text-center p-4 font-bold text-2xl">
            Page is loading, Please wait !
          </div>
        )}
        {errorMsg && (
          <div className="text-center p-4 font-bold text-2xl">
            Sorry, Some error occured in this page !
          </div>
        )}

        <div className="text-center py-4 text-xl">
          {products &&
            products.map((item) => <p className="mb-2">{item.title}</p>)}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
