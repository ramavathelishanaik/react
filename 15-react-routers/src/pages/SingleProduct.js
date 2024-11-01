import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  // console.log(productId);

  const productDetails = products.find((product) => product.id === productId);
  // console.log(productDetails, "de");
  const { image, name } = productDetails;
  return (
    <section className="section product">
      <h2>single product</h2>
      <div style={{ margin: "10px" }}>
        <img src={image} alt={productDetails?.name} />
        <p>{name}</p>
      </div>
      <Link to="/products" className="btn">
        Back to Products
      </Link>
    </section>
  );
};

export default SingleProduct;
