import React, { useState } from 'react'
import logo from "../assests/code-sync.png"
import Client from '../compontents/Client';
import "../App.css"
import Editor from '../compontents/Editor';
const EditorPage = () => {
  const [clients,SetClients]=useState([
    {socketId:1,username:'Yash G'},
    {socketId:2,username:'Abhi G'}
  ]);

  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='aside_inner'>
          <div className='logo'>
            <img className='logoImage' src={logo}>

            </img>
          </div>
          <h3 className='connect'>Connected</h3>
          <div className='clientList'>
            {
              clients.map((client,i)=>(
                <Client key={client.socketId} username={client.username}/>
              ))
            }
          </div>
        </div>
        <button className='btn copybtn'>Copy ROOM ID</button>
        <button className='btn leavebtn'>Leave</button>
      </div>
      <div className='editorWrap'>
        <Editor/> 
      </div>
    </div>
  )
}

export default EditorPage
