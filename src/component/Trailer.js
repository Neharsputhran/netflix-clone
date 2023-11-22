import { Button} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import { json } from 'react-router-dom';

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
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//   Modal.setAppElement('Trailer');
function Trailer({location,movieId}) {


    const [trailerView,setTrailerView] = useState([])

    const showTrailer =()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId? movieId :location?.state?.movie?.id}/videos?api_key=eeb4459ec0266f4380d3ade482bf2ea2&language=en-US`)
        .then(res => res.json())
        .then(json=>setTrailerView(json[0]?.results))
    }
    useEffect(()=>{
        showTrailer()
    },[])

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
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
    // console.log(trailerView[0])
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
          <Button style={{width:"150px"}} variant='contained' sx={{color:"black",backgroundColor:"white"}} onClick={openModal}>Play Trailer</Button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
            {/* <button onClick={closeModal}>close</button> */}
            <YouTube videoId={trailerView?.key}/>
          </Modal>
        </div>
      );
}

export default Trailer