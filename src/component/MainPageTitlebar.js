import React, { useEffect } from 'react';
import './MainPageTitlebar.css';
import logo from '../img/logo.svg';
import mail from '../img/menu_nav_email.svg';
import goTop from '../img/icon_go_top.svg';
import seal from '../img/footer_right_seal.svg';
import footerLogo from '../img/footer_logo.svg';
import { useWindowSize } from '../SelfHooks/useWindowSize';

export const MainPageTitlebar = (props) => {

    const [Width, Height] = useWindowSize();
    //向下滾動時郵寄查詢的縮放

    useEffect(() => {
        window.onscroll = function () {
            // 當瀏覽器捲軸往下捲150px
            if (Width >= 1300) {
                const px = 150;
                if (document.documentElement.scrollTop > px) {
                    document.getElementsByClassName("navitem__mail_text")[0].style.display = "none";
                    document.getElementsByClassName("navitem_mail")[0].style.minWidth = "95px";
                    document.getElementsByTagName("nav")[0].style.width = "971px";
                } else {
                    document.getElementsByClassName("navitem__mail_text")[0].style.display = "block";
                    document.getElementsByClassName("navitem_mail")[0].style.minWidth = "182px";
                    document.getElementsByTagName("nav")[0].style.width = "1058px";
                }
            }
        };
    }, [Width])

    // 回到頂部
    const goTopFunc = () => {
        window.scrollTo(0, 0);
    }

    return (
        // <div className="App">
        <>
            {Width >= 1024 &&
                <>
                    <header className="App-header">
                        <a className="logo" href="/">
                            <img className="logoIcon" src={logo} alt="" />
                        </a>
                        <nav>
                            <div className="navitem">
                                <a className="navitem__text" href="/books">單位簡介</a>
                            </div>
                            <div className="navitem">
                                <a className="navitem__text" href="##">成員介紹</a>
                            </div>
                            {/* <div className="navitem">
                                <a className="navitem__text" href="##">檔案展</a>
                            </div>
                            <div className="navitem">
                                <a className="navitem__text" href="##">文書檔案</a>
                            </div> */}
                            <div className="navitem">
                                <a className="navitem__text" href="##">法令規章</a>
                            </div>
                            <div className="navitem">
                                <a className="navitem__text" href="##">臺藝檔案</a>
                            </div>
                            <div className="navitem">
                                <a className="navitem__text" href="##">檔案應用</a>
                            </div>
                            <div className="navitem">
                                <a className="navitem__text" href="##">{"文書檔案相關Q&A"}</a>
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
                </>
            }

            {Width < 1200 &&
                <>
                    123
                </>
            }
        </>
        // </div>
    );
}