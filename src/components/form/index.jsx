import React, { useState, useRef, useEffect } from 'react'
import { useForm } from "react-hook-form";



const Form = () => {

    const [userLists, setuserLists] = useState([])
    const [imgView, setimgView] = useState()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        setuserLists([...userLists, data])
        reset()
    }
    const deleted = (index) => {
        setuserLists(userLists.filter((item,i)=>i !== index))
    }

    // const onChange = (e) => {
    //     let imgFile = e.target.files[0]
    //     let newfilerender = new FileReader();
    //     newfilerender.readAsDataURL(imgFile)
    //     newfilerender.onload = function(e){
    //         setimgView(e.target.result)

    //     }
    // }



    return (
        <div className="py-5 col-6 mx-auto">
            <h1 className='py-5'>Form Application</h1>

            <form action="" onSubmit={handleSubmit(onSubmit)} className="border p-5">

                {/* <div className="mb-4">
                    <input onChange={onChange} type="file"/>
                    {errors.fullName && <div className="text-danger">This field is required</div>}
                    <div>
                        <img style={{ width: "200px", height: "200px" }}  src={imgView} alt=""  />
                    </div>
                </div> */}

                <div className="mb-4">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text"
                        placeholder="Full Name"
                        id="fullName"
                        className="form-control"
                        {...register("fullName", { required: true })}
                    />
                    {errors.fullName && <span className="text-danger">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label >State</label>
                    <select className="form-control"  {...register("state", { required: true })}>
                        <option value="">-----Selet State-----</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Barishal">Barishal</option>
                    </select>
                    {errors.state && <span className="text-danger">This field is required state</span>}
                </div>

                <div className="mb-4">
                    <div>Gender</div>
                    <span className="me-3">
                        <label className="me-2" htmlFor="male">Male</label>
                        <input type="radio"
                            id="male"
                            name="gender"
                            value="Male"
                            {...register("gender", { required: true })}
                        />
                    </span>
                    <span className="me-3">
                        <label className="me-2" htmlFor="female">Female</label>
                        <input type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                            {...register("gender", { required: true })}
                        />
                    </span>
                    <span className="me-3">
                        <label className="me-2" htmlFor="Others">Others</label>
                        <input type="radio"
                            id="Others"
                            name="gender"
                            value="Others"
                            {...register("gender", { required: true })}
                        />
                    </span>
                    {errors.gender && <div className="text-danger">This field is required Gender</div>}
                </div>
                <div className="mb-4">
                    <div>Language</div>
                    <span className="me-3">
                        <label className="me-2" htmlFor="Bangla">Bangla</label>
                        <input type="checkbox"
                            id="Bangla"
                            name="language"
                            value="Bangla"
                            {...register("language", { required: true })}
                        />
                    </span>
                    <span className="me-3">
                        <label className="me-2" htmlFor="English">English</label>
                        <input type="checkbox"
                            id="English"
                            name="language"
                            value="English"
                            {...register("language", { required: true })}
                        />
                    </span>
                    <span className="me-3">
                        <label className="me-2" htmlFor="Arbi">Arbi</label>
                        <input type="checkbox"
                            id="Arbi"
                            name="language"
                            value="Arbi"
                            {...register("language", { required: true })}
                        />
                    </span>
                    {errors.language && <div className="text-danger">This field is required Language</div>}
                </div>




                <button type="submit" className="mt-4">Submit</button>
            </form>


            {userLists.map((item, index) => (
                <div key={index} className="">.
                    <span className="me-3">Full Name: {item.fullName}</span>
                    <span className="me-3">State: {item.state}</span>
                    <span className="me-3">Gender: {item.gender}</span>
                    <span className="me-3">Language: {item.language[0]}</span>
                    <div onClick={() => deleted(index)} className="text-danger">delete</div>
                </div>

            ))}



        </div>
    )
}

export default Form
