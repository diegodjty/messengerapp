import React,{useState,useEffect} from 'react'
import styled from '@emotion/styled'
import {Avatar,IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import AttachFileIcon from '@material-ui/icons/AttachFileOutlined'
import Morevert from '@material-ui/icons/MoreVertOutlined'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticonOutlined'
import MicIcon from '@material-ui/icons/MicOutlined'

const ChatContainer = styled.div`
    flex: .65;
    display: flex;
    flex-direction: column;
    .chat__header{
        padding: 20px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid lightgray;
    }
    .chat__headerInfo{
        flex: 1;
        padding-left: 20px;
    }
    .chat__headerInfo > h3 {
        margin-bottom: 3px;
        font-weight: 500;
    }
    .chat__headerInfo > p{
        color: gray;
    }

    .chat__headerRight {
        display: flex;
        justify-content: space-between;
        min-width: 100px;
    }

    .chat__body{
        flex: 1;
        background: #0F2027;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        overflow: scroll;
        padding: 30px;
    }
    .chat__message{
        position: relative;
        font-size: 16px;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
        width: fit-content;
        margin-bottom: 30px;
    }
    .chat__reciever{
        margin-left: auto;
        background-color: #dcf8c6;
    }
    .chat__name{
        position: absolute;
        top: -15px;
        font-size: xx-small;
        font-weight: bold;
    }
    .chat__timestamp{
        margin-left: 10px;
        font-size: xx-small;
    }

    .chat__footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 62px;
    }
    .chat__footer> form{
        flex: 1;
        display: flex;
    }
    .chat__footer > form > input{
        flex: 1;
        border-radius: 30px;
        padding: 10px;
        border: none;
    }
    .chat__footer > form > button {
        display: none;
    }
    .chat__footer > .MuiSvgIcon-root {
        padding: 10px;
        color: gray;
    }
`;

function Chat() {

    const [seed, setSeed] = useState(0)
    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input)
        setInput('')
    }

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])

    return (
        <ChatContainer>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <Morevert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message chat__reciever">
                <span className="chat__name">Diego Taveras</span>
                    Hey guys 
                <span className="chat__timestamp">3:52pm</span>                   
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" onChange={(e) =>setInput(e.target.value)} placeholder="Type a message "/>
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </ChatContainer>
    )
}
 
export default Chat
