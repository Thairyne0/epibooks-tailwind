import { Component } from "react";
import MyNav from "../components/MyNav";
import products from "../data/scifi.json";
import SingleBook from "../components/SingleBook";

class Home extends Component {
  render() {
    return (
      <div className="w-full">
        <MyNav></MyNav>
        <div className="mt-8">
          <h1 className="text-5xl flex justify-start ms-5 font-bold">
            Libri in evidenza
          </h1>
          <div className=" rounded-md bg-gray-200 p-6 m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 lg:gap-6">
            {products.slice(0, 20).map((product) => {
              return (
                <SingleBook
                  img={product.img}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  key={product.asin}
                ></SingleBook>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
