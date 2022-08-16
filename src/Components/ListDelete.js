import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const ListDelete = () => {
    const [isPending, setIsPending ] = useState( true );
    const{ id }= useParams();
    const navigate = useNavigate();

    const { data } = useFetch('http://localhost:8000/post/' + id);

    const handleDelete = ()=>{
            fetch('http://localhost:8000/post/' + id, {
                method: 'DELETE'
            }).then(()=>{
                console.log(data)
                navigate('/')
                setIsPending(false)
            })
    
    }
    return ( 
        <div className="todo-delete">
            <h1>{`To do app ${ id }`}</h1>
            { !isPending && <div>Loading...</div>}
            { data && (
                <div>
                    <div style={{color:'black'}}>{data.todoData}</div>
                    <button>Deleted</button>
                </div>
            )}
        </div>
     );
}
 
export default ListDelete;