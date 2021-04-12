import React, { useEffect } from 'react';
import './MainPageTitlebar.css';
import logo from '../img/logo.svg';
import mail from '../img/menu_nav_email.svg';
import goTop from '../img/icon_go_top.svg';
import seal from '../img/footer_right_seal.svg';
import footerLogo from '../img/footer_logo.svg';

function MainPageTitlebar(props) {

    //向下滾動時郵寄查詢的縮放
    useEffect(() => {
        window.onscroll = function () {

            // 當瀏覽器捲軸往下捲150px
            const px = 150;
            if (document.documentElement.scrollTop > px) {
                document.getElementsByClassName("navitem__mail_text")[0].style.display = "none";
                document.getElementsByClassName("navitem_mail")[0].style.minWidth = "95px";
                document.getElementsByTagName("nav")[0].style.width = "997px";
            } else {
                document.getElementsByClassName("navitem__mail_text")[0].style.display = "block";
                document.getElementsByClassName("navitem_mail")[0].style.minWidth = "182px";
                document.getElementsByTagName("nav")[0].style.width = "1084px";
            }
        };
    }, [])

    // 回到頂部
    const goTopFunc = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="logo">
                    <img className="logoIcon" src={logo} alt="" />
                </div>
                <nav>
                    <div className="navitem">
                        <a className="navitem__text" href="../page/testPage">單位簡介</a>
                    </div>
                    <div className="navitem">
                        <a className="navitem__text" href="##">成員介紹</a>
                    </div>
                    <div className="navitem">
                        <a className="navitem__text" href="##">檔案展</a>
                    </div>
                    <div className="navitem">
                        <a className="navitem__text" href="##">文書檔案</a>
                    </div>
                    <div className="navitem">
                        <a className="navitem__text" href="##">法令規章</a>
                    </div>
                    <div className="navitem">
                        <a className="navitem__text" href="##">行政會議</a>
                    </div>
                    <div className="navitem">
                        <a className="navitem__text" href="##">下載專區</a>
                    </div>
                    <div className="navitem_mail">
                        <img className="mailIcon" src={mail} alt="" />
                        <a className="navitem__mail_text" href="##">郵寄查詢</a>
                    </div>
                </nav>
            </header>
            <div className="rightStickyContainer">
                <div className="topLline"></div>
                <div className="leftText">
                    藝術文史豐富檔案資產
			</div>
                <div className="rightText">
                    檔案道盡臺藝古今風華
			</div>
                <div className="bottomLline"></div>
                <div className="goTopIconContainer" onClick={goTopFunc}>
                    <img src={goTop} alt="" />
                </div>
            </div>
            <div className="test">{props.Content}</div>
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
        </div>
    );
}

export default MainPageTitlebar;