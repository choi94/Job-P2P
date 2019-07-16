import React from 'react'
import _or from './images/_or.png'
import {Figure} from 'react-bootstrap'

const AlignPage = ()=>{
    return(
        <table align="center"> 
            <div className="title">
                <th width="300" class="tit">지역</th>
                <th width="500" class="tit">기업명/모집제목</th>
                <th width="100" class="tit">급여</th>
                <th width="200" class="tit">근무시간</th>
                <th width="200" class="tit">등록일</th>
            </div><br/><br/><br/>
            <div className="ti">
                <Figure.Image width={200} height={180} src={_or}/><br/><br/>
                <p className="pp"> 맞춤조건을 설정하시면<br/>
                                   조건에 딱 맞는 공고를 확인할 수 있습니다.</p>
                <a href="/mypage" target="_blank">
                    <span>오늘의 알바 보기</span>
                </a>
            </div>
        </table>
    );
}

export default AlignPage;