import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Fp43 = () => {

    let Str = {
        title: 'Thank you so much for taking the time to talk with us today',
        sbttl1: "Before you go, would you like to watch either of these videos?",
        sbttl2: "Tips for Talking with Your Husband About Family Planning",
        sbttl3: "How Husbands Can Support Their Wife’s Method Choice"
    }

    let Rbttns = {
        name: 'radio',
        lbls: ["I'm ready to Select a Method", "Not Ready to Select a Method Today", "I want to see more Methods to make my decision"]
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
                <div className="fp43">
                    <div className="grd_title">
                        <h1>{Str.title}</h1>
                        <h4>{Str.sbttl1}</h4>
                    </div>
                    <div className="grd_results">
                        <div className="rsrcs">
                            <div className="grd_v1">
                                <div className="slide_in_blurred_left">
                                    <ReactPlayer
                                    url={require('../assets/mp4/example_video.mp4')}
                                    width='auto'
                                    height='30vh'
                                    playing={false}
                                    controls={true}
                                    volume='0.85'
                                    />
                                </div>
                            </div>
                            <div className="grd_t1">
                                <div>{Str.sbttl2}</div>
                            </div>
                            <div className="grd_v2">
                                <div className="slide_in_blurred_right">
                                <ReactPlayer
                                    url={require('../assets/mp4/example_video.mp4')}
                                    width='auto'
                                    height='30vh'
                                    controls
                                    playing
                                    volume='0.85'
                                    />
                                </div>
                            </div>
                            <div className="grd_t2">
                                {Str.sbttl3}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp40"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/FP44"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fp43;