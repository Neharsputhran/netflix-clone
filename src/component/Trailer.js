import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

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

// Choose a root element for your entire React application (e.g., a div with id="root").
Modal.setAppElement('#root');

function Trailer({ location, movieId }) {
  const [trailerView, setTrailerView] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const showTrailer = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId ? movieId : location?.state?.movie?.id}/videos?api_key=eeb4459ec0266f4380d3ade482bf2ea2&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => setTrailerView(json[0]?.results));
  };

  useEffect(() => {
    showTrailer();
  }, []);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        {/* <button onClick={closeModal}>close</button> */}
        <YouTube
  videoId={trailerView?.key}
  opts={{ origin: window.location.origin }}
/>

      </Modal>
    </div>
  );
}

export default Trailer;
