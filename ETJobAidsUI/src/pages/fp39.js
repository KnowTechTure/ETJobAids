import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import ReactPlayer from 'react-player'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"


const Fp39 = () => {

    let Str = {
        title: "When do you need to visit the health center or post after taking the IUD",
        sbttl: ""
    }

    let btns = {
        lbl: ['back', 'next']
    }

    let Rbttns = {
        name: "radio1",
        lbls: ["4-6 weeks for a check-up ", "If you have increasing or severe pain in your lower abdomen or during sex, or have fever, chills, nausea or vomiting", "Anytime you want it removed, you want to get pregnant, or want to switch to another method", "In 12 years for a replacement ", "All of the above "]
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
                    <div className="fp39">
                        <div>Image</div>
                        <div>
                            <h2 className="tracking_in_expand">{Str.title}</h2>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[0]} />
                            </div>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[1]} />
                            </div>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[2]} />
                            </div>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[3]} />
                            </div>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[4]} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp38"}>
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
                            <Link to={"/Fp40"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp39;