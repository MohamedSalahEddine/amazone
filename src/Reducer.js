export const initialState ={
    basket : [],
    user: null
};

export const totalAmount = (basket) => {
    return basket?.reduce((amount, item) => item.price +amount, 0);

}


const reducer =(state, action) =>{
    
    switch (action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index =state.basket.findIndex((basketItem) => basketItem.id === action.id)
            let newBasket = [...state.basket]
            if(index>=0){
                state.basket.splice(index, 1)
            }else{
                console.warn(`cannot remove item ${action.id} because it doesn't exist`)
            }
            return {
                ...state,
                basket:newBasket,
            };
        
        default:
            return state;
    }
}

export default reducer;