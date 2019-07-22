import React, { useState } from "react";
import axios from 'axios';
<<<<<<< HEAD
=======
import { MDBInput, MDBBtn } from 'mdbreact';


const Login = ({history}) => {

>>>>>>> 538c11c0cae80e2bcf322cdad7517cadd25ff7ac
import {Button,Form} from 'react-bootstrap';
import {MDBInput} from 'mdbreact';
import HeaderNavbar from '../common/HeaderNavbar';
import './css/common.css'


const FormPage = () => {
    const localhost = 'http://localhost:9000'
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const login = () => {
        if (email && password) {
          let data = {
            email : email,
            password : password
          }
          axios.post(`${localhost}/member/login`, data)
            .then( res => {
              if (res.data != '환영합니다.'){
                alert(res.data)
              } else {
                history.push("/");
              }
            })
            .catch( error => {
              
            })
        } else {
            alert('내용을 입력하세요.')
        }
    }
  return (
<<<<<<< HEAD
      <div className="bigbox">
=======
      <div>
        <div class="col-12 mt-5">
            <form style={{marginLeft : '40%', marginRight : '40%'}}>
            <p className="h5 text-center mb-4">로그인</p>
            <div className="grey-text">
              <MDBInput
                label="이메일"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={e => {setEmail(e.target.value)}}
              />
              <MDBInput
                label="비밀번호"
                icon="lock"
                group
                type="password"
                validate
                onChange={e => {setPassword(e.target.value)}}
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={login}>로그인</MDBBtn>
            </div>
          </form>
        </div>
      {/* <div className="bigbox">
>>>>>>> 538c11c0cae80e2bcf322cdad7517cadd25ff7ac
        <div className="box">
          <Form>
            <h1>로그인</h1>
          <Form.Group controlId="formGroupEmail" >
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email"  onChange={e => {setEmail(e.target.value)}} />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password"  onChange={e => {setPassword(e.target.value)}}/>
          </Form.Group>
        </Form>
      </div>
      <div className="box2">
        <button onClick={login} className="button1">로그인</button>
        <button onClick={login} className="button2">회원가입</button>
<<<<<<< HEAD
      </div>
=======
      </div> */}
>>>>>>> 538c11c0cae80e2bcf322cdad7517cadd25ff7ac
    </div>
  );
};
}
export default Login;