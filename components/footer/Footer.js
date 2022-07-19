import { useState, useEffect } from "react";
import Image from "next/image";

import mypic from "../../public/home-img/icon-subscribe-section.svg";

export default function Footer() {
  
  const [data, setData] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [email, setEmail] = useState({
    email: ''
  })
  const [errorMessage, setErrorMessage] = useState('')

  const submitSubscription=async(e) => {
    e.preventDefault()
    setErrorMessage('')
    setLoading(!isLoading)
    
    const response = await fetch('api/mailerliteSubscribe', {
    method:'POST',
    headers: {
     'Content-type':'application/json',
    },
    body: JSON.stringify(email)
    })
    const data = await response.json()
    setLoading(false)

    if(data.error) {
      setErrorMessage(data.error)
      setEmail({...email, email:''})
    }    
    else {
      setErrorMessage('')
      setData(data.message)
      setEmail({...email, email:''})
    }    
    setTimeout(()=> {
      setErrorMessage('')
      setData('')
      setEmail({...email, email:''})
    }, 3000)
    
  }
 
  return (
    <>
      <footer className="flex flex-col h-auto md:h-80 items-center justify-around   p-6  md:flex-row bg-main-color">
        <Image
          src={mypic}
          width={220}
          height={220}
          alt="icon-subscribe"
        ></Image>

        <div className="w-full h-full text-center sm:text-left sm:w-8/12  grid grid-cols-1  gap-7">
          <h2>
            Learn about the key Data Governance components trough our free
            course
          </h2>
          <p>
            You`ll have access to videos, notes and templates <br />
            created by the Platformable team
          </p>
          <form className="flex">
            <input  tipe='email' onChange={(e)=> setEmail({email: e.target.value})} value={email.email} className="w-7/12 h-12 rounded-l-xl p-3" 
            placeholder='Email'/>
            <button
              onClick={submitSubscription}
              type="submit"
              className="w-5/12 h-12 bg-yellow-500 rounded-r-xl tracking-wide font-semibold"
            >
              Subscribe to stay updated
            </button>
          </form>
          {isLoading && (<center className="text-center font-bold text-lg">Loading</center>)}
          {errorMessage  && (<p className="text-center font-bold text-lg">{errorMessage}</p>)}
          {data && (<p className="text-center font-bold text-lg">{data}</p>)}


        </div>
      </footer>
    </>
  );
}
