import React from 'react';
import './Footer.css';
import seal from '../../img/footer_right_seal.svg';
import footerLogo from '../../img/footer_logo.svg';

export const Footer = (props) => {
    return (
        <footer>
            <img className="footerRightSeal" src={seal} alt="" height="324px" ></img>
            <div className="footerLeftBlock">
                <img className="footerLogo" src={footerLogo} alt="" width="250px"></img>
                <div className="footerFlexContainer">
                    <div className="addrContainer">
                        <p className="footerTitle">ADDRESS</p>
                        <p className="bottomLine"></p>
                        <p className="footerText">220307新北市板橋區大觀路1段59號</p>
                    </div>
                    <div className="telContainer">
                        <p className="footerTitle">TEL</p>
                        <p className="bottomLine"></p>
                        <p className="footerText">02-22722181</p>
                    </div>
                </div>
                <div className="footerFlexContainer">
                    <div className="timeContainer">
                        <p className="footerTitle">TIME</p>
                        <p className="bottomLine"></p>
                        <p className="footerText">Mon~Fri/08:00-12:00.13:30-15:30</p>
                    </div>
                    <div className="faxContainer">
                        <p className="footerTitle">FAX</p>
                        <p className="bottomLine"></p>
                        <p className="footerText">02-29601822</p>
                    </div>
                </div>
            </div>
            <div className="footerBottomBlock">
                <p className="footerBottomBlockText">本網站為國立臺灣藝術大學總務處版權所有，未經允許，不得以任何形式複製和採用</p>
            </div>
        </footer>
    )
}