const INIT_STATE ={
    carts:[],
    quantity:0,
}

export const cartreducer = (state =INIT_STATE, action) => {
    switch(action.type){
        case "ADD_CART":
            const ItemIndex = state.carts.findIndex((item)=> item.id === action.payload.id)
            console.log(ItemIndex, 'ItemIndex');
            if(ItemIndex >=0){
                state.carts[ItemIndex].quantity +=1
            }else{
                const temp ={...action.payload, quantity:1}
                return {
                    ...state,
                    carts:[...state.carts,temp]
                }
            }

            // return {
            //     ...state,
            //     carts:[...state.carts, action.payload]
            // }
            
        case "RMV_CART" :
            const data = state.carts.filter((item) => item.id !==action.payload);
            return{
                ...state,
                carts:data
            }
        case "RMV_ONE":
            const ItemIndex_dec = state.carts.findIndex((item)=> item.id === action.payload.id)
            if(state.carts[ItemIndex_dec].quantity >=1){
                const dltItem = state.carts[ItemIndex_dec].quantity -= 1
                    console.log([...state.carts, dltItem]);
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[ItemIndex_dec].quantity === 1){
                const data = state.carts.filter((item) => item.id !== action.payload);
                return{
                ...state,
                carts:data
            }
            }
        default :
        return state    
    }
}