import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import BtnNavNext from '../components/btns/btnNavNext'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"



const Init1 = () => {
    let op_lngs = {
        name: 'languages',
        clss: 'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let Str = {
        title: 'Welcome'
    }

    let btns = {
        lbl: 'next'
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
                    <div className="grd_right_top">
                        <div className="select_lang slide_in_blurred_right" tabindex="1">
                            <SelectOp ops={op_lngs.lngs} name={op_lngs.name} clss={op_lngs.clss} />
                        </div>
                    </div>
                </div>
                <div className="grd_cont">
                    <div className="int1">
                        <div className="grd_line1 ">
                            <h1 className="slide_in_blurred_top">{Str.title}</h1>
                        </div>
                        <div className="grd_line2">
                            <div className="slide_in_blurred_bottom">
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

                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/Init_2"}>
                                <BtnNavNext text_btn={btns.lbl} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Init1;