import React from "react"
import LogOut from '../components/btns/logOut'
import RadioButtons from '../components/btns/radioButton'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Fp11_1 = () => {

    let Str = {
        title: 'Do you want to continue with more quiz questions?'
    }

    let btns = {
        lbl: ['back', 'next']
    }

    let Rbttns = {
        name: "radio1",
        lbls: ["Yes", "No"]
    }

    return (
        <>
            <div class="wrppr2">
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
                    <div className="fp11_1">
                        <div>Image</div>
                        <div>
                            <h1 className="tracking_in_expand">{Str.title}</h1>
                            <div className="r_bttons">
                                <RadioButtons 
                                name={Rbttns.name} 
                                lbl={Rbttns.lbls[0]}/>
                            </div>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[1]} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp3"}>
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
                            <Link to={"/Fp19"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp11_1;