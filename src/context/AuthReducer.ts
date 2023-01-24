const AuthReducer= (state:{}, action:{type:string,payload:{token:string,name:string}})=>{
    
    if (action.type==='LOGIN') {return action.payload} ;
    
    if (action.type==='LOGOUT') return null;
    

    return {...state}

}

export default AuthReducer