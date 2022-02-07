import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"


const Fp19 = () => {

    let Str = {
        title: "Correct"
    }

    let btns = {
        lbl: ['back', 'next']
    }

    return (
        <>
            <div class="wrppr1">
                <div class="bk_left"></div>
                <div class="bk_right"></div>
            </div>
            <div className="lyts">
                <div className="grd_top_nav">
                    <div className="grd_left_top">
                        <LogOut />
                    </div>
                    <div className="grd_right_top"></div>
                </div>
                <div className="grd_cont">
                    <div className="fp19">
                        <div className="grd_line1 ">
                            <h1 className="slide_in_blurred_top">{Str.title}</h1>
                        </div>
                        <div className="grd_line2">
                            <div className="content_video slide_in_blurred_bottom">
                                <ReactPlayer
                                    className="video_player"
                                    url={require('../assets/mp4/example_video.mp4')}
                                    controls
                                    playing
                                    volume='0.85'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp11_1"}>
                                <BtnNavBack text_btn={btns.lbl[0]} />
                            </Link>
                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/Fp20"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp19;