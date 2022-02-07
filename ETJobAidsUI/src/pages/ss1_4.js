import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import Quantity from '../components/btns/quantity'
import { ReactComponent as Kid01 } from '../assets/images/hero/kids/kid_01.svg'
import { ReactComponent as Kid02 } from '../assets/images/hero/kids/kid_02.svg'
import { ReactComponent as Kid03 } from '../assets/images/hero/kids/kid_04.svg'
import { ReactComponent as Kid04 } from '../assets/images/hero/kids/kid_hide.svg'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Ss1_4 = () => {

    let op_lngs = {
        name: 'languages',
        clss: 'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let Str = {
        title: "How many children do you have?"
    }

    let btns = {
        lbl: ['back', 'next', 'Calculate']
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
                <div className="ss1_4">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div>
                            <div>
                                <div className="slide_in_blurred_left">
                                    <Kid01 />
                                </div>
                                <Quantity />
                            </div>
                            <div>
                                <div className="slide_in_blurred_bottom">
                                    <Kid02 />
                                </div>
                                <Quantity />
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <Kid03 />
                                </div>
                                <Quantity />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss1_3"}>
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
                        <Link to={"/Ss1_5"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss1_4;