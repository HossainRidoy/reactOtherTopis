import React,{useState} from 'react'
import Image1 from "../../assets/images/1.jpg"
import Image2 from "../../assets/images/2.jpg"
import Image3 from "../../assets/images/3.jpg"
import Image4 from "../../assets/images/4.jpg"
import Image5 from "../../assets/images/5.jpg"


const shahriyar = [Image1, Image2, Image3, Image4, Image5]
console.log()

const Product_view = () => {

    const [imgselet, setimgselet] = useState()

    const imgsrvvalue = (item) => {
        setimgselet(item)
    }
    return (
        <div className="py-5 bg-light">
            <div className="row m-0">
                <div className="col-3 mx-auto">
                    <div className="border">
                        <div className="overflow-hidden">
                            <img className="w-100" src={imgselet ? imgselet:shahriyar[0]} alt="" />
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            {shahriyar && shahriyar.length > 0 && shahriyar.map((item, index) => (
                                <div key={index} onClick={()=>imgsrvvalue(item)} className="me-2"><img className="img-fluid" src={item} alt="" /></div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_view
