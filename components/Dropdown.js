const Dropdown = () => {
    return (
        <div className="btn-group btn-block" style={{marginBottom: '15px'}}>
            <button type="button" className="btn btn-block btn-secondary dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-cog"></span> Select a State  <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Dealer Area</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><span className="glyphicon glyphicon-phone"></span> App Registration</a></li>   
            </ul>
        </div>
    )
}

export default Dropdown