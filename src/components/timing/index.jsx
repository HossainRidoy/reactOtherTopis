import React, { useState, useEffect } from 'react'

const Timing = () => {

    const [day, setday] = useState(0)
    const [hour, sethour] = useState(0)
    const [minit, setminit] = useState(0)
    const [secent, setsecent] = useState(0)

    let fixed_time = new Date("12 30 2021 23:59:59")

    useEffect(() => {
        setInterval(() => {
            let today_time = new Date().getTime()
            let timebaki = fixed_time - today_time

            let day = Math.floor(timebaki / (1000 * 60 * 60 * 24))
            let houre = Math.floor(timebaki % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            let minit = Math.floor(timebaki % (1000 * 60 * 60) / (1000 * 60))
            let secend = Math.floor(timebaki % (1000 * 60) / (1000))

            setday(day)
            sethour(houre)
            setminit(minit)
            setsecent(secend)

            if (timebaki < 0) {
                setday(0)
                sethour(0)
                setminit(0)
                setsecent(0)
            }

        }, 1000)
    }, [])

    return (
        <section className="py-5 bg-light">

            <span className="d-flex fs-1 my-5">
                <div className="text-center bg-info">
                    <div className='bg-white px-4 text-info'>{day}</div>
                    <div className='bg-info px-4 text-white'>Day</div>
                </div>
                <div className="text-center bg-success">
                    <div className='bg-white px-4 text-success'>{hour}</div>
                    <div className='bg-success px-4 text-white'>Hours</div>
                </div>
                <div className="text-center bg-warning">
                    <div className='bg-white px-4 text-warning'>{minit}</div>
                    <div className='bg-warning px-4 text-white'>Minits</div>
                </div>
                <div className="text-center bg-">
                    <div className='bg-white px-4 text-danger'>{secent}</div>
                    <div className='bg-danger px-4 text-white'>Secend</div>
                </div>
            </span>


        </section>
    )
}

export default Timing
