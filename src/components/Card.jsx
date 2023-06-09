import React from "react";

function Card({ highlight, title, price, storage, users, transfer, index }) {
  return (
    // Card div
    <div
      className={`
        bg-white px-6 py-6 w-[340px] drop-shadow-2xl
        ${highlight ? "bg-gradient-to-b from-strongPurple to-darkGrayishBlue md:py-12" : ""}
        ${index === 0 ? 'rounded-xl md:rounded-none md:rounded-l-xl' : ''}
        ${index === 1 ? 'rounded-xl md:rounded-xl' : ''}
        ${index === 2 ? 'rounded-xl md:rounded-none md:rounded-r-xl' : ''}
      `}
    >

      {/* Title */}
      <p
        className={`
          text-center text-lg
          ${highlight ? 'text-white' : 'text-grayishBlue'}
        `}
      >
        {title}
      </p>

      {/* Price */}
      <div className="flex flex-row space-x-2 items-center justify-center">
        <span className={`text-4xl ${highlight ? 'text-white' : 'text-darkGrayishBlue'}`}>$</span>
        <h2 className={`text-center text-7xl py-6 ${highlight ? 'text-white' : 'text-darkGrayishBlue'}`}>
          {price}
        </h2>
      </div>

      {/* Feature list */}
      <hr className={`border-none h-[1px] ${highlight ? 'bg-veryLightGrayishBlue' : 'bg-lightGrayishBlue'}`} />
      <p className={`text-grayishBlue text-center py-4 ${highlight ? 'text-white' : ''}`}>{storage} Storage</p>
      <hr className={`border-none h-[1px] ${highlight ? 'bg-veryLightGrayishBlue' : 'bg-lightGrayishBlue'}`} />
      <p className={`text-grayishBlue text-center py-4 ${highlight ? 'text-white' : ''}`}>{users} Users Allowed</p>
      <hr className={`border-none h-[1px] ${highlight ? 'bg-veryLightGrayishBlue' : 'bg-lightGrayishBlue'}`} />
      <p className={`text-grayishBlue text-center py-4 ${highlight ? 'text-white' : ''}`}>
        Send up to {transfer} GB
      </p>
      <hr className={`border-none h-[1px] ${highlight ? 'bg-veryLightGrayishBlue' : 'bg-lightGrayishBlue'}`} />

      {/* Card Button */}
      <button
        className={`
        text-white text-sm w-full rounded-md uppercase tracking-wider py-3 mt-8 mb-2 border-solid border-2 border-transparent
        hover:bg-none hover:text-strongPurple hover:border-strongPurple
        ${
          highlight
            ? "text-strongPurple bg-white hover:bg-opacity-0 hover:text-white hover:border-white"
            : " bg-gradient-to-r from-strongPurple to-darkGrayishBlue"
        }
        `}
      >
        Learn More
      </button>
    </div>
  );
}

export default Card;
