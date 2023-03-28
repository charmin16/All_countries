import React from 'react'

const Header = ({ changeMode, darkMode }) => {
  
  return (
    <div>
        <div className="md:max-w-[90%] mt-2 mx-auto py-4 flex justify-between rounded-lg shadow-2xl border-b-4 px-4">
            <p className='text-2xl font-bold'>Where in the world?</p>
        {darkMode ? <div>
          {/* <i class="fa-regular fa-lightbulb"></i> */}
          <p onClick={changeMode} className='cursor-pointer text-xl'>Light Mode</p>
          </div> :
          <p onClick={changeMode} className='cursor-pointer text-xl'>Dark Mode</p>}
        </div>
    </div>
  )
}

export default Header