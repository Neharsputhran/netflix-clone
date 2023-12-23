import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import './css/Trailer.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
// Trailer.js

// ... (imports)

function Trailer({ location, movieId }) {
  const [trailerView, setTrailerView] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const showTrailer = () => {
    if (!movieId) {
      setErrorMessage('No movie ID provided.');
      console.warn('No movie ID provided.');
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/movie/${
        movieId ? movieId : location?.state?.movie?.id
      }/videos?api_key=eeb4459ec0266f4380d3ade482bf2ea2&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log('API Response:', json); // Log API response
  
        if (json.results && json.results.length > 0) {
          setTrailerView(json.results[0]);
          setErrorMessage(null); // Reset error message on success
        } else {
          setTrailerView({});
          setErrorMessage('No trailer available for this movie.');
          console.warn('No trailer available for this movie.');
        }
      })
      .catch((error) => {
        console.error('Error fetching trailer data:', error);
        setErrorMessage('Error fetching trailer data.');
        setTrailerView({}); // Reset trailer data on error
      });
  };
  

  useEffect(() => {
    showTrailer();
  }, [location, movieId]); // Ensure useEffect runs when location or movieId changes

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Any additional logic after opening the modal
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        style={{ width: '150px' }}
        variant="contained"
        sx={{ color: 'black', backgroundColor: 'white' }}
        onClick={openModal}
      >
        Play Trailer
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <div className='reactPlay'>
            <ReactPlayer 
            url={trailerView?.key ? `https://www.youtube.com/watch?v=${trailerView.key}` : ''}
            height='100%'
            width='100%'
            controls={true}
            className='bg-dark overflow-hidden'
          />
          </div>
          
        )}
      </Modal>
    </div>
  );
}

export default Trailer;
