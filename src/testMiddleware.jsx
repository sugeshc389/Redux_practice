function testMiddleware({dispatch,getState}){
    return (next)=>{
        return(action)=>{
            console.log('Prev state',getState());
            console.log('Action',action);
            next(action);
            console.log('Next state',getState());
            console.log('-------------------');
        }
    }
}

export default testMiddleware;