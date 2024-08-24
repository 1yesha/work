import React from 'react'

const page = () => {
  return(
     <div><figure className="md:flex ">
     <div className="w-full h-screen bg-no-repeat bg-center bg-local" style={{ backgroundImage: 'url(mountain.jpg)' }}>
      <p className="absolute inset-0 flex items-center justify-center italic text-white text-lg font-medium p-4">
           “Mountains stand as majestic guardians of the earth,<br/> their peaks reaching towards the heavens.<br/> They symbolize strength, endurance, and the timeless beauty of nature.”    
          </p>
          <figcaption  className="font-medium">
      <div className="text-sky-500 dark:text-sky-400"> 
      </div>
      <div className="text-slate-700 dark:text-slate-500">  
      </div>
    </figcaption>
    </div>
</figure>
</div>

  )
}

export default page