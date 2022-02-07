import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"


const Ss8_1_5 = () => {

    let Str = {
        title: "OK, let's learn about the methods",
        sbttl: "and help you to choose the right method for you!"
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
                <div className="ss8_1_5">
                    <div>Image</div>
                    <div>
                        <h1 className="tracking_in_expand">{Str.title}</h1>
                        <h2 className="tracking_in_expand">{Str.sbttl}</h2>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss8_1"}>
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
                        <Link to={"/Fp1"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss8_1_5;