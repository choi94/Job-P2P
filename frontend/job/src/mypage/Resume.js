import React, {Component} from 'react'
import _img from './images/_img.gif'
import _icon from './images/_icon.gif'
import _search from './images/_search.gif'
import {Figure, Button} from 'react-bootstrap'

class Resume extends Component{
    render(){
        return(
            <div>
                <div class="">
                    <br/>
                    <h2 class="gd">사진 선택</h2>
                    <hr class="f"/>
                    <p class="dm">권장 사진 사이즈는 103*132픽셀이며, gif, jpg, jpge 이미지 파일만 등록 가능합니다.</p>
                </div>
                    <div>
                        <table class="cm">
                            <tr>
                                <td class="bm"><Figure.Image width={103} height={132} src={_img}/></td>
                                <td>
                                    <p class="fm">이런 사진이 좋아요 !</p>
                                    <p class="ce">지나치게 보정을 하지 않은 실물과 유사한 사진이 좋습니다.</p>
                                    <table class="em">
                                        <input type="file"/>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table class="gm">
                            <tr align="center">
                                <td>
                                    <p class="ce">After 원본사진</p>
                                </td>
                                <td>
                                    <p class="ce">Before 사진</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="hm">
                                    <span class="hm"><Figure.Image width={200} height={150} src={_search}/></span>
                                    <span class="im"><Figure.Image width={10} height={10} src={_icon}/></span>
                                    <span class="im"><Figure.Image width={103} height={132} src={_search}/></span>
                                </td>
                            </tr>
                        </table>
                    </div>
                <Button>등록</Button>
            </div>
        )
    }
}

export default Resume