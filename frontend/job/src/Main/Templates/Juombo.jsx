import React from 'react'
import {Button} from 'react-bootstrap';
import '../Main.css'

const Juombo =()=>{
    return(
          <div className="MainTexBox" >
            <div align="left">
              <p class="peo">사람 중심 일자리 플랫폼</p>
              <p class="pe">사람 중심의 인력 채용.</p>
              <p class="pe">재능 기반의 일자리 매칭.</p>
              <p class="p">
                  당신의 재능을 보여주세요.<br/>
                  당신에게 가장 잘 맞는 일자리와 매칭됩니다.
              </p>
              <p>
                <Button variant="primary">일자리 구하기</Button>
              </p>
            </div>
          </div>
    )
}


export default Juombo