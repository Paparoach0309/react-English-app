import React, { useEffect } from 'react';
import imgMode1 from './../img/screenMode1.png';
import imgMode2 from './../img/screenMode2.png';
import Mode from './Mode';

const Training = () => {
    const modeClassName = ['easy-mode', 'hard-mode'];
    const modeTitle = ['Check words mode', 'Write words mode'];
    const modeDescription = ['Easy mode', 'Hard mode'];
    const path = ['check-mode', 'write-mode'];

    useEffect( () => {
        return () => {

        };
    });
    return (
        <div className='mode-page'>
            <Mode 
                modeClassName={modeClassName[0]}
                modeTitle={modeTitle[0]}
                modeDescription={modeDescription[0]}
                imgMode={imgMode1}
                path={path[0]}
            />
            <Mode
                modeClassName={modeClassName[1]}
                modeTitle={modeTitle[1]}
                modeDescription={modeDescription[1]}
                imgMode={imgMode2}
                path={path[1]}
            />
        </div>
    );
};
  

export default Training;