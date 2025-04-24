import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar'; // Correct NavBar import
import './app.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/rowpost';
import { action, originals } from './urls';
import MovieList from './MovieList';
import MovieModal from './Components/MovieModel/MovieModel';
import LoginOrSignup from './Components/Login/LoginOrSignup'; // Import LoginOrSignup component

function App() {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <MovieList />
      <MovieModal />
      <div className="navbar">
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
            <div
              style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '8px',
                width: '400px',
              }}
            >
              <button
                onClick={() => setShowModal(false)} // Close modal
                style={{
                  float: 'right',
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                X
              </button>
              <LoginOrSignup />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;