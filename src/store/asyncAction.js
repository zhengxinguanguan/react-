
export let asyncAction=({url,type,id})=>(dispatch,getState)=>{
    return fetch(
        url,
    ).then(
        res=>res.json()
    ).then(
        data=>{
            setTimeout(()=>{
                dispatch({type:type,payload:{data:data,id:id}});
            },0)
        }
    );

};