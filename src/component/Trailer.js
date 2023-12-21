import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

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

function Trailer({ location, movieId }) {
  const [trailerView, setTrailerView] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const showTrailer = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        movieId ? movieId : location?.state?.movie?.id
      }/videos?api_key=eeb4459ec0266f4380d3ade482bf2ea2&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => setTrailerView(json.results[0])); // Assuming you want the first video in the results
  };

  useEffect(() => {
    showTrailer();
  }, []);

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
        {/* <h2>{trailerView?.name}</h2> */}
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailerView?.key}`}
          height='400px'
          width='600px'
          controls={true}
          className='bg-dark overflow-hidden'
        />
      </Modal>
    </div>
  );
}

export default Trailer;
