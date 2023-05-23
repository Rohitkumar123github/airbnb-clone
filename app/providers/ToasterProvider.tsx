'use client'

import { Toaster } from 'react-hot-toast'

const ToasterProvider = () =>{
    return (
        <Toaster />
    )
}

export default ToasterProvider

//why we are not using it directly instead of using as a provider?
//because for 3rd party libraries we atleast need a client