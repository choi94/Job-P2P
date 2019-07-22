import React from 'react'
import {Figure} from 'react-bootstrap'
import _mng from '../images/_mng.png'

const ResMini  = ()=>{
    return(
        <div>
            <hr class="line"></hr>
            <ul class="ui">
                <Figure.Image width={100} height={200} src={_mng}/>
                <li class="ui1">최근 1년 이내의 지원내역을 확인할 수 있습니다.</li>
                <li class="ui2">지원 후 내 정보를 수정해도 지원에는 반영되지 않습니다.</li>
            </ul>
            <table align=""> 
                <div class="title">
                    <th width="200">지원일</th>
                    <th width="300">지원내역</th>
                    <th width="500">일자리명 / 모집제목</th>
                    <th width="100">급여</th>
                    <th width="200">마감일</th>
                </div><br/><br/><br/>
                <div>
                    <p class="pp"> 지원한 공고가 없습니다.</p>
                </div>
            </table>
        </div>
    );
}

export default ResMini;