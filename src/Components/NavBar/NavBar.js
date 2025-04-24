import React, { useState } from 'react';
import './NavBar.css';
import LoginOrSignup from '../Login/LoginOrSignup'; // Import your combined login/signup component

function NavBar() {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  return (
    <div className='navbar'>
      {/* Netflix Logo */}
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="NETFLIX LOGO"
      />

      {/* Avatar */}
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="AVATAR"
        onClick={() => setShowModal(true)} // Show modal when clicked
        style={{ cursor: 'pointer' }} // Change cursor to pointer on hover
      />

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', width: '400px' }}>
            <button
              onClick={() => setShowModal(false)} // Close modal
              style={{ float: 'right', background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}
            >
              X
            </button>
            <LoginOrSignup />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;