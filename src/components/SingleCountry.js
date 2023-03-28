import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const SingleCountry = () => {
    const { name } = useParams() 

    const [country, setCountry] = useState([])

    useEffect(() => {
        const indivCountry = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const data = await response.json()
            setCountry(data)
            console.log(country[0])
        }

        indivCountry()
    }, [name])

    console.log(country[0])

  return (
      <div>
        
          {country.map((item) => (
              <div key={item.population} className='w-screen h-screen flex items-center justify-center'>
                  <div className='bg-red-000 flex flex-col md:flex-row max-w-[90%] md:max-w-[70%] md:justify-between  
                space-y-6 md:space-y-0'>
                    <div className='md:w-[50.5%] bg-green-00'>
                        <img src={item.flags.svg} className='h-full'  />
                    </div>
                    <div className='bg-green-00 leading-6 md:w-[47.5%] space-y-1 text-md tracking-widest  text-center md:text-left md:pl-16 '>
                        <h1 className="text-4xl font-bold py-2 ">{item.name.common}</h1>
                        {/* <div className='pl-4'> */}
                        <p className=''> <span className='font-thin'>Capital</span> : <span className='font-normal pl-1'>{item.capital}</span> </p> 
                        <p><span className='font-thin'>Population</span>: <span className='font-normal pl-1'>{item.population.toLocaleString()}</span></p>
                        <p><span className='font-thin'>Region</span>: <span className='font-normal pl-1'>{item.region}</span> </p>
                        <p><span className='font-thin'>sub-region</span>: <span className='font-normal pl-1'>{item.subregion}</span></p>
                        <p className="text-xl py-2 font-bold ">Border(s)</p>
                          {item.borders && item.borders.map((border, index) => (
                            <ul key={index} className='inline-block px-0 mx-0  '>
                                <li className='text-xs tracking-widest shadow-2xl border my-1 p-1'>{border}</li>
                            </ul>
                        ))}
                        
                        <p className="text-xl py-2 font-bold">Language(s)</p>
                          {Object.values(item.languages).map((lang, index) => (
                              <ul key={index} className='inline-block mx-0' >
                                <li className='shadow-none p-1 border ml-0 text-xs'>{lang}</li>
                            </ul>
                        ))}
                        
                         <p className="text-xl pt-2 font-bold">Currency</p>
                          {/* {Object.values(item.currencies).map((cur, index) => (
                              <ul key={index}>
                                  <li>{cur}</li>
                             </ul>
                         ))} */}
                          <p className='pb-4'>{Object.values(item.currencies)[0].name}({Object.values(item.currencies)[0].symbol})</p>
                        {/* </div> */}
                        
                        <NavLink to='/'>
                            <button className=' text-white bg-gray-500 px-4 py-1 mx-auto'>&larr; Back</button>  
                        </NavLink>
                        
                    </div> 
                    
                </div>  
                          
            </div>
        ))}
    </div>
  )
}

export default SingleCountry