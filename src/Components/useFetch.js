import { useState, useEffect  } from "react";

const useFetch = ( url ) => {
    const [Data, setData] = useState( null);

   useEffect(()=>{

    fetch(url)
    .then(( res )=>{
        if(!res.ok){
            throw Error("Cant fetch data for that resource")
        }
        return res.json()
    })
    .then((data)=>{
        setData(data)
    })
    .catch((err)=>{
        if(err.name === 'AbortError'){
            console.log("Fetched aborted")
        }else{
            
        }
      
    }) 

   }, [ url ])

    return { Data}

}

export default useFetch;