import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { UserContext } from '../App';

const Logout = () => {
    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await fetch('/logout', {
                method: "GET",
                headers: {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    credentials: "include"
                }
            });
    
            const result = await res.json();
    
            if(result.status) {
                navigate('/');
                dispatch({type:"USER", payload:false});
            } 
        } catch (err) {
            console.log(err);
        }
    }

    useState(() => {
        logout();
    }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout