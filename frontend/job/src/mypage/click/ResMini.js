import React from 'react'
import {Figure} from 'react-bootstrap'
import _mng from '../images/_mng.png'

const ResMini  = ()=>{
    return(
        <div>
            <hr class="line3"></hr>
                <div class="tb2">
                    <p class="te2"><Figure.Image width={100} height={200} src={_mng}/></p>
                    <li class="ui1">최근 1년 이내의 지원내역을 확인할 수 있습니다.</li>
                    <li class="ui2">지원 후 내 정보를 수정해도 지원에는 반영되지 않습니다.</li>
                </div>
                <table class="tk2">
                    <tr>
                        <td class="gg2" width={120}>조회기간</td>
                        <td class="jj2">
                            <input type="button" value="1주일"/>
                            <input type="button" value="1개월"/>
                            <input type="button" value="2개월"/>
                            <input type="button" value="3개월"/>
                        </td>
                        <td class="ii2">날짜 선택</td>
                        <td class="ii2"><input type="button" value="2019-04-17"/></td>
                        <td class="ii2"><span>~</span></td>
                        <td class="ii2"><input type="button" value="2019-07-17"/></td>
                    </tr>
                    <tr>
                        <td class="hh2" width={163}>일자리명/제목</td>
                        <td colSpan="5">
                            <input type="text" placeholder="일자리 명, 제목으로 검색하세요."/>
                            <input type="button" value="검색"/>
                        </td>
                    </tr>
                </table>
                <table align="center"> 
                    <div className="title2">
                        <th width="200" class="tit">지원일</th>
                        <th width="300" class="tit">지원내역</th>
                        <th width="500" class="tit">일자리명 / 모집제목</th>
                        <th width="100" class="tit">급여</th>
                        <th width="200" class="tit">마감일</th>
                    </div><br/><br/><br/>
                    <div className="ti">
                        <p className="pp2"> 지원한 공고가 없습니다.</p>
                    </div>
                </table>
        </div>
    );
}

export default ResMini;