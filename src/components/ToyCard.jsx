import React from 'react';
import  { useDispatch, useSelector } from 'react-redux'
import { deleteCard, incrementLike } from '../actions/toyActions';


const ToyCard = props => {
  const card= useSelector(state=>state.cards.find(card=> card.id===props.id))
  const {name, image, likes} = card
  const dispatch=useDispatch()
  const handleClick = async () => deleteCard(props.id, dispatch)
  const handleLike = async () => incrementLike({ id: props.id, likes: likes+1}, dispatch)
    
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" name="like" onClick={handleLike}>Like {'<3'}</button>
        <button className="del-btn" name="del" onClick={handleClick}>Donate to GoodWill</button>
      </div>
    );
}



export default ToyCard;
