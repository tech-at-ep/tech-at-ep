import React, { useState, useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import{ init, emailjs } from '@emailjs/browser';
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';

import { send } from 'emailjs-com';

import Select from 'react-select'
import MarginCard from "../components/home/MarginCard";

import makeAnimated from 'react-select/animated';
import { css, jsx } from '@emotion/react'

export default function ContactUs() {
  const form = useRef();
  const [isSubmitted, setSubmitted] = useState(true);
  const [invalid, setInvalid] = useState(false)
  const [shake, setShake] = useState(false)

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    cc: '',
    reply_to: ''
  });

  const options = [
    { value: '', label: <em>Nobody</em>},
    { value: 'arun_kavishwar@brown.edu', label: 'Arun (Brown)' },
    { value: 'arun_kavishwar@yahoo.com', label: 'Arun (Yahoo)' },
    { value: 'fiona_dunn@brown.edu', label: 'Fiona' }
  ]

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const sendEmail = (e) => {
    e.preventDefault();
    if(invalid || toSend["reply_to"] == "") {
      setInvalid(true)
      setShake(true)
      return
    }

    console.log("not invalid")

    // ************
    // READ BELOW!!!
    // ************
    // Unique identifiers from EMAILJS...do not change unless you know what you're doing
    // DO NOT SEND FRIVOLOUS EMAILS, WE HAVE A LIMIT (uncomment the send for functionality)
    /* 
      send(
        'service_yow188c',
        'template_kcoknnq',
        toSend,
        '3yQw1YAYgG_SMo6fo'
      )
        .then((response) => {
          setSubmitted(true);
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
        */
  };

  const handleChange = (e) => {
    if(e.target.name=="reply_to") {
      if (!emailFormat.test(e.target.value.toLowerCase())){
        setShake(true)
        setInvalid(true)
      } else{
        setShake(false)
        setInvalid(false)
      }
    }
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  // TODO: Should we require the name not be blank?

  return (
    isSubmitted ?
      <MarginCard>
        <form className="formStyle" ref={form} onSubmit={sendEmail}>
            <div style={{color: "#FF5A5F", marginTop:"-30px"}} htmlFor="name" className="mt--3 contactBox block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Name</div>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <BsFillPersonFill/>
                </div>
                <input onChange={handleChange} name="from_name" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5" placeholder="Bruno the Bear" />
            </div>

            <div htmlFor="email-adress-icon" style={{color: "#FF5A5F"}}className="pt-5 block mb-2 text-sm font-medium">Your Email</div>
            <div>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <MdEmail/>
                </div>
                <input onChange={handleChange} name="reply_to" type="text" id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="tech@ep.com" />
                
            </div>
            <Fade bottom collapse when={invalid}>
                  <div className="invalid-feedback pt-2"
                    style={{ color:'red', display: 'block' }}
                  >
                    Invalid Email address
                  </div>
                </Fade>
                </div>

            <div style={{color: "#FF5A5F"}} htmlFor="to" className="pt-5  block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tag</div>
            <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <BsFillPersonFill/>
                  </div>
                  <Select name="cc" theme={(theme) => ({
                    ...theme,
                    borderRadius: 2,
                    colors: {
                    ...theme.colors,
                      primary: '#FF5A5F',
                    },
                  })}
                  defaultValue={options[0]} options={options} 
                  onChange={e => setToSend({ ...toSend, cc: e.value})}
                  isSearchable={false}/>
            </div>

            <div style={{color: "#FF5A5F"}} htmlFor="message" className="pt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</div>
            <textarea onChange={handleChange} name="message" id="message" rows="4" className="block border p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg" placeholder="Leave a note..."></textarea> 
          {
            shake ? 
            <Shake>
          <input style={{padding:"5px", backgroundColor:"#FF5A5F", color:"white", width:"200px", borderRadius:"5px"}} className="mt-7" type="submit" value="Send" /> 
          </Shake>
          :
          <input style={{padding:"5px", backgroundColor:"#FF5A5F", color:"white", width:"200px", borderRadius:"5px"}} className="mt-7" type="submit" value="Send" /> 
          }
        </form>
  
    </MarginCard>
    :
      <MarginCard>
        <div>Thank you for submitting!</div>
      </MarginCard>
  );
};