// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from 'components/product/product';
//import ProductList from 'components/product/product'
//import reportWebVitals from './reportWebVitals';

// const image = React.createElement("img", {
//   src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//   alt: "Tacos With Lime",
//   width: 640,
// });
// const title = React.createElement("h2", null, "Tacos With Lime");
// const price = React.createElement("p", null, "Price: 10.99$");
// const button = React.createElement("button", { type: "button" }, "Add to cart");

// const product = React.createElement("div", null, image, title, price, button);

// /*
//  * Dla przekazania dzieci również wykorzystuje się właściwość children parametru props.
//  * Zwróć uwagę na to, że właściwość children to tablica.
//  */
// const productWithChildrenInProps = React.createElement("div", {
//   children: [image, title, price, button],
// });
const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(product);
// root.render(
//   <>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width={640}
//     />
//     <h2>Tacos Tacos</h2>
//     <p>Price: 5$</p>
//     <button type="button">Add to cart</button>
//   </>
// );
root.render(
  <React.StrictMode>
    {/* <ProductList name="{Tacos}" price={400}>
    <Product name="{Tacos}" price={400}>
      Wow
    </Product>
    <Product name="{Tacos}" price={400}>
      Wow
    </Product>
    </ProductList>
    <Product name="{Tacos}" price={400}>
      Wow
    </Product> */}
    {favouriteBooks.map((book) => {
      return (
        <Product key={book.id} price={500} name={book.name}>
          ingredients
        </Product>
      );
    })}
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
