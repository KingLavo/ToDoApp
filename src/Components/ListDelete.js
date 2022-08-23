import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router-dom";

const ListDelete = () => {
     
    const{ id }= useParams();
    const navigate = useNavigate();

    const { Data } = useFetch('http://localhost:8000/post/' + id);

    const handleDelete = ()=>{
            fetch('http://localhost:8000/post/' + id, {
                method: 'DELETE'
            }).then(()=>{
                navigate('/');
            })
    
    }
    return ( 
        <div className="todo-delete">
            { Data && (
                <div>
                    <h1>{Data.todoData}</h1>
                    <button onClick={handleDelete}>Deleted</button>
                </div>
            )}
        </div>
     );
}
 
export default ListDelete;