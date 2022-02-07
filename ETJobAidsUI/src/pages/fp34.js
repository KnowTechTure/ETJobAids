import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"


const Fp34 = () => {

    let Str = {
        title: "Congrats on your decision!",
        sbttle: "Let's review to make sure that you remember everything you need to know about your method.",
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
                    <div className="fp34">
                        <div>Image</div>
                        <div>
                            <h2 className="tracking_in_expand">{Str.title}</h2>
                            <h3 className="tracking_in_expand">{Str.sbttle}</h3>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp33"}>
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
                            <Link to={"/Fp35"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp34;