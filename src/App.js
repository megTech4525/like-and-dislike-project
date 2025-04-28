import ReactDOM from 'react-dom'
import anime from './anime.png'
import nft from './3d-NFT.jpg'
import anime1 from './anime1.jpg'
import giraffe from './giraffe.jpg'
import nft2 from './NFT2.jpg'
import nft3 from './NFT3.jpg'
import penguine from './Penguin.jpg'
import cartoon from './tom and jerry.jpg'
import './App.css';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  useState, useRef } from 'react'



function App() {

  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  //REACT HOOKS: useRef FOR DIRECT DOM MANIPULATION
  const fonticon = useRef(null)
  const fonticon1 = useRef(null)
  const fonticonB = useRef(null)
  const fonticon2 = useRef(null)
  const fonticonC = useRef(null)
  const fonticon3 = useRef(null)
  const fonticonD = useRef(null)
  const fonticon4 = useRef(null)
  const fonticonE = useRef(null)
  const fonticon5 = useRef(null)
  const fonticonF = useRef(null)
  const fonticon6 = useRef(null)
  const fonticonG = useRef(null)
  const fonticon7 = useRef(null)
  const fonticonH = useRef(null)
  const fonticon8 = useRef(null)
  
  
  //SETTING THE USE STATE  FOR EACH STATE
  const [likesA, setLikesA] = useState(0)
  const [dislikesA, setDislikesA] = useState(0)
  
  const [likesB, setLikesB] = useState(0)
  const [dislikesB, setDislikesB] = useState(0)

  const [likesC, setLikesC] = useState(0)
  const [dislikesC, setDislikesC] = useState(0)

  const [likesD, setLikesD] = useState(0)
  const [dislikesD, setDislikesD] = useState(0)

  const [likesE, setLikesE] = useState(0)
  const [dislikesE, setDislikesE] = useState(0)

  const [likesF, setLikesF] = useState(0)
  const [dislikesF, setDislikesF] = useState(0)
  
  const [likesG, setLikesG] = useState(0)
  const [dislikesG, setDislikesG] = useState(0)
  
  
  
  
//FUNCTIONS FOR HANDLING CLICKS
  const handleLike = () => {
    if (likes === 0 || fonticon.current === true) {
      setLikes(1)
      setDislikes(0)
      fonticon.current.classList.add('likeColor')
      fonticon1.current.classList.remove('dislikeColor') 

    }

    else {
      setLikes(likes - 1)
      setDislikes(dislikes)
    }
    
  }

  const handleDislike = () => {
    if (dislikes === 0 || fonticon1.current === true) {
      
      setDislikes(1)
      setLikes(0)
      fonticon1.current.classList.add('dislikeColor')
      fonticon.current.classList.remove('likeColor')
      
      
    } 

    else{
      setDislikes(dislikes - 1)
      setLikes(likes)
}

  }

 
  const handleLikeA = () => {
    if (likesA === 0 || fonticonB.current === true) {
      setLikesA(1)
      setDislikesA(0)
      fonticonB.current.classList.add('likeColor')
      fonticon2.current.classList.remove('dislikeColor') 

    }

    else {
      setLikesA(likesA - 1)
      setDislikesA(dislikesA)
    }
    
  }

  const handleDislikeA = () => {
    if (dislikesB === 0 || fonticonB.current === true) {
      
      setDislikesA(1)
      setLikesA(0)
      fonticon2.current.classList.add('dislikeColor')
      fonticonB.current.classList.remove('likeColor')
      
      
    } 

    else{
      setDislikesA(dislikesA - 1)
      setLikesA(likesA)
}

  }


  const handleLikeB = () => {
    if (likesB === 0 || fonticonC.current === true) {
      setLikesB(1)
      setDislikesB(0)
      fonticonC.current.classList.add('likeColor')
      fonticon3.current.classList.remove('dislikeColor') 

    }

    else {
      setLikesB(likesB - 1)
      setDislikesB(dislikesB)
    }
    
  }

  const handleDislikeB = () => {
    if (dislikesB === 0 || fonticonC.current === true) {
      
      setDislikesB(1)
      setLikesB(0)
      fonticon3.current.classList.add('dislikeColor')
      fonticonC.current.classList.remove('likeColor')
      
      
    } 

    else{
      setDislikesB(dislikesB - 1)
      setLikesB(likesB)
}

  }

  
  const handleLikeC = () => {
    if (likesC === 0 || fonticonD.current === true) {
      setLikesC(1)
      setDislikesC(0)
      fonticonD.current.classList.add('likeColor')
      fonticon4.current.classList.remove('dislikeColor') 

    }

    else {
      setLikesC(likesC - 1)
      setDislikesC(dislikesC)
    }
    
  }

  const handleDislikeC = () => {
    if (dislikesC === 0 || fonticonD.current === true) {
      
      setDislikesC(1)
      setLikesC(0)
      fonticon4.current.classList.add('dislikeColor')
      fonticonD.current.classList.remove('likeColor')
      
      
    } 

    else{
      setDislikesC(dislikesC - 1)
      setLikesC(likesC)
}

  }


  
  const handleLikeD = () => {
    if (likesD === 0 || fonticonE.current === true) {
      setLikesD(1)
      setDislikesD(0)
      fonticonE.current.classList.add('likeColor')
      fonticon5.current.classList.remove('dislikeColor') 

    }

    else {
      setLikesD(likesD - 1)
      setDislikesD(dislikesD)
    }
    
  }

  const handleDislikeD = () => {
    if (dislikesD === 0 || fonticonE.current === true) {
      
      setDislikesD(1)
      setLikesD(0)
      fonticon5.current.classList.add('dislikeColor')
      fonticonE.current.classList.remove('likeColor')
      
      
    } 

    else{
      setDislikesD(dislikesD - 1)
      setLikesD(likesD)
}

  }

  const handleLikeE = () => {
    if (likesE === 0 || fonticonF.current === true) {
      setLikesE(1)
      setDislikesE(0)
      fonticonF.current.classList.add('likeColor')
      fonticon6.current.classList.remove('likeColor') 

    }

    else {
      setLikesE(likesE - 1)
      setDislikesE(dislikesE)
    }
    
  }

  const handleDislikeE = () => {
    if (dislikesE === 0 || fonticonF.current === true) {
      
      setDislikesE(1)
      setLikesE(0)
      fonticon6.current.classList.add('dislikeColor')
      fonticonF.current.classList.remove('likeColor')
      
      
    } 

    else{
      setDislikesE(dislikesE - 1)
      setLikesE(likesE)
}

  }

  const handleLikeF = () => {
    if (likesF === 0 || fonticonG.current === true) {
      setLikesF(1)
      setDislikesF(0)
      fonticonG.current.classList.add('likeColor')
      fonticon7.current.classList.remove('likeColor') 

    }

    else {
      setLikesF(likes - 1)
      setDislikesF(dislikes)
    }
    
  }

  const handleDislikeF = () => {
    if (dislikesF === 0 || fonticonG.current === true) {
      
      setDislikesF(1)
      setLikesF(0)
      fonticon7.current.classList.add('dislikeColor')
      fonticonG.current.classList.remove('likeColor')
      
      
    } 

    else{
      setDislikesF(dislikesF - 1)
      setLikesF(likesF)
}

  }

  
  const handleLikeG = () => {
    if (likesG === 0 || fonticonH.current === true) {
      setLikesG(1)
      setDislikesG(0)
      fonticonH.current.classList.add('likeColor')
      fonticon8.current.classList.remove('dislikeColor') 

    }

    else {
      setLikesG(likesG - 1)
      setDislikesG(dislikesG)
    }
    
  }

  const handleDislikeG = () => {
    if (dislikesG === 0 || fonticonG.current === true) {
      
      setDislikesG(1)
      setLikesG(0)
      fonticon8.current.classList.add('dislikeColor')
      fonticonH.current.classList.remove('likeColor')
      
      
    } 

    else{
      setDislikesG(dislikesG - 1)
      setLikesG(likesG)
}

  }


  //JSX
  
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Anime and Cart<span className='oo'>oo</span>ns</h1>
        <div className='all'>
        <div className='anime'>
          <img src={anime} className='anime0' />
            <h4 className='text'>Name: GwagG Anime</h4>
            <h4 className='text'>Size: 40</h4>
          </div>
        <div className='icons'>
            <FontAwesomeIcon icon={faThumbsUp}
              className='font-icon' onClick={() => handleLike()} ref={fonticon } />
            <span className='like'>{ likes}</span>
            <FontAwesomeIcon icon={faThumbsDown} ref={ fonticon1} className='font-icon' onClick={() => handleDislike()} />
            <span className='dislike'>{ dislikes}</span>
            <FontAwesomeIcon icon={faComment} className='font-icon'/>
        
        </div> 
        </div>

        <div className='all'>
        <div className='anime'>
          <img src={anime1} className='anime0' />
            <h4 className='text'>Name: Moon Smiler Anime</h4>
            <h4 className='text'>Size: 40</h4>
          </div>
        <div className='icons'>
            <FontAwesomeIcon icon={faThumbsUp} className='font-icon' ref={fonticonB} onClick={() => handleLikeA()} />
            <span className='like'>{ likesA}</span>
            <FontAwesomeIcon icon={faThumbsDown} className='font-icon'ref={fonticon2 } onClick={() => handleDislikeA()} />
            <span className='like'>{ dislikesA}</span>
        <FontAwesomeIcon icon={faComment} className='font-icon'/>
        
        </div> 
        </div>

        <div className='all'>
        <div className='anime'>
          <img src={giraffe} className='anime0' />
            <h4 className='text'>Name: Dope</h4>
            <h4 className='text'>Size: 40</h4>
          </div>
        <div className='icons'>
            <FontAwesomeIcon icon={faThumbsUp} className='font-icon' ref={fonticonC } onClick={() => handleLikeB()}/>
            <span className='like'>{ likesB}</span>
            <FontAwesomeIcon icon={faThumbsDown} className='font-icon' ref={fonticon3 } onClick={() => handleDislikeB()}/>
            <span className='like'>{ dislikesB}</span>
            <FontAwesomeIcon icon={faComment} className='font-icon'/>
        
        </div> 
        </div>

        <div className='all'>
        <div className='anime'>
          <img src={penguine} className='anime0' />
            <h4 className='text'>Name: Peng Anime</h4>
            <h4 className='text'>Size: 40</h4>
          </div>
        <div className='icons'>
            <FontAwesomeIcon icon={faThumbsUp} className='font-icon' ref={fonticonD } onClick={() => handleLikeC()}/>
            <span className='like'>{likesC}</span>
 
            <FontAwesomeIcon icon={faThumbsDown} className='font-icon' ref={fonticon4 } onClick={() => handleDislikeC()}/>
            <span className='dislike'>{dislikesC}</span>
 
        <FontAwesomeIcon icon={faComment} className='font-icon'/>
        
        </div> 
        </div>

        <div className='all'>
        <div className='anime'>
          <img src={cartoon} className='anime0' />
            <h4 className='text'>Name: Tom and Jerry</h4>
            <h4 className='text'>Size: 40</h4>
          </div>
        <div className='icons'>
            <FontAwesomeIcon icon={faThumbsUp} className='font-icon' ref={fonticonE } onClick={() => handleLikeD()} />
            <span className='like'>{likesD}</span>
 
            <FontAwesomeIcon icon={faThumbsDown} className='font-icon' ref={fonticon5 } onClick={() => handleDislikeD()} />
            <span className='dislike'>{dislikesD}</span>
 
        <FontAwesomeIcon icon={faComment} className='font-icon'/>
        
        </div> 
        </div> 

         <div className='all'>
        <div className='anime'>
          <img src={nft} className='anime0' />
            <h4 className='text'>Name: Vision</h4>
            <h4 className='text'>Size: 40</h4>
          </div>
        <div className='icons'>
            <FontAwesomeIcon icon={faThumbsUp} className='font-icon' ref={fonticonF } onClick={() => handleLikeE()}/>
            <span className='like'>{likesE}</span>
 
            <FontAwesomeIcon icon={faThumbsDown} className='font-icon' ref={fonticon6 } onClick={() => handleDislikeE()}/>
            <span className='dislike'>{dislikesE}</span>
 
        <FontAwesomeIcon icon={faComment} className='font-icon'/>
        
        </div> 
        </div>

        <div className='all'>
        <div className='anime'>
          <img src={nft2} className='anime0' />
            <h4 className='text'>Name: BitLord Anime</h4>
            <h4 className='text'>Size: 40</h4>
          </div>
        <div className='icons'>
            <FontAwesomeIcon icon={faThumbsUp} className='font-icon' ref={fonticonG } onClick={() => handleLikeF()}/>
            <span className='like'>{likesF}</span>
 
            <FontAwesomeIcon icon={faThumbsDown} className='font-icon' ref={fonticon7 } onClick={() => handleDislikeF()}/>
            <span className='dislike'>{dislikesF}</span>
 
        <FontAwesomeIcon icon={faComment} className='font-icon'/>
        
        </div> 
        </div>

        <div className='all'>
        <div className='anime'>
          <img src={nft3} className='anime0' />
            <h4 className='text'>Name: Boss Anime</h4>
            <h4 className='text'>Size: 40</h4>
          </div>
        <div className='icons'>
            <FontAwesomeIcon icon={faThumbsUp} className='font-icon' ref={fonticonH } onClick={() => handleLikeG()} />
            <span className='like'>{likesG}</span>
 
            <FontAwesomeIcon icon={faThumbsDown} className='font-icon' ref={fonticon8 } onClick={() => handleDislikeG()}/>
            <span className='dislike'>{dislikesG}</span>
 
        <FontAwesomeIcon icon={faComment} className='font-icon'/>
        
        </div> 
        </div>
  
      </header>
    </div>
  );
}

export default App;
