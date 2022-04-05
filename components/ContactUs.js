import React, { useEffect, useState, useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';
import Select from 'react-select'
import MarginCard from "../components/home/MarginCard";
import {teamList} from '../components/TeamList.js'
import Logo from '../assets/tep_logo.png'


export default function ContactUs() {
  const form = useRef();
  const [isSubmitted, setNotSubmitted] = useState(true);
  const [invalid, setInvalid] = useState(false)
  const [badMessage, setBadM] = useState(false)
  const [badName, setBadName] = useState(false)

  const [buffer, setBuffer] = useState(true)

  const [numInvalid, setNumInvalid] = useState(0)

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    cc: '',
    reply_to: ''
  });

  const teammates = teamList;

  const options = [
    { value: '', label: <em>Nobody</em>},
    { value: teammates[0].email, label: teammates[0].name},
    { value: teammates[1].email, label: teammates[1].name},
    { value: teammates[2].email, label: teammates[2].name},
    { value: teammates[3].email, label: teammates[3].name},
    { value: teammates[4].email, label: teammates[4].name},
    { value: teammates[5].email, label: teammates[5].name},
    { value: teammates[6].email, label: teammates[6].name},
  ]

  // THIS ISN'T WORKING CONSISTENTLY FOR SOME REASON
  // useEffect(() => {
  //   // fill up the cc sections
  //   for (let i=0; i < teammates.length; i++) {
  //     options.push({value: teammates[i].email, label: teammates[i].name})
  //   }
  // }, []);
  

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let x = 0

  const sendEmail = (e) => {
    e.preventDefault();

    if(toSend["reply_to"] == ''){
      setInvalid(true)
    }

    if(toSend["from_name"] == '') {
        setBadName(true)
      }
    if(toSend["message"] == '') {
        setBadM(true)
      }

    x += 1

    if(invalid || badName || badMessage || buffer) {
      setNumInvalid(x)
      setBuffer(false)
      return
    } else {
      setNotSubmitted(false)
    }


    // ************
    // READ BELOW!!!
    // ************
    // Unique identifiers from EMAILJS...do not change unless you know what you're doing
    // DO NOT SEND FRIVOLOUS EMAILS, WE HAVE A LIMIT (uncomment the send for functionality)
    
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
        
  };

  const handleChange = (e) => {
    if(e.target.name=="reply_to") {
      if (!emailFormat.test(e.target.value.toLowerCase())){
        setInvalid(true)
      } else {
        setInvalid(false)
      }
    }

    if(e.target.name=="from_name") {
      if (e.target.value == ""){
        setBadName(true)
      } else {
        setBadName(false)
      }
    }

    if(e.target.name=="message") {
      if (e.target.value == ""){
        setBadM(true)
      } else {
        setBadM(false)
      }
    }

    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    isSubmitted ?
      <MarginCard>
        <form className="formStyle" ref={form} onSubmit={sendEmail}>
            <div style={{color: "#FF5A5F", marginTop:"-30px"}} htmlFor="name" className="mt--3 contactBox block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Name</div>
            <div>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <BsFillPersonFill/>
                    </div>
                    <input onChange={handleChange} name="from_name" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5" placeholder="Bruno the Bear" />
                </div>
                <Fade bottom collapse when={badName}>
                      <div className="invalid-feedback pt-2 text-sm font-sm"
                        style={{ color:'red', display: 'block' }}
                      >
                        <em>Empty Name</em>
                      </div>
                </Fade>
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
                    <div className="invalid-feedback pt-2 text-sm font-sm"
                      style={{ color:'red', display: 'block' }}
                    >
                      <em>Invalid Email address</em>
                    </div>
              </Fade>
            </div>

            <div style={{color: "#FF5A5F"}} htmlFor="to" className="pt-5  block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tag a Specific Team Member</div>
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
            <div>
            <textarea onChange={handleChange} name="message" id="message" rows="4" className="block border p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg" placeholder="Leave a note..."></textarea> 
            <Fade bottom collapse when={badMessage}>
                  <div className="invalid-feedback pt-2 text-sm font-sm"
                    style={{ color:'red', display: 'block' }}
                  >
                    <em>Empty Message</em>
                  </div>
                </Fade>
            </div>

          <Shake spy={numInvalid}>
            <input style={{padding:"5px", cursor:"pointer", backgroundColor:"#FF5A5F", color:"white", width:"200px", borderRadius:"5px"}} className="mt-7" type="submit" value="Send" /> 
          </Shake>
        </form>
  
    </MarginCard>
    :
    <div style={{textAlign:"center"}}>
      <MarginCard>
        <div>Thank you for submitting!</div>
        <img src={Logo.src} style={{padding:"50px", margin:"auto"}} width="200px" height="200px"></img>
        <input style={{padding:"5px", textAlign: "center", backgroundColor:"#FF5A5F", color:"white", width:"200px", borderRadius:"5px"}} className="mt-7" type="submit" value="Send Another" onClick={() => setNotSubmitted(true)}/> 

      </MarginCard>
    </div>
  );
};