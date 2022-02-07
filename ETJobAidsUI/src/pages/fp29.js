import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import RadioButtons from '../components/btns/radioButton'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Fp29 = () => {

    let Str = {
        title: 'Great, thanks for telling me more about you!',
        sbttl: "Now I'm ready to recommend some methods that might fit your needs. According to the preferences you have selected, we suggest these methods. You can click on them to learn more."
    }

    let Rbttns = {
        name: 'radio',
        lbls: ["I'm ready to Select a Method", "Not Ready to Select a Method Today", "I want to see more Methods to make my decision"]
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
                    <div className="fp29">
                        <div className="grd_title">
                            <h1>{Str.title}</h1>
                            <h3>{Str.sbttl}</h3>
                        </div>
                        <div className="grd_results">
                            <div className="grd_left">
                                <div className="slide_in_blurred_left">
                                    <ReactPlayer
                                        url={require('../assets/mp4/example_video.mp4')}
                                        width='auto'
                                        height='25vh'
                                        controls
                                        playing={false}
                                        volume='0.85'
                                    />
                                </div>
                            </div>
                            <div className="grd_right">
                                <div className="slide_in_blurred_right">
                                    <ReactPlayer
                                        url={require('../assets/mp4/example_video.mp4')}
                                        width='auto'
                                        height='25vh'
                                        controls
                                        playing={false}
                                        volume='0.85'
                                    />
                                </div>
                            </div>
                            <div className="grd_mthds">
                                <div>
                                    <ul>
                                        <li>Characteristics 1</li>
                                        <li>Characteristics 2</li>
                                        <li>Characteristics 3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grd_cta r_bttons">
                                <div>
                                    <div>
                                        <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[0]} />
                                    </div>
                                    <div>
                                        <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[1]} />
                                    </div>
                                    <div>
                                        <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[2]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp28"}>
                                <BtnNavBack text_btn={btns.lbl[0]} />
                            </Link>
                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/FP32"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp29;