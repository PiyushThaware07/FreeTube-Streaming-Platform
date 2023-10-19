import React from 'react';
// Icons
import { IoLogoYoutube } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
// Images
import bgImage from '../../assets/img/bg.jpg'
// Google Auth
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  // Store data in session storage
  function storeDataInSessionStorage(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  return (
    <>
      <div className="login-main h-screen w-screen bg-white flex flex-nowrap items-center justify-center" style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
        <div>
          <h1 className='flex flex-nowrap items-center gap-2 text-3xl font-bold mb-8 justify-center'><IoLogoYoutube className='mt-1 text-4xl text-blue-500' /> FreeTube</h1>
          <GoogleLogin
            onSuccess={credentialResponse => {
              var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
              console.log(credentialResponseDecoded);
              // Store data in session storage
              const email = credentialResponseDecoded.picture;
              storeDataInSessionStorage('username', email);

              const dataToSend = {
                picture: credentialResponseDecoded.picture, // Replace with your data
              };
              navigate('/main', { state: dataToSend });
            }}
            onError={() => {
              console.log('Login Failed');
              navigate('/')
            }}
          />
        </div>
      </div>
    </>

  )
}

