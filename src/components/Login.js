import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core'
import {auth,provider} from '../firebase/firebase'
import { useStateValue } from '../redux/StateProvider';
import { actionTypes } from '../redux/reducer';

const LoginContainer = styled.div`
    background-color: #fff;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;

    .login__box{
        padding: 100px;
        text-align: center;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px
    }
    .login__box > img{
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    .login__box > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;

    }
`;

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => console.log(error.message))
    }

    return (
        <LoginContainer>
            <div className="login__box">
                <img src={require('../img/whatsapp.png')} alt=""/>
                <div className="login__text">
                    <h1>Sing in to whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn} >
                    Sign In With Google
                </Button>
            </div>
        </LoginContainer>
    )
}

export default Login
