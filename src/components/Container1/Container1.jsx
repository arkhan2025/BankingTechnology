import React from 'react'
import '../../App.css';
import play from '../../assets/play-circle.png'
import './Container1.css'


const Container1
 = () => {
     return (
         <div className='container1'>
            <div className="head">
              <h6 className='top'>
                Super. Simple. Banking.
            </h6>
            <h1 className='heading'>
                Banking technology <br/>that has your back.
            </h1>
            <h6 className='bottom'>
                Simple, transparent banking. No hidden fees
                 and free overdrafts.
            </h6>
            </div>
            <div className="btn">
            <button className='btn1'>
                <img src={play}/>Demo</button>
            <button className='btn2'>SignUp</button>
            </div> 

            <div className="cards-viewport">
              <div className="cards">
                <div className="card">
                  <h3 className="title">Untitled</h3>
                  <p>PHEONIX&nbsp;06/24</p>
                  <h3 className="no">1234 1234 1234 1234</h3>
                </div>
                <div className="card">
                  <h3 className="title">Untitled</h3>
                  <p>OLIVIA RHYE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;06/24</p>
                  <h3 className="no">1234 1234 1234 1234</h3>
                </div>
                <div className="card">
                  <h3 className="title">Untitled</h3>
                  <p>LANA STEINER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;06/24</p>
                  <h3 className="no">1234 1234 1234 1234</h3>
                </div>
                <div className="card">
                  <h3 className="title">Untitled</h3>
                  <p>DEMI WILKINSON&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;06/24</p>
                  <h3 className="no">1234 1234 1234 1234</h3>
                </div>
                <div className="card">
                  <h3 className="title">Untitled</h3>
                  <p>CANDICE WU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;06/24</p>
                  <h3 className="no">1234 1234 1234 1234</h3>
                </div>
              </div>
            </div>         
         </div>
     );
 }
export default Container1