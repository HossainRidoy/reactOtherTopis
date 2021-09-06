import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Fade from 'react-reveal/Fade';


function Date_figar() {

    const [startDate, setStartDate] = useState(new Date());

    const [day, setday] = useState(new Date().getDate());
    const [month, setmonth] = useState(new Date().getMonth() + 1);
    const [year, setyear] = useState(new Date().getFullYear());

    const dateHandle = ((date) => {
        setStartDate(date)
        let dt = new Date(date)
        setday(dt.getDate())
        setmonth(dt.getMonth() + 1)
        setyear(dt.getFullYear())

    })

    console.log()
    return (
        <section id="datefigar" className="py-5">

            <Fade left>
                <h1>React Reveal</h1>
            </Fade>
            <label htmlFor="date"></label>
            <span className="d-flex fs-1 my-5 position-relative">
                <DatePicker id="date" selected={startDate} onChange={(date) => dateHandle(date)} className="position-absolute d-none" />
                <label htmlFor="date" className="text-center bg-success">
                    <div className='bg-white px-4 text-success'>{month}</div>
                    <div className='bg-success px-4 text-white'>Month</div>
                </label>
                <label htmlFor="date" className="text-center bg-warning">
                    <div className='bg-white px-4 text-warning'>{day}</div>
                    <div className='bg-warning px-4 text-white'>Day</div>
                </label>
                <label htmlFor="date" className="text-center bg-info">
                    <div className='bg-white px-4 text-info'>{year}</div>
                    <div className='bg-info px-4 text-white'>Year</div>
                </label>
            </span>


        </section>
    )
}

export default Date_figar
