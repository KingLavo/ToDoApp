import { Link } from "react-router-dom";

const ListComponent = ({ data })=>{
    
    return(
        <div>
            <div className="down">
                <div className="ouputContainer">
                    { data.map((k)=>(
                        <div  className="outputDiv" key={k.id}>
                            <input type="checkbox" />
                            <label>{k.todoData}</label>
                            <Link  to={`/post/${k.id}`}>                          
                                X
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListComponent;