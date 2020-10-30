import React, { Component, useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import {useParams} from 'react-router-dom'

const Profile = () => {
    
  const [userProfile, setProfile] = useState(null);
  const[user,setUser]=useState(null)
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();
  
  useEffect(() => {
    console.log(1);
    fetch(`/user/${userid}`, {
      headers: {
        
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
      }
    })
      .then((res) => res.json())
      .then((result) =>{ 
            setUser(result.user); 
        setProfile(result)
    
      });
  }, []);

const follow=(userId)=>{
  fetch("/follow", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
     return (
       setUser(result.otherUser),
       dispatch({
         type: "UPDATE",
         payload: {
           following: result.currentUser.following,
           followers: result.currentUser.followers,
         },
       }),
       console.log(result)
     );
    })
    .catch((err) => {
      console.log(err);
    });
}


const unfollow = (userId) => {
  fetch("/unfollow", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return (
        setUser(result.otherUser),
        dispatch({
          type: "UPDATE",
          payload: {
            following: result.currentUser.following,
            followers: result.currentUser.followers,
          },
        }),
        console.log(result)
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
console.log(user);
  return (
    <>
      {userProfile ? (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "18px auto",
              borderBottom: "1px solid",
            }}
          >
            <div>
              <img
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px",
                }}
                alt="Post"
                src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div>
              <h5>{userProfile.user.name}</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <h6>{userProfile.posts.length} post</h6>
                <h6>{user.followers.length} followers</h6>
                <h6>{user.following.length} following</h6>
              </div>
              {!user.followers.includes(state._id) ? (
                <button
                  style={{
                    margin: "10px",
                  }}
                  className="btn waves-effect waves-light blue darken-1"
                  onClick={() => follow(userid)}
                >
                  Follow
                </button>
              ) : (
                <button
                  style={{
                    margin: "10px",
                  }}
                  className="btn waves-effect waves-light blue darken-1"
                  onClick={() => unfollow(userid)}
                >
                  Unfollow
                </button>
              )}
            </div>
          </div>

          <div className="gallery">
            {userProfile.posts.map((item) => {
              return (
                <img
                  key={item._id}
                  className="item"
                  alt={item.title}
                  src={item.photo}
                />
              );
            })}
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

export default Profile;
