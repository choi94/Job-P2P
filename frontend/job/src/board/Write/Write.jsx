import React,{ useState } from 'react'
import axios from 'axios'

import WriteLocal from './Template/WriteLocal'

const Write = () => {

    const write_summit = w => {
        console.dir(w)
    }

    return(
            <div>
                <WriteLocal write_summit={write_summit}/>
            </div>
        );
}

export default Write



