import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"


const Fp22 = () => {

    let Str = {
        title: "Let's start with some basic questions."
    }

    let btns = {
        lbl: ['back', 'next']
    }

    let Rbttns = {
        name: ["radio1", "radio2", "radio3"],
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
                    <div className="fp22">
                        <div>Image</div>
                        <div>
                            <h2 className="tracking_in_expand">{Str.title}</h2>
                            <div>
                                <div>
                                    <h4>Are you pregnant?</h4>
                                </div>
                                <div>
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[0]} lbl={Rbttns.lbls[0]} />
                                    </div>
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[0]} lbl={Rbttns.lbls[1]} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>Do you want to be pregnant in the future?</h4>
                                </div>
                                <div>
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[1]} lbl={Rbttns.lbls[0]} />
                                    </div>
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[1]} lbl={Rbttns.lbls[1]} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>Are you breastfeeding a baby less than 6 month?</h4>
                                </div>
                                <div>
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[2]} lbl={Rbttns.lbls[0]} />
                                    </div>
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[2]} lbl={Rbttns.lbls[1]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp21"}>
                                <BtnNavBack text_btn={btns.lbl[0]} />
                            </Link>
                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/Fp23"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp22;