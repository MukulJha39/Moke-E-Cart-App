import React, { useState } from 'react';
import API from '../api/Axios.jsx';

export default function CheckoutModal({ show, onClose, cartItems, onSuccess }){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const cartIds = cartItems.map(i=>i._id);
      const res = await API.post('/api/checkout', { cartitems: cartIds, name, email });
      setReceipt(res.data.receipt);
      onSuccess?.();
    } catch (err) {
      alert(err.response?.data?.message || 'Checkout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,0.4)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999
    }}>
      <div className="card p-3" style={{width:380}}>
        <h5>Checkout</h5>

        {!receipt ? (
          <form onSubmit={handleSubmit}>
            <input className="form-control mb-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required />
            <input className="form-control mb-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <div className="mb-2">
              <small>{cartItems.length} items</small>
            </div>
            <button className="btn btn-primary w-100" disabled={loading}>{loading ? 'Processing...' : 'Pay (mock)'}</button>
            <button type="button" className="btn btn-secondary w-100 mt-2" onClick={onClose}>Cancel</button>
          </form>
        ) : (
          <div>
            <h6>Receipt</h6>
            <div><strong>Name:</strong> {receipt.name}</div>
            <div><strong>Total:</strong> ₹{receipt.total}</div>
            <div><strong>Time:</strong> {receipt.createdAt}</div>
            <div className="mt-2">
              <button className="btn btn-success w-100" onClick={()=>{ setReceipt(null); onClose(); }}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
