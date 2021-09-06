import React from 'react'
import BuModal from '../components/buModal'
import Date_figar from '../components/date-figar'
import Form from '../components/form'
import Header from '../components/Header'
import Lodding from '../components/lodding'
import Mobile_slide from '../components/mobile-slide'
import Modal_slide from '../components/modal-slide'
import ModalVideo from '../components/modalVideo'
import More_less from '../components/more-less'
import Product_view from '../components/product-view'
import Product_view_2 from '../components/product-view-2'
import Products from '../components/products'
import Scrollbar from '../components/scrollbar'
import Search from '../components/search'
import Slide1 from "../components/slide1"
import Timing from '../components/timing'
import Todo from '../components/todo'
import Beatnik from '../components/beatnik'
import Todo2 from '../components/todo2'
import Github from '../components/github'

const Pages = () => {
    return (

        <div className="container">
            <Header/>
            <Slide1 />
            <Mobile_slide/>
            <Timing />
            <Date_figar />
            <Product_view />
            <Product_view_2 />
            <More_less />
            <Products/>
            <Scrollbar/>
            <ModalVideo/>
            <Modal_slide/>
            <BuModal/>
            <Search/>
            <Todo/>
            {/* <Beatnik/> */}
            <Form/>
            <Lodding/>
            <Todo2/>
            <Github/>
        </div>

    )
}

export default Pages
