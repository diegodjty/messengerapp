import React,{ useEffect,useState} from 'react'
import styled from '@emotion/styled'
import {Avatar} from '@material-ui/core'
import db from '../firebase/firebase.js'
const SidebarChatsContainer = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;

    &:hover{
        background-color: #ebebeb;
    }

    .sidebarChat__info{
        margin-left: 15px;
    }

    .sidebarChat__info > h2 {
        font-size: 16px;
        margin-bottom: 8px;   
    }
`;


function SidebarChats({id,name,addNewChat}) {

    const [seed, setSeed] = useState(0)

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])

    const createChat = () =>{
        const roomName = prompt("Please enter name for chat");
        if(roomName){
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return !addNewChat ? (
        <SidebarChatsContainer>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last Message</p>
            </div>
        </SidebarChatsContainer>
    ) : (
        <SidebarChatsContainer onClick={createChat}>
            <h2>Add New Chat</h2>
        </SidebarChatsContainer>
    )
}

export default SidebarChats
