import React from 'react'
import styled from '@emotion/styled'
import {Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLargeOutlined'
import ChatIcon from '@material-ui/icons/ChatOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import SidebarChats from './SidebarChat';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.20;
    .sidebar__header{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-right: 1px solid lightgray;
    }
    .sidebar__headerRight{
        display: flex;
        align-items: center;
        min-width: 5vw;
    }
   .sidebar__search{
      display: flex;
      align-items: center;
      background-color: #f6f6f6;
      height: 39px;
      padding: 10px; 
   }
   .sidebar__searchContainer{
       display: flex;
       align-items: center;
       background-color: white;
       width: 100%;
       height: 35px;
       border-radius: 20px;
   }
   .sidebar__searchContainer > .MuiSvgIcon-root {
    color: gray;
    padding: 10px;
   }
   .sidebar__searchContainer > input {
    border: none;
    margin-left: 10px;
   }
   .sidebar__chats{
       display: flex;
       flex-direction: column;
       flex: 1;
       overflow: scroll;
       background-color: white;
   }

`;

function Sidebar() {
    return (

        <SidebarContainer>
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon /> 
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
               
            </div>

            <div className="sidebar__chats">
                <SidebarChats addNewChat={'d'} />
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
            </div>

        </SidebarContainer>
    )
}

export default Sidebar
