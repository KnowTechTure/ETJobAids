import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"


const Fp35 = () => {

    let Str = {
        title: "I'll ask these questions a few more times to really understand what you want.",
        sbttl: "Which of these things is the most important to you?"
    }

    let btns = {
        lbl: ['back', 'next']
    }

    let Rbttns = {
        name: "radio1",
        lbls: ["Easy to stop using", "Get it and I forget it!", "More effective", "Discreet/Private", "Few Side effects", "Self-administered"]
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
                    <div className="fp24">
                        <div>Image</div>
                        <div>
                            <h2 className="tracking_in_expand">{Str.title}</h2>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[0]} />
                            </div>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[3]} />
                            </div>
                            <div className="r_bttons">
                                <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[5]} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp23"}>
                                <BtnNavBack text_btn={btns.lbl[0]} />
                            </Link>
                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/Fp25"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp35;