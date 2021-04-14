import React, { useEffect } from 'react';
import './Index.css';
import File from '../../img/pic_icon_document file-h 1.svg'
import Download from '../../img/pic_icon_download 1.svg'
import File2 from '../../img/pic_icon_file-h 1.svg'
import SignOff from '../../img/pic_icon_sign off 1.svg'
import { useHistory } from 'react-router-dom';

export const Index = (props) => {

    let history = useHistory();

    //#region 路由監聽，清除API紀錄 (渲染即觸發的每一個API都要有)
    useEffect(() => {
        const historyUnlisten = history.listen((location, action) => {
            console.log(location, action)
        });

        return () => {
            historyUnlisten();
        }
    }, [])
    //#endregion
    return (
        <div className="simpleMenuContainer">
            <div className="simpleMenuLeftContainer">
                <div style={{ display: "flex" }}>
                    <div className="leftTopContent">
                        <div className="moreOutContainer">
                            <div className="moreContainer">More</div>
                        </div>
                        <a href="/Unit">
                            <img className="fileIcon" alt="" src={File2}></img>
                            <div className="contentText">臺藝檔案</div>
                        </a>
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
