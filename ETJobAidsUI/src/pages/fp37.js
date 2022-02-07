import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { ReactComponent as Mp3 } from '../assets/images/mp3.svg'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"


const Fp37 = () => {

    let Str = {
        title: "The IUD side effect of changing periods can last for 3-6 months.",
        sbttl: ""
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
                    <div className="fp37">
                        <div>Image</div>
                        <div>
                            <h2 className="tracking_in_expand">{Str.title}</h2>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[0]} />
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
                            <Link to={"/Fp36"}>
                                <BtnNavBack text_btn={btns.lbl[0]} />
                            </Link>
                        </div>
                        <div className="grd_btm_center">
                            <div id="audio" className="audioplayer">
                                <Mp3 />
                            </div>
                        </div>
                        <div className="grd_btm_right">
                            <Link to={"/Fp38"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp37;