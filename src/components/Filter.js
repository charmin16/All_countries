import React from 'react'

const Filter = () => {
  return (
      <form  className="md:max-w-[90%] mt-16 px-4 md:px-0 mx-auto flex flex-col 
        md:flex-row md:justify-between space-y-16 md:space-y-0">
          <input
            type="search"
            name='search'
            id='search'
            placeholder='Search for a Country' 
        className=' 
        w-[90%] md:w-[30%] bg-red-000 shadow-2xl py-4 text-xl rounded-2xl md:py-0 md:text-md
        pl-6 focus:outline-none' />
        <select name="" id="" className='text-3xl space-y-2 w-[70%] md:w-[20%] bg-gray-500 text-white 
        p-4 '>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            </select>
        </form>
  )
}

export default Filter