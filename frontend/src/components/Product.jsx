import React, { useEffect, useState } from "react";
import API from "../api/Axios.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const res = await API.get("/api/products");
      setProducts(res.data.mydata);
    } catch (error) {
      console.log(error);
      alert("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const addToCart = async (productId) => {
    try {
      await API.post("/api/cart", { productId, quantity: 1 });
      alert("Added to cart");
    } catch (err) {
      alert(err.response?.data?.message || "Add failed");
    }
  };

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <h4>Products</h4>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-6 mb-3" key={p._id}>
            <div className="card product-card p-2">
              <img src={p.imageUrl} alt={p.name} />
              <div className="card-body">
                <h6>{p.name}</h6>
                <p>₹{p.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(p._id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
