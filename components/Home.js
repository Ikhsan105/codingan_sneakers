import React from 'react';
import Header from './Home/Header';
import Footer from './Home/Footer';
import Counter from './Home/Counter';
import sampleImage from './Home/promo.jpeg';  // Impor gambar dari folder 'assets'

const Home = () => {
  return (
    <div style={styles.pageContainer}>
      <Header />
      <main style={styles.mainContent}>
        <Counter />
        {/* Menampilkan gambar di halaman */}
        <img src={sampleImage} alt="Sample" style={styles.image} />
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1',
    textAlign: 'center',  // Menambahkan teks agar gambar rata tengah
  },
  image: {
    width: '100%',  // Menyesuaikan ukuran gambar dengan lebar layar
    maxWidth: '600px',  // Membatasi lebar gambar
    height: 'auto',  // Menjaga rasio gambar
    margin: '20px 0',  // Memberikan jarak antara gambar dan elemen lainnya
  },
};

export default Home;
