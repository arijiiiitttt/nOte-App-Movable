import React, { useState } from 'react'
import Card from './Card'
import { motion } from "framer-motion"

const Foreground = () => {
   const data =[
    {description: "lorem lorem lorem lorem lorem lorem lorem lorem ",
        filesize:"0.9mb",
        close: true ,tag:{isOpen:false,tagTittle:"Dounload Now",tagColor:"blue"},
        

    },{description: "lorem lorem lorem lorem lorem lorem lorem lorem ",
        filesize:"0.9mb",
        close: true ,tag:{isOpen:false,tagTittle:"Upload",tagColor:"green"},
        

    },
    {description: "lorem lorem lorem lorem lorem lorem lorem lorem ",
        filesize:"0.9mb",
        close: true ,tag:{isOpen:true,tagTittle:"Dounload Now",tagColor:"green"},
        

    }
   ]
    return (
        <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-5'>

          {data.map((item ,index) =>(
            <Card data={item}/>
          ))}

        </div>

    )
}

export default Foreground