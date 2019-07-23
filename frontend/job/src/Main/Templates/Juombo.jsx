import React from 'react'
import {Button} from 'react-bootstrap';
import '../Main.css'

const Juombo =()=>{
    return(
          <div className="MainTexBox" >
            <div className="MainTexBox_1">
              <p class="MainTex">사람 중심 일자리 플랫폼</p>
              <p class="MainTex1">사람 중심의 인력 채용.</p>
              <p class="MainTex1">재능 기반의 일자리 매칭.</p>
              <p class="MainTex2">
                  당신의 재능을 보여주세요.<br/>
                  당신에게 가장 잘 맞는 일자리와 매칭됩니다.
              </p>
              <p>
                <Button variant="primary" onClick={job}>일자리 구하기</Button>
              </p>
            </div>
          </div>
    )
}

function job(e){
  e.preventDefault()
  window.location = './Board'
}

export default Juombo