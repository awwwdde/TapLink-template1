import React from 'react'
import './main.scss'
import Footer from '../../components/footer/Footer'

function Main() {
  return (
    <div className="main">
        <div className="main-block">
            <div className="main-block__title">TEMPLATE</div>
            <div className="main-block__about">Suspendisse quis tincidunt lacus. In hendrerit tristique elit, vitae rhoncus nulla iaculis ac. Pellentesque sodales justo quis sapien tristique feugiat. Integer placerat diam quis tellus vestibulum, ut ultricies mi finibus. Ut congue, lectus vel aliquam pulvinar, neque orci ultrices augue, vel viverra dui arcu id velit. In maximus non felis quis dictum. Nunc convallis vehicula massa scelerisque finibus. Etiam et sollicitudin nunc, sit amet consequat nulla.</div>
            <div className="main-block__exp">My experience</div>
            <div className="main-block__work">Work</div>
            <div className="main-block__contact">Contact</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Main
