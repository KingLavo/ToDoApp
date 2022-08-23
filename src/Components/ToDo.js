import logo from '../Images/icon-moon.svg';
import ListComponent from '../Components/ListComponent';
import Controller from '../Components/Controller';
import TopContainer from '../Components/TopContainer';
import useFetch from '../Components/useFetch';

const ToDo = () => {
    const url = 'http://localhost:8000/post';
    const { Data: data } = useFetch( url );
    
    return ( 
        <div className="component">
            <div className="todoForm">
                <div className="container">
                     <TopContainer logo={logo}/>
                     <Controller/>
                </div>
            </div>
                { data && <ListComponent data ={ data }/> }
            <div className="bottom">
                { data ? (<li>{`${ data.length} items left`}</li>): (<li>No items to display...</li>)}
                <li> clear completed </li>
            </div> 
        </div>
         
     );
}
 
export default ToDo;