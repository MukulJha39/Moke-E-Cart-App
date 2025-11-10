import React, { useEffect, useState } from "react";
import API from "../api/Axios.jsx";
import CheckoutModal from "./CheckoutModal";

export default function Cart() {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const load = async () => {
    try {
      const res = await API.get("/api/cart");
      setCart(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    try {
      await API.delete(`/api/cart/${id}`);
      load();
    } catch (err) {
      console.log(err);
      alert("Remove failed");
    }
  };

  const updateQty = async (id, newQty) => {
    try {
      const itemRes = await API.get("/api/cart");
      const item = itemRes.data.items.find((i) => i._id === id);
      if (!item) return;

      await API.delete(`/api/cart/${id}`);

      await API.post("/api/cart", {
        productId: item.productId._id,
        quantity: newQty,
      });
      load();
    } catch (err) {
      console.log(err);
      alert("Update qty failed");
    }
  };

  const handleCheckout = () => setCheckoutOpen(true);
  const onCheckedOut = () => {
    setCheckoutOpen(false);
    load();
  };

  if (loading) return <div>Loading cart...</div>;

  return (
    <div>
      <h4>Cart</h4>
      {cart.items.length === 0 ? (
        <div className="card p-3">Cart is empty</div>
      ) : (
        <div>
          {cart.items.map((it) => (
            <div className="card mb-2 p-2" key={it._id}>
              <div className="d-flex align-items-center">
                <img
                  src={it.productId.imageUrl}
                  alt=""
                  style={{
                    width: 64,
                    height: 64,
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                />
                <div className="ms-2" style={{ flex: 1 }}>
                  <div>{it.productId.name}</div>
                  <div>
                    ₹{it.productId.price} x {it.quantity} = ₹
                    {it.productId.price * it.quantity}
                  </div>
                  <div className="mt-1">
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() =>
                        updateQty(it._id, Math.max(1, it.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span className="me-2">{it.quantity}</span>
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() => updateQty(it._id, it.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => remove(it._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="card p-3 mt-2">
            <div className="d-flex justify-content-between">
              <strong>Total</strong>
              <strong>₹{cart.total}</strong>
            </div>
            <button
              className="btn btn-success w-100 mt-2"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      <CheckoutModal
        show={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cart.items}
        onSuccess={onCheckedOut}
      />
    </div>
  );
}
