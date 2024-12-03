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
        <Link to="/favorites" style={styles.icon}>❤️</Link> {/* Tautan ke halaman /favorites */}
        <Link to="/cart" style={styles.icon}>🛒</Link> {/* Tautan ke halaman /cart */}
      </div>
    </header>
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

export default Header;
