import weather from '../public/weather-icons-collection.jpg'

const ResultWindow = ({ resObj }) => {

    const convertToFarenheit = (temp) => {
        const converted = (((temp-273.15) * 1.8) + 32)
        return converted
    }

    return (
        <div style={{marginBottom: '15px'}}>
            <div className='list-group'>
                <div 
                    className='list-group-item' 
                    style={{
                        backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
                        ), 
                        url(${weather})`}}>
                    <div style={{color: 'white', opacity: '0.8'}}>
                        <h4>{resObj.data.name}</h4>
                        <p>
                            <strong>
                                Current Temperature: 
                            </strong>
                            {` ${Math.trunc(convertToFarenheit(resObj.data.main.temp))}`}&deg;
                        </p>
                        <p>
                            <strong>
                                High: 
                            </strong>
                            {` ${Math.trunc(convertToFarenheit(resObj.data.main.temp_max))}`}&deg;
                        </p>
                        <p>
                            <strong>
                                Low: 
                            </strong>
                            {` ${Math.trunc(convertToFarenheit(resObj.data.main.temp_min))}`}&deg;
                        </p>
                        <p>
                            <strong>
                                Feels Like: 
                            </strong>
                            {` ${Math.trunc(convertToFarenheit(resObj.data.main.feels_like))}`}&deg;
                        </p>
                        <p>
                            <strong>
                                Humidity: 
                            </strong>
                            {` ${resObj.data.main.humidity}`}%
                        </p>
                        <p>
                            <strong>
                                Visibility: 
                            </strong>
                            {` ${resObj.data.weather[0].description}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultWindow