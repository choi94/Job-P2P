import React from 'react'
import {Figure} from 'react-bootstrap'
import _bg from '../images/_bg.jpg'
import _mng from '../images/_mng.png'
import _sc from '../images/_sc.png'

const SupPage  = ()=>{
    return(
        <div class="ff">
            <h1>
                <div class="header3">
                    <a href="/"><Figure.Image width={100} height={200} src={_bg}/></a>
                    <span class="head3">등록 현황</span>
                </div>
                <table class="header2" align="right">
                    <th><a href="/">홈 |</a></th>
                    <th><a href="/">개인서비스 |</a></th>
                    <th><a href="/">채용정보 |</a></th>
                    <th><a href="/">FAQ |</a></th>
                    <th><a href="/">캠페인</a></th>
                </table>
            </h1>
            <hr class="line2"></hr>
                <div class="tb">
                    <p class="te"><Figure.Image width={100} height={200} src={_mng}/></p>
                    <li class="ui">최근 1년 이내의 등록내역을 확인할 수 있습니다.</li>
                    <li class="ui">등록 후 내 정보를 수정해도 지원에는 반영되지 않습니다.</li>
                </div>
                <table class="side">
                    <div align="left">
                        <td>
                        <br/>
                            <h3 class="j">개인 서비스</h3>
                            <br/>
                            <h3 class="j">알바 활동 관리</h3>
                                <a href="/respage" class="cc">지원 현황</a><br/>
                                <a href="/suppage" class="cc">등록 현황</a><br/>
                            <h3 class="j">관심 채용 정보</h3>
                                <a href="/respage" class="cc">추천 알바</a><br/>
                                <a href="/suppage" class="cc">스크랩 알바</a><br/>
                            <h3 class="j">회원 정보 관리</h3>
                                <a href="/info" class="cc">회원 정보 확인·수정</a><br/>
                                <a href="/info" class="cc">비밀번호 변경</a><br/>
                                <a href="/info" class="cc">문자·Email 수신 설정</a><br/>
                                <a href="/resume" class="cc">내 사진 관리</a><br/><br/>
                        </td>
                    </div>
                </table>
                <table class="tk">
                    <tr>
                        <td class="gg" width={120}>조회기간</td>
                        <td>
                            <input type="button" value="1주일"/>
                            <input type="button" value="1개월"/>
                            <input type="button" value="2개월"/>
                            <input type="button" value="3개월"/>
                        </td>
                        <td class="ii">날짜 선택</td>
                        <td class="ii"><input type="button" value="2019-04-17"/></td>
                        <td class="ii"><span>~</span></td>
                        <td><input type="button" value="2019-07-17"/></td>
                    </tr>
                    <tr>
                        <td class="hh" width={163}>일자리명/제목</td>
                        <td colSpan="5">
                            <input type="text" placeholder="일자리 명, 제목으로 검색하세요." maxlength="150"/>
                            <input type="button" value="검색"/>
                        </td>
                    </tr>
                </table>
                <table align="center"> 
                    <div className="title">
                        <th width="200" class="tit">등록일</th>
                        <th width="300" class="tit">등록내역</th>
                        <th width="500" class="tit">일자리명 / 모집제목</th>
                        <th width="100" class="tit">급여</th>
                        <th width="200" class="tit">마감일</th>
                    </div><br/><br/><br/>
                    <div className="ti">
                        <Figure.Image width={200} height={180} src={_sc}/><br/><br/>
                        <p className="pp"> 등록한 공고가 없습니다.</p>
                        <a href="/mypage" target="_blank">
                        </a>
                    </div>
                </table>
        </div>
    );
}

export default SupPage;
