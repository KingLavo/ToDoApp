import { useState } from "react";
import  { useNavigate } from 'react-router-dom';

const Controller = () => {

    const [todoData, setTodoData  ] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        
        e.preventDefault();

        const title =  {todoData};

            fetch('  http://localhost:8000/post', {
                method: 'POST',
                headers:{"content-Type" : "application/json"},
                body: JSON.stringify(title)
            }).then(()=>{
                console.log("Data save to the db...")
                navigate('/')
            })       
    }
    return ( 
        <div className="control">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Create a new todo...'
                    value={todoData}
                    onChange={(e)=>{setTodoData(e.target.value)}}
                    required
                />
            </form>
        </div>
     );
}
 
export default Controller;