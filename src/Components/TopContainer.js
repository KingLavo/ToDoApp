const TopContainer = ({ logo}) => {
    
    return ( 
        <div className="flex-items">
            <h1>ToDo</h1>
            <img src={logo} alt="" />
            <div className="logo-left"> 
            </div>
        </div>
     );
}
 
export default TopContainer;