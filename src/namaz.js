import React from 'react';

function Namaz(props) {
    return(
        <div>
            <h1> This is Salah TimeTable. Please remeber it. Thank you</h1>
            <h2> Fajar {props.ftime}</h2>
            <h2> Zuhar {props.ztime}</h2>
            <h2> Asar {props.atime}</h2>
            <h2> Maghrib {props.mtime}</h2>
            <h2> Isha {props.itime}</h2>
        </div>
    )
}

export default Namaz;