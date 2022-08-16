import { Link } from "react-router-dom";

const ListComponent = ({ data })=>{
    
    return(
        <div>
            <div className="down">
                <div className="ouputContainer">
                    { data.map((k)=>(
                        <div key={k.id}>
                            <Link  className="outputDiv" to={`/post/${k.id}`}>
                                <input type="checkbox" />
                                <label>{k.todoData}</label>
                                <label>X</label>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListComponent;