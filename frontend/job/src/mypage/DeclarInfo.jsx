import React from 'react'
import {Button} from 'react-bootstrap'
const DeclarInfo =()=>{

    return(
        <table>
            <tr>
                <td class="bb">지원 평점</td>
                <td class="cc">3점 / 5점</td>
            </tr>
            <tr>
                <td class="bb">의뢰 평점</td>
                <td class="cc">0점 / 5점</td>
            </tr>
            <tr>
                <td class="bb">E-메일</td>
                <td class="cc">Hong@naver.com</td>
            </tr>
            <tr>
                <td class="bb">연락처</td>
                <td class="cc">010-0000-0000</td>
            </tr>
            <tr>
                <td class="bb">이름</td>
                <td class="cc">홍길동</td>
            </tr>
            <tr>
                <td class="bb">성별</td>
                <td class="cc">남</td>
            </tr>
            <tr>
                <td class="bb">주민번호</td>
                <td class="cc">950525-1******</td>
            </tr>
            <tr>
                <td class="bb">주소</td>
                <td class="cc">서울시 강남구</td>
            </tr>
        </table>
    )
}
export default DeclarInfo