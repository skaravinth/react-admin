import React from 'react';
import './App.css';

function OverviewBox({ topic, number, status, iconClass }) {
  return (
    <div className="box">
      <div className="right-side">
        <div className="box-topic">{topic}</div>
        <div className="number">{number}</div>
        <div className="indicator">
         
          <span className="text">{status}</span>
        </div>
      </div>
    
    </div>
  );
}

function SalesDetails({ title, details }) {
  return (
    <div className="recent-sales box">
      <div className="title">{title}</div>
      <div className="sales-details">
        {details.map((detail, index) => (
          <ul className="details" key={index}>
            <li className="topic">{detail.topic}</li>
            {detail.items.map((item, idx) => (
              <li key={idx}><a href="#">{item}</a></li>
            ))}
          </ul>
        ))}
      </div>
      <div className="button">
        <a href="#">See All</a>
      </div>
    </div>
  );
}

function App() {
  const overviewData = [
    { topic: "Total Order", number: "40,876", status: "Up from yesterday", iconClass: 'bx bx-up-arrow-alt' },
    { topic: "Total Sales", number: "38,876", status: "Up from yesterday", iconClass: 'bx bx-up-arrow-alt' },
    { topic: "Total Profit", number: "$12,876", status: "Up from yesterday", iconClass: 'bx bx-up-arrow-alt' },
    { topic: "Total Return", number: "11,086", status: "Down From Today", iconClass: 'bx bx-down-arrow-alt down' }
  ];

  const salesDetailsData = {
    title: "Recent Sales",
    details: [
      { topic: "Date", items: Array(9).fill("02 Jan 2021") },
      { topic: "Customer", items: ['Aravinth', 'Akilan', 'Sajin', 'Atharva', 'Senthooran', 'Ruban', 'Siva', 'Shivanesh', 'Adithi'] },
      { topic: "Sales", items: ['Delivered', 'Pending', 'Returned', 'Delivered', 'Pending', 'Returned', 'Delivered', 'Pending', 'Delivered'] },
      { topic: "Total", items: ['र20000', 'र10.43', 'र25.88', 'र170.66', 'र56.56', 'र44.95', 'र67.33', 'र23.53', 'र46.52'] }
    ]
  };
  const products = [
    { id: 1, name: 'Vuitton Sunglasses', price: 'र1107', imageUrl: 'images/sunglasses.jpg' },
    { id: 2, name: 'Hourglass Jeans', price: 'र1567', imageUrl: 'images/jeans.jpg' },
    { id: 3, name: 'Nike Sport Shoe', price: 'र1234', imageUrl: 'images/nike.jpg' },
    { id: 4, name: 'Hermes Silk Scarves', price: 'र2312', imageUrl: 'images/scarves.jpg' },
    { id: 5, name: 'Succi Ladies Bag', price: 'र1456', imageUrl: 'images/blueBag.jpg' },
    { id: 6, name: "Gucci Women's Bags", price: 'र2345', imageUrl: 'images/bag.jpg' },
    { id: 7, name: 'Adidas Running Shoe', price: 'र2345', imageUrl: 'images/addidas.jpg' },
    { id: 8, name: "Bilack Wear's Shirt", price: 'र1245', imageUrl: 'images/shirt.jpg' },
  ];
  

  return (
    <div className="App">
      <div className="sidebar">
        <div className="logo-details">
          <span className="logo_name">ADMIN DASHBOARD</span>
        </div>
        <ul className="nav-links">
         
          <li>
            <a href="#">
              <i className='bx bx-box'></i>
              <span className="links_name">Product</span>
            </a>
          </li>
          <li>
          <a href="#">
            <i class='bx bx-list-ul' ></i>
            <span class="links_name">Order list</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links_name">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-coin-stack' ></i>
            <span class="links_name">Stock</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-book-alt' ></i>
            <span class="links_name">Total order</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-user' ></i>
            <span class="links_name">Team</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-heart' ></i>
            <span class="links_name">Favrorites</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-cog' ></i>
            <span class="links_name">Setting</span>
          </a>
        </li>
        <li class="log_out">
          <a href="#">
            <i class='bx bx-log-out'></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..."/>
           
          </div>
          <div className="profile-details">
          
            <span className="admin_name">Prem Shahi</span>
            
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes">
            {overviewData.map((data, index) => (
              <OverviewBox key={index} {...data} />
            ))}
          </div>
          <div className="sales-boxes">
            <SalesDetails {...salesDetailsData} />
          </div>
        </div>
      </section>
      <div className="top-sales box">
      <div className="title">Top Selling Product</div>
      <ul className="top-sales-details">
        {products.map(product => (
          <li key={product.id}>
            <a href="#">
              <img src={product.imageUrl} alt={product.name} />
              <span className="product">{product.name}</span>
            </a>
            <span className="price">{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
