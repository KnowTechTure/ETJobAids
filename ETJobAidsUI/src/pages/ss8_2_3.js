import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import Btn from '../components/btns/btn'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Ss8_2_3 = () => {

    let Str = {
        title: "Thank you for learning about Smart Start!",
        sbttl1: "Remember you can always reach out to your provider if you have any questions in the future. Before you go, please take a look at some of our resources",
        sbttl2: "Your method summary"
    }

    let op_am = {
        name: 'amethod',
        clss: 'custom_select',
        mthds: ['UID', 'Implant', 'Condoms', 'Injectable', 'pills', 'EC']
    }

    let btns = {
        lbl: 'Done'
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
                    <div className="ss8_2_3">
                        <div className="grd_line1 ">
                            <h1 className="slide_in_blurred_top">{Str.title}</h1>
                        </div>
                        <div className="grd_line2">
                            <h2 className="tracking_in_expand">{Str.sbttl1}</h2>
                            <div>
                                <div>
                                    <p className="slide_in_blurred_left">{Str.sbttl2}</p>
                                </div>
                                <div className="slide_in_blurred_right">
                                    <SelectOp ops={op_am.mthds} name={op_am.name} clss={op_am.clss} />
                                </div>
                            </div>
                        </div>
                        <div className="grd_line3">
                            <div className="content_video slide_in_blurred_bottom">
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
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">

                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/"}>
                                <Btn text_btn={btns.lbl} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ss8_2_3;