import React from 'react'
import {Figure} from 'react-bootstrap'
import _mng from '../images/_mng.png'

const SupMini  = ()=>{
    return(
        <div align="">
            <hr class="line"></hr>
            <ul class="ui">
                <Figure.Image width={100} height={200} src={_mng}/>
                <li class="ui1">최근 1년 이내의 등록내역을 확인할 수 있습니다.</li>
                <li class="ui2">등록 후 내 정보를 수정해도 지원에는 반영되지 않습니다.</li>
            </ul>
            <table align=""> 
                <div className="title">
                    <th width="200">등록일</th>
                    <th width="300">등록내역</th>
                    <th width="500">일자리명 / 모집제목</th>
                    <th width="100">급여</th>
                    <th width="200">마감일</th>
                </div><br/><br/><br/>
                <div>
                    <p className="pp"> 등록한 공고가 없습니다.</p>
                </div>
            </table>
        </div>
    );
}

export default SupMini;