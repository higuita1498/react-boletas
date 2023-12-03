import {
    RiArrowDownSLine,
  } from "react-icons/ri";

  import Card from "./Card";
  import Header from "./Header";

export default function Balotas() {
  return (
    // <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
          </div>
        </div>
      // </main>
  )
}
