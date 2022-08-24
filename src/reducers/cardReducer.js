const initialState={
    cards: []
}

const cardReducer = (state=initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                cards: state.cards
            }
        case 'getCards':
            return {
                ...state,
                cards: action.payload
            }

        case 'addCard':
            
            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        image: action.payload.image,
                        likes: 0

                    }
                ]
            }
    
        case 'deleteCard':
            
            return {
                ...state,
                cards: state.cards.filter(card=>action.payload!==card.id)
            }
           
        
        case 'incrementLike':
            return {
                ...state,
                cards: state.cards.map(card=>{
                    if(card.id===action.payload){
                        return {
                            ...card,
                            likes: card.likes+1
                        }
                    }
                    return card
                })
                    
            }
           
        
        default:
            return state
    }
}

export default cardReducer