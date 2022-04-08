import React from 'react';
import Home from './Home/Home';

const Base = ({children})=>{
    return <div>
        <header>
            <div className='row bg-danger m-0 p-1'>
                <div className='col-4 bg-success'>RecruitZ</div>
                <div className='col-4 bg-light'>zz</div>
                {children}
            </div>
        </header>
    </div>
}

export default Base;
