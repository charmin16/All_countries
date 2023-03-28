import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

const RestCountries = () => {

    const navigate = useNavigate()

    const [countries, setCountries] = useState([])
    const [searchText, setSearchText] = useState('')
    const [error, setError] = useState(null)

    const regions = [
        {name: 'Europe'},
        { name: 'Asia' },
        { name: 'Africa' },
        { name: 'Oceania' },
        { name: 'Americas' },
        { name: 'Antarctic' }
        
    ]

    // const navigateHandler = () => {
    //     navigate.goBack()
    // }

    useEffect(() => {
        setError(null)
            const fetchData = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all')
                const data = await res.json()
                setCountries(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()

    }, [])

    const searchHandler = async () => {
        setError(null)
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const data = await res.json()
            setCountries(data)
            console.log(res)
        } catch (error) {
            console.log(error.message)
            setError(error)
        }       
    }

    const inputSubmitHandler = (e) => {
        e.preventDefault()
        searchHandler()
    }

    const filterHandler = async (region) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
            const data = await res.json() 
            setCountries(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const filterSubmitHandler = (e) => {
        e.preventDefault()
        filterHandler()
        
    }


    return (
      
      <div className=''>
        {error ? <div className='max-w-[80%] mx-auto uppercase text-2xl font-bold flex flex-col justify-center
        items-center h-screen md:w-screen tracking-wide text-white text-center space-y-6'>
            <p>Country Not Found, Pls Check Your Spelling and Try Again</p>          
            <button onClick={() => window.location.reload(false)} className=' text-white bg-gray-500 px-4 py-1 mx-auto'>&larr; Go Back</button>
            
        </div> : 
        <section>
            <div className='max-w-[90%] mx-auto flex flex-col md:flex-row md:justify-between 
            my-8 space-y-6 md:space-y-0'>
                <form onSubmit={inputSubmitHandler} className="md:w-[50%]">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        type="search"
                        name='search'
                        id='search'
                        placeholder='Search for a Country by its name' 
                        className=' 
                        w-[90%] md:w-[100%] bg-gray-500 shadow-2xl text-lg h-[2em] rounded-md md:py-0 md:text-md
                        pl-4 focus:outline-none text-white placeholder:text-white' />
                </form>
            
                <form
                    onSubmit={filterSubmitHandler}
                    className='md:w-[30%] '>
                <select
                    className='text-xl w-[55%] rounded-md md:w-full text-white p-2 bg-gray-600'
                    onChange={(e) => filterHandler(e.target.value)}
                    value={regions.name}>
                    
                    {regions.map((region, index) => (
                        <option key={index} value={region.name}>
                            {region.name}
                        </option>
                    ))}
                    </select>
                </form> 
            </div>
            
            
            {!countries ? <h1 className='uppercase text-4xl font-bold flex justify-center
            items-center h-screen tracking-wide text-gray-900 text-center'>Loading...</h1> :
                <section className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    {countries && countries.map((item, index) => (                 
                    <div key={index} className='md:max-w-[90%] mx-auto mt-6'>
                        <NavLink to={`/${item.name.common}`}>
                            <div className='cursor-pointer'>
                                <img src={item.flags.svg} className='md:w-[100%] w-[90%] mx-auto h-[15em] rounded-lg' />
                                <div className="shadow-xl p-4 rounded-b-xl space-y-1 text-center md:text-left">
                                    <h1 className='font-bold text-xl py-4'>{item.name.common}</h1>
                                    <p>Population: {item.population.toLocaleString()}</p>
                                    <p>Region: {item.region}</p>
                                    <p>Capital: {item.capital}</p>
                                    <NavLink to={`/${item.name.common}`} className='block py-2 font-bold text-2xl tracking-widest'>
                                        Learn More
                                    </NavLink>
                                    
                                </div>                   
                            </div>
                        </NavLink>
                    </div>               
                ))}
                </section>}
            </section> }
        {/* </NavLink>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */}
    </div>
  )
}

export default RestCountries