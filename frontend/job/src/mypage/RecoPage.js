import React from 'react'
import _re from './_re.png'
import {Figure} from 'react-bootstrap'

const RecoPage = ()=>{
    return(
        <table align="center"> 
            <div className="title">
                <th width="200" class="tit">지역</th>
                <th width="300" class="tit">기업명/모집제목</th>
                <th width="100" class="tit">급여</th>
                <th width="200" class="tit">근무시간</th>
                <th width="200" class="tit">등록일</th>
            </div><br/><br/><br/>
            <div className="ti">
                <Figure.Image width={200} height={180} src={_re}/><br/><br/>
                <p className="pp"> 최근 구직활동 내역이 충분하지 않아, 스마트추천알바 공고를 추출하지 못했습니다.<br/>
                                    지원, 스크랩 등 구직활동을 하시면,<br/>
                                    더 정확한 결과를 보실 수 있습니다.</p>
                <a href="/mypage" target="_blank">
                    <span>오늘의 알바 보기</span>
                </a>
            </div>
        </table>
    );
}

export default RecoPage;