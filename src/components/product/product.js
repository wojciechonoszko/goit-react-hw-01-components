//import logo from './logo.svg';
import '../../index.css';


export const ProductList = (props) => {
  return (
    <>
    <ul>
      {props.Product}
    </ul>
    </>
  )
}

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <>
        <div>
            <div>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="user avatar"
                    class="avatar"
                />
                <p>Petra Marica</p>
                <p>@pmarica</p>
                <p>Salvador, Brasil</p>
            </div>

            <ul class="stats">
              <li>
                <span class="label">Followers</span>
                <span class="quantity">1000</span>
              </li>
              <li>
                <span class="label">Views</span>
                <span class="quantity">2000</span>
              </li>
              <li>
                <span class="label">Likes</span>
                <span class="quantity">3000</span>
              </li>
            </ul>
        </div>
        </>
    )
}
export const Product = ({name, price, children}) => {
  
  return (
    <>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width={640}
    />
    <h2>{name}</h2>
    <p>Price: {price ? price : 'Brak ceny'} {price && '$'}</p>
    <button type="button">Add to cart</button>
    <div>{children}</div>
  </>
  );
};


export default Product;


