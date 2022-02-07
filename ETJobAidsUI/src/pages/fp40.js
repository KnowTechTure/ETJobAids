import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import ReactPlayer from 'react-player'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"


const Fp40 = () => {

    let Str = {
        title: "The correct answer is ALL",
        sbttl: "You can visit the health post or center at any time if you have any questions or concerns, pain, want to switch to another method, or anytime you want it to be removed.  It must be removed or replaced after 12 years."
    }

    let btns = {
        lbl: ['back', 'next']
    }

    let Rbttns = {
        name: "radio1",
        lbls: ["True", "False"]
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
                    <div className="fp40">
                        <div>Image</div>
                        <div>
                            <h2 className="tracking_in_expand">{Str.title}</h2>
                            <h3 className="tracking_in_expand">{Str.sbttl}</h3>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp39"}>
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
                        <div className="grd_btm_right">
                            <Link to={"/Fp43"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp40;