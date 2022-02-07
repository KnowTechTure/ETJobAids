import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import { ReactComponent as Lady01 } from '../assets/images/hero/female/lady_01.svg'
import { ReactComponent as Lady02 } from '../assets/images/hero/female/lady_02.svg'
import { ReactComponent as Lady03 } from '../assets/images/hero/female/lady_03.svg'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Ss1 = () => {

    let Str = {
        title: "Let's start by learning a litle bit more about you!",
        subtitle: 'Select an avatar the describes your personality',
        cta1: 'New user',
        cta2: 'Returning user'
    }

    let btns = {
        lbl: ['back', 'next']
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
                <div className="ss1">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <h2 className="tracking_in_expand">{Str.subtitle}</h2>
                    </div>
                    <div className="grd_line3">
                        <div>
                            <div>
                                <div className="slide_in_blurred_left">
                                    <Lady01 />
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_bottom">
                                    <Lady02 />
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <Link to={"/Ss1_1"}>
                                        <Lady03 />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Init_3"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
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
export default Ss1;