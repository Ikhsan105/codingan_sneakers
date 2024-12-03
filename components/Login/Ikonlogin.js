import React from 'react';

function Ikonlogin({ platform, iconUrl, children }) {
  return (
    <button style={{
      width: '100%',
      padding: '12px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      border: '1px solid #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '10px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20px',
        height: '20px',
        marginRight: '10px',
        position: 'relative',
        top: '2px',  // Menyesuaikan posisi ikon agar sejajar sedikit dengan ikon lainnya
        left:'100px',
      }}>
        <img src={iconUrl} alt={platform} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <span style={{ textAlign: 'center', flex: 1 }}>{children}</span>
    </button>
  );
}

export default Ikonlogin;
