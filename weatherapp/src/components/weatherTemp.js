import React, {useState,useEffect} from 'react';
import axios from 'axios';



function weatherTemp() {
    const[city , setcity] = useState(null);
    const[search, setsearch] = useState("pune");
    useEffect(() => {
        const fetchApi= async()=>{
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ea81539960bbf6ad776d79d668fb65d5`)
            .then((res)=>{
                const resp = res.json()
                setcity(resp.)
            })
        }
        
    }, [input])
    return (
        <>
        <div className="box">
            <div className="input">
                <input 
                type="search"
                className="searchfield"
                onChange={(e)=>{setsearch(e.target.value)}}
                />
            </div>
            <div className="info">
                <h2 className="city">
                    <i className="fas fa-street-view">{}</i>
                </h2>
                <h1 className="temp">
                    {}
                </h1>
                <h3 className="temp_minMax"></h3>
            </div>
        </div>
        </>
    )
}

export default weatherTemp
