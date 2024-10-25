import React from 'react'
import './main.scss'

function Main() {
  return (
    <div className="main">
        <div className="main-block">
            <div className="main-block__title">AWWWDDE</div> 
            <div className="main-block__pic">
                <img src="" alt="" className="main-block__pic-img" />
            </div>
            <div className="main-block-descr">
                <div className="main-block-descr_text">Suspendisse quis tincidunt lacus. In hendrerit tristique elit, vitae rhoncus nulla iaculis ac. Pellentesque sodales justo quis sapien tristique feugiat. Integer placerat diam quis tellus vestibulum, ut ultricies mi finibus. Ut congue, lectus vel aliquam pulvinar, neque orci ultrices augue, vel viverra dui arcu id velit. In maximus non felis quis dictum. Nunc convallis vehicula massa scelerisque finibus. Etiam et sollicitudin nunc, sit amet consequat nulla.</div>
            </div>
            <div className="main-block-btns">
                <button className="main-block-btns__buts">Portfolio</button>
                <button className="main-block-btns__buts">Contact</button>
            </div>
        </div>
    </div>
  )
}

export default Main
