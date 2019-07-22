import React, { useState } from "react";
import axios from 'axios';
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
            axios.post(`${localhost}/member/`)
        } else {
            alert('내용을 입력하세요.')
        }
    }
  return (
      <div className="bigbox">
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
      </div>
    </div>
  );
};

export default FormPage;