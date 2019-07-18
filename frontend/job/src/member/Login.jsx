import React, { useState } from "react";
import axios from 'axios';
import { MDBInput, MDBBtn } from 'mdbreact';
import HeaderNavbar from '../common/HeaderNavbar';


const FormPage = () => {

    const localhost = 'http://localhost:9000'

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = () => {
        if (email && password) {
            axios.post()
        } else {
            alert('내용을 입력하세요.')
        }
    }

  return (
      <div>
        <HeaderNavbar></HeaderNavbar>
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
    </div>
  );
};

export default FormPage;