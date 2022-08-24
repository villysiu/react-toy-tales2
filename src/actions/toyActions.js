
export const  getCards = async (dispatch)=>{
    const url = "http://localhost:3000/toys";
      
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        dispatch({type: 'getCards', payload: json})
        
    } catch (error) {
        console.log("error", error);
    }
    
}
export const addCard = async (card, dispatch) => {
    const url = "http://localhost:3000/toys"
      
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(card)
        })
        const json = await response.json();
        console.log(json);
        dispatch({type: 'addCard', payload: json})
        
    } catch (error) {
        console.log("error", error);
    }
}
export const deleteCard = async (id, dispatch) => {
    dispatch({ type: "LOADING"})
    const url = `http://localhost:3000/toys/${id}`;

    try{
        const response = await fetch(url, { method: "DELETE" })
        await response.json();
        console.log(response);
        dispatch({type: 'deleteCard', payload: id})
        
    }
    catch(error) {
        console.log("error", error);
    }

}  
export const incrementLike = async (card, dispatch) => {
    const url = `http://localhost:3000/toys/${card.id}`;

    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(card)
        })
        await response.json()
        dispatch({type: 'incrementLike', payload: card.id})
    }
    catch(error) {
        console.log("error", error);
    }
} 