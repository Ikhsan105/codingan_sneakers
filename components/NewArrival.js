import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Sneakerskick</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/new-arrival" style={styles.navLink}>New Arrival</Link>
        <Link to="/best-collection" style={styles.navLink}>Best Collection</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
      </nav>
      <div style={styles.iconSection}>
        <span style={styles.icon}>❤️</span>
        <Link to="/cart" style={styles.icon}>🛒</Link>
      </div>
    </header>
  );
};

const NewArrival = () => {
  const shoes = [
    {
      id: 1,
      name: 'Nike Revolution',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png',
      price: 'Rp 809.000',
    },
    {
      id: 2,
      name: 'Nike Downshifter',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e53419df-8536-4c14-8f0d-2e481b1fad2f/NIKE+DOWNSHIFTER+12.png',
      price: 'Rp 568.000',
    },
    {
      id: 3,
      name: 'Jordan Stay Loyal 3',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be57f4b6-8f6a-4908-8668-cc3f6326be61/JORDAN+STAY+LOYAL+3.png',
      price: 'Rp 1.488.000',
    },
    {
      id: 4,
      name: 'Nike Air Max 90 Premium',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2eca6a1-4ddb-48fa-90b5-60c88fe48bc6/NIKE+AIR+MAX+90+PRM.png',
      price: 'Rp 1.758.000',
    },
    {
      id: 5,
      name: 'Nike Air Force 1',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/71961cb5-ff4c-4ea0-982e-e0977a3af45e/AIR+FORCE+1.png',
      price: 'Rp 1.098.000',
    },
    {
      id: 6,
      name: 'Nike Air Max Plus',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7bb5e4b8-9053-4a6f-8f24-10c5a9be392e/AIR+MAX+PLUS.png',
      price: 'Rp 2.098.000',
    },
    {
      id: 7,
      name: 'Nike Pegasus Trail 3',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/85b1b418-bc2b-40c5-b7aa-72cc1e2ac452/PEGASUS+TRAIL+3.png',
      price: 'Rp 1.888.000',
    },
  ];

  // Reorder the shoes array
  const reorderedShoes = [
    ...shoes.slice(0, 3),  // Shoes with IDs 1, 2, 3
    ...shoes.slice(3, 6),  // Shoes with IDs 4, 5, 6
    shoes[6],  // Shoe with ID 7 (keeps the last item as is)
  ];

  return (
    <div style={stylesNew.container}>
      <div style={stylesNew.header}>
        <h2 style={stylesNew.title}>
          New <span style={stylesNew.highlight}>Arrival</span>
        </h2>
        <Link to="/see-all" style={stylesNew.seeAll}>
          See All
        </Link>
      </div>
      <div style={stylesNew.grid}>
        {reorderedShoes.map((shoe) => (
          <Link to={`/details/${shoe.id}`} key={shoe.id} style={stylesNew.cardLink}>
            <div style={stylesNew.card}>
              <img src={shoe.imageUrl} alt={shoe.name} style={stylesNew.image} />
              <h3 style={stylesNew.shoeName}>{shoe.name}</h3>
              <p style={stylesNew.price}>{shoe.price}</p>
              <button style={stylesNew.buyButton}>Buy Now</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1em',
    transition: 'color 0.3s',
  },
  iconSection: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    fontSize: '1.5em',
    cursor: 'pointer',
  },
};

const stylesNew = {
  container: {
    padding: '20px',
    maxHeight: '80vh',
    overflowY: 'scroll', // Enable vertical scrolling
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.8em',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#4A90E2',
  },
  seeAll: {
    textDecoration: 'none',
    color: '#4A90E2',
    fontSize: '1em',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Ensure only 4 items per row
    gap: '20px',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  shoeName: {
    margin: '10px 0 5px',
    fontSize: '1em',
  },
  price: {
    color: '#4A90E2',
    fontSize: '1.1em',
    marginBottom: '10px',
  },
  buyButton: {
    padding: '8px 12px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
};

const App = () => (
  <>
    <Header />
    <NewArrival />
  </>
);

export default App;
