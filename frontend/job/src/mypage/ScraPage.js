import React from 'react'
import _sc from './_sc.png'
import {Figure} from 'react-bootstrap'

const ScraPage = ()=>{
    return(
        <table align="center"> 
            <div className="title">
                <th width="200" class="tit">스크랩일</th>
                <th width="300" class="tit">지역</th>
                <th width="500" class="tit">기업명/모집제목</th>
                <th width="100" class="tit">급여</th>
                <th width="200" class="tit">마감일</th>
            </div><br/><br/><br/>
            <div className="ti">
                <Figure.Image width={200} height={180} src={_sc}/><br/><br/>
                <p className="pp"> 스크랩한 공고가 없습니다.<br/>
                                   마음에 드는 공고를 스크랩 해두면 편리하게 관리할 수 있습니다.</p>
                <a href="/mypage" target="_blank">
                    <span>전체 알바 보기</span>
                </a>
            </div>
        </table>
    );
}

export default ScraPage;