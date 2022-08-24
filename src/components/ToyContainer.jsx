import React, {useEffect} from 'react';
import  { useSelector , useDispatch} from 'react-redux'
import ToyCard from './ToyCard'
import { getCards } from '../actions/toyActions'
const ToyContainer = () => {

  const dispatch=useDispatch()
  useEffect(()=>{
    getCards(dispatch)
},[dispatch])

  const card_ids=useSelector(state=>state.cards.map(card=>card.id))
   console.log(card_ids)
  return(

    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {card_ids.map(card_id=><ToyCard key={card_id} id={card_id}/>)}
    </div>
  );
}

export default ToyContainer;
