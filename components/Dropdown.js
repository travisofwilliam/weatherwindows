const Dropdown = () => {
    return (
        <div style={{marginBottom: '15px', textAlign: 'center'}}>
            <select className='btn btn-block btn-primary' name="cars" id="cars">
                <option>-- Select a State --</option>
                <option value="volvo">CA</option>
                <option value="saab">AR</option>
                <option value="mercedes">AL</option>
                <option value="audi">AZ</option>
            </select>
        </div>
    )
}

export default Dropdown