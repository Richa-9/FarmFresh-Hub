import React, { useEffect, useState } from 'react';
import NameBanner from './NameBanner';
import UserDetails from './UserDetails';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import axios from 'axios';
import Loader from '../loader/Loader';

const Profile = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState();

  const navigate = useNavigate();

  useEffect(function() {
    async function fetchUser() {
      try {
        const res = await axios.get("http://localhost:8000/getAuthUser", {
          withCredentials: true
        })
  
        if (res) {
          setUserData(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (error.response.data.message === "No token provided") {
          navigate('/login');
        } else {
          console.log(error);
        }
      }
    }

    fetchUser();
  }, []);

  if (userData) {

    const name = userData.name;
    const fname = name + "'s Account";

    return (
      <>
        {
          isLoading ? <Loader /> :
          <div className='profile'>
            <NameBanner name={fname} />
            <UserDetails user={userData} />
          </div>
        }
      </>
    )
  } else {
    <Loader />
  }
  
}

export default Profile;