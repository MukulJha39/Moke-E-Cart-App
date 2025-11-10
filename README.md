overview
A full-stack shopping cart application built for the Vibe Commerce technical screening.
Users can view products, add/remove items to cart, update quantities, view totals, and perform a mock checkout with a generated receipt.
This project demonstrates:

Full CRUD e-commerce flow

RESTful API integration (Node + Express)

Database persistence (MongoDB)

Responsive React frontend (Bootstrap)

Clean, modular structure for real-world scalability
Tech Stack

Frontend

⚛️ React.js (v18)

🧭 React Router DOM (for navigation)

📡 Axios (for API requests)

🎨 Bootstrap 5

Backend

🟢 Node.js + Express.js

🍃 MongoDB + Mongoose

🌐 CORS, dotenv, morgan (for development convenience)
⚙️ Features
Feature	Description
🏬 Product Grid	Displays mock products (name, price, image)
🛒 Cart Management	Add/remove items, change quantity, view totals
💰 Checkout	Enter name/email, generate mock receipt
💾 MongoDB Persistence	Cart & product data stored persistently
🔁 Responsive UI	Fully responsive layout using Bootstrap
🚫 Error Handling	Graceful fallbacks for all API operations
🧾 API Integration	Frontend ↔ Backend REST API
Folder Structure:
mock-ecom-cart/
│
├── backend/
│   ├── models/
│   │   ├── productModel.js
│   │   └── cartModel.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── axios.js
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Products.jsx
    │   │   ├── Cart.jsx
    │   │   └── CheckoutModal.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── CartPage.jsx
    │   │   └── CheckoutPage.jsx
    │   ├── App.jsx
    │   ├── index.js
    │   └── App.css
    ├── package.json
    └── .env

    Clone The Repo
    git clone https://github.com/MukulJha39/mock-ecom-cart.git
cd mock-ecom-cart


Screenshot of websites:

<img width="215" height="316" alt="Screenshot 2025-11-11 013631" src="https://github.com/user-attachments/assets/106fcc80-780d-45a5-95e4-33dbeb73de1d" />


<img width="215" height="316" alt="Screenshot 2025-11-11 013631" src="https://github.com/user-attachments/assets/f28b2b0a-f8cf-4da3-8f4c-9491e7f43d98" />


<img width="215" height="316" alt="Screenshot 2025-11-11 013613" src="https://github.com/user-attachments/assets/1126ef1e-5ef8-44c0-9d1a-4d36ea314dd9" />

<img width="215" height="316" alt="Screenshot 2025-11-11 013553" src="https://github.com/user-attachments/assets/45739f9e-41b5-461d-82b8-cd9b1eba2eaf" />

🤝 Author

Mukul Jha
Frontend & Full Stack Developer
📧 mukujha430@gmail.com
