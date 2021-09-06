import React, { useState, useEffect, useRef } from 'react'


const Todo = () => {

    const inputUseRef = useRef()

    const [state, setstate] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [inputValue, setInputValue] = useState('')

    const [editUpdate, seteditUpdate] = useState([])

    useEffect(() => {


    }, [])

    const todoInput = (e) => {
        let inputValue = e.target.value
        setInputValue(inputValue);
        if (e.keyCode === 13) {
            setstate([...state, inputValue])
            setInputValue('')
        }

    }    

   

    const deleted = (index) => {

        let stateSplice = state.filter((item, i) => i !== index);

        setstate(stateSplice)
    }

    const edit = (index) => {
        let stateSplice = state.find((item, i) => i === index);
        setSelectedIndex(index)
        console.log(stateSplice)
        setInputValue(stateSplice)
        // inputUseRef.current.value = stateSplice
    }

    const update = () => {
        let stateSplice = state.splice(selectedIndex, 1, inputValue);
        // console.log(stateSplice)
        setstate([...state])


    }
    return (
        <div className="py-5">
            <div className="row">
                <div className="col-6 mx-auto">
                  <div className="d-flex">
                  <input value={inputValue}  onChange={todoInput} onKeyUp={todoInput} type="text" className="form-control" placeholder="todo" />
                    <button className="" onClick={update}>update</button>
                  </div>
                </div>
            </div>
            <div>
                <ol>
                    {state.map((item, index) => (
                        <li key={index}><span>{item}</span> <span onClick={() => edit(index)} className="text-danger">edit</span> <span onClick={() => deleted(index)} className="text-danger">delet</span></li>
                    ))}

                </ol>
            </div>
        </div>
    )
}

export default Todo
