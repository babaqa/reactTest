import React from 'react';
import './Index.css';
import File from '../../img/pic_icon_document file-h 1.svg'
import Download from '../../img/pic_icon_download 1.svg'
import File2 from '../../img/pic_icon_file-h 1.svg'
import SignOff from '../../img/pic_icon_sign off 1.svg'

export const Index = (props) => {

    return (
        <div className="simpleMenuContainer">
            <div className="simpleMenuLeftContainer">
                <div style={{ display: "flex" }}>
                    <div className="leftTopContent">
                        <div className="moreOutContainer">
                            <div className="moreContainer">More</div>
                        </div>
                        <img className="fileIcon" alt="" src={File2}></img>
                        <div className="contentText">臺藝檔案</div>
                    </div>
                    <div className="rightTopContent">
                        <div className="moreOutContainer">
                            <div className="moreContainer">More</div>
                        </div>
                        <img className="fileIcon" alt="" src={File}></img>
                        <div className="contentText">檔案應用</div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div className="leftBottomContent">
                        <div className="moreOutContainer">
                            <div className="moreContainer">More</div>
                        </div>
                        <img className="fileIcon" alt="" src={SignOff}></img>
                        <div className="contentText">線上檔案展</div>
                    </div>
                    <div className="rightBottomContent">
                        <div className="moreOutContainer">
                            <div className="moreContainer">More</div>
                        </div>
                        <img className="fileIcon" alt="" src={Download}></img>
                        <div className="contentText">檔案下載</div>
                    </div>
                </div>
            </div>
            <div className="simpleMenuRightContainer">

            </div>
        </div>
    )
}
