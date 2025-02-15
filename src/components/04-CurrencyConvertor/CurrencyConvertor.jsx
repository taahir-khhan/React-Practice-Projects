import React, { useState } from "react";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import { InputBox } from "../index";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  let ourOption = options.filter((currency) => {
    if (
      currency === "inr" ||
      currency === "usd" ||
      currency === "eur" ||
      currency === "sar"
    )
      return currency;
  });

  const handleAmountChange = (newAmount) => {
    // Update the amount only if it's different from the current value
    setAmount(newAmount);
  };

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(0);
    setConvertedAmount(0);
  };

  const convert = () => {
    let value = amount * currencyInfo[toCurrency];
    setConvertedAmount(value.toFixed(3));
  };

  return (
    <div
      className='w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1530446611691-a3c37e62c56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxjdXJyZW5jeSUyMGNvbnZlcnNpb258ZW58MHx8MHx8fDA%3D')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                amount={amount}
                currencyOptions={ourOption}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                onAmountChange={handleAmountChange}
                selectCurrency={fromCurrency}
              />
            </div>

            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className='w-full mt-1 mb-4'>
              <InputBox
                label='To'
                amount={convertedAmount}
                currencyOptions={ourOption}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                selectCurrency={toCurrency}
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
