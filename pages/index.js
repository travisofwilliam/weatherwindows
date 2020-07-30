import { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'

import Dropdown from '../components/Dropdown'
import Navbar from '../components/Navbar'
import ResultWindow from '../components/ResultWindow'

const Index = () => {

    const [text, setText] = useState('')
    const [city, setCity] = useState('')
    // store response object in the state
    const [resObj, setResObj] = useState({})
    const API_KEY = '76cc49612d36cbf886e0abbde5395871'

    useEffect(() => {
        if(!city || !city.length) {
            return
        }

        submitCity()
    }, [city])

    const handleChange = (e) => {
        e.preventDefault()

        setText(e.target.value)
    }

    const submitCity = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(res => {
                setResObj(res)
            })
            .catch(err => console.log(err))
        setText('')
    }

    return (
        <div className='container' style={{textAlign: 'center'}}>
            <Head>
                <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
            </Head>
            <Navbar />
            {
                resObj.hasOwnProperty('data') >= 1 ? <ResultWindow resObj={resObj} /> : ''
            }
            <form>
                <input style={{width: '100%', marginBottom: '15px'}} value={text} placeholder='Search weather by city' onChange={handleChange} type="text" />
                <Dropdown />
                <button 
                    className='btn-primary btn-block'
                    style={{marginBottom: '15px', padding: '5px', borderRadius: '5px'}}
                    onClick={((e) => {
                        e.preventDefault()
                        setCity(text)
                    })}
                    >Submit
                </button>
            </form>
        </div>
    )
}

export default Index