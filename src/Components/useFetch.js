import { useState, useEffect  } from "react";

const useFetch = ( url ) => {
    const [Data, setData] = useState( null);

   useEffect(()=>{

    fetch(url)
    .then(( res )=>{
        console.log(res)
        if(!res.ok){
            throw Error(res.statusText +" - "+ res.url)
        }
        return res.json()
    })
    .then((data)=>{
        setData(data)
        console.log(data)
    })
    .catch((err)=>{
        if(err.name === 'AbortError'){
            console.log("Fetched aborted")
        }else{
            console.log(err)
        }
      
    }) 

   }, [ url ])

    return { Data}

}

export default useFetch;