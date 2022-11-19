import { createSlice } from "@reduxjs/toolkit";


export const cartSlice=createSlice({
    initialState:{
        cartitem:localStorage.getItem('cartitem')?JSON.parse(localStorage.getItem('cartitem')):[],
        cartQuantity:0,
        cartAamout:0
    },
    name:"cartSlice",
    reducers:{
        addtoCart:(state,action)=>{
            const findproduct=state.cartitem.find((product)=>product.id === action.payload.id)
            if(findproduct){
                state.cartitem[findproduct].cartQuantity +=1
                
            }
            else{
                const productClone={...action.payload,quantity:1}
          state.cartitem.push(productClone)  
        }
           localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
        },
        removeFromCart(state,action){
        const rmCart=  state.cartitem.filter((product)=> product.id !== action.payload.id
        )
      state.cartitem=rmCart
      localStorage.setItem('cartitem',JSON.stringify(state.cartitem))

        },
        ClearCart:(state,action)=>{
            state.cartitem = []
            localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
        },
descressQauntity:(state,action)=>{
    const findproduct=state.cartitem.find((product)=>product.id === action.payload.id)
    if(state.cartitem[findproduct].cartQuantity >1){
        state.cartitem[findproduct].cartQuantity -=1
    }else if(state.cartitem[findproduct].cartQuantity ===1){
        const rmCart=  state.cartitem.filter((product)=> product.id !== action.payload.id
        )
      state.cartitem=rmCart
      localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
    }
}
    }
})
export const{addtoCart,removeFromCart,ClearCart,descressQauntity}=cartSlice.actions;
export default cartSlice.reducer