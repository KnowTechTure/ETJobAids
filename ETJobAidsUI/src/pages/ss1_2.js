import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import { ReactComponent as Male01 } from '../assets/images/hero/male/male_01.svg'
import { ReactComponent as Male02 } from '../assets/images/hero/male/male_02.svg'
import { ReactComponent as Male03 } from '../assets/images/hero/male/male_03.svg'
import { ReactComponent as MaleHide } from '../assets/images/hero/male/male_hide.svg'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Ss1_2 = () => {

    let Str = {
        title: "What about your husband?",
        cta1: 'New user',
        cta2: 'Returning user',
        btns: ['back', 'next']
    }

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div className="ss1_2">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div>
                            <div>
                                <div className="slide_in_blurred_left">
                                    <Link to={"/Ss1_3"}>
                                        <Male01 />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_bottom">
                                    <Male02 />
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <Male03 />
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <MaleHide />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss1_1"}>
                            <BtnNavBack text_btn={Str.btns[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center">
                        <div className="audioplayer">
                            <ReactPlayer
                                url={require('../assets/mp3/hothothot.mp3')}
                                width="400px"
                                height="50px"
                                playing={false}
                                controls={true}
                            />
                        </div>
                    </div>
                    <div className="grd_btm_right"></div>
                </div>
            </div>
        </div>
    )
}
export default Ss1_2;