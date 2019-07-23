import React from 'react'
import {Button} from 'react-bootstrap'

const ClientInfo =()=>{
    return (
    <div>
            <div>
                <p class="pb">회원정보  <Button variant="warning">수정</Button></p>
               
                <p class="aa">JOB P2P를 더이상 이용하지 않는다면 회원탈퇴</p>
            </div>
            <div>
                <p class="pb">회원탈퇴 <Button variant="success">탈퇴</Button></p>
                <p class="aa">안전한 정보보호를 위해 연락처 일부만 확인 가능하며,<br/>
                        수정화면에서 정확한 연락처 확인이 가능합니다.</p>
            </div>
     </div>
    );
}

export default ClientInfo