import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { ReactComponent as Mobile1 } from '../assets/images/icons/mobile1.svg'
import { ReactComponent as Mobile2 } from '../assets/images/icons/mobile2.svg'
import { ReactComponent as Mobile3 } from '../assets/images/icons/mobile3.svg'
import RadioButtons from '../components/btns/radioButton'
import SelectOp from '../components/selectOp'
import NumField from '../components/numField'
import { Link } from "react-router-dom"

const Fp44 = () => {

    let Str = {
        title: 'Kindly help us with your information',
        flds_lbls: 'Phone number'
    }

    let Btns = {
        lbl: ['back', 'next']
    }

    let Descr = {
        lbls: ['Do you own a phone?', 'Do you consent to receive service related phone callls or SMS?', 'Do you consent to receive feedback related phone calls or SMS?']
    }

    let Rbttns = {
        name: ["radio1", "radio2"],
        lbls: ["Yes", "No"]
    }

    let op_mobile = {
        name: 'amethod',
        clss: 'custom_select',
        mthds: ['No mobile', 'Her number', 'Shared phone number']
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
                    <div className="fp44">
                        <div className="grd_line1 ">
                            <h1 className="slide_in_blurred_top">{Str.title}</h1>
                        </div>
                        <div className="grd_line2">
                            <div class="mbl">
                                <div class="grd_icon">
                                    <Mobile1 />
                                </div>
                                <div class="grd_desc">{Descr.lbls[0]}</div>
                                <div class="grd_cta">
                                    <div className="slide_in_blurred_right">
                                        <SelectOp ops={op_mobile.mthds} name={op_mobile.name} clss={op_mobile.clss} />
                                    </div>
                                    <div className="flds slide_in_blurred_right">
                                        <NumField flds_lbls={Str.flds_lbls} flds_holder={Str.flds_lbls} />
                                    </div>
                                </div>
                            </div>
                            <div class="mbl">
                                <div class="grd_icon">
                                    <Mobile2 />
                                </div>
                                <div class="grd_desc">{Descr.lbls[1]}</div>
                                <div class="grd_cta">
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[0]} lbl={Rbttns.lbls[0]} />
                                    </div>
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[0]} lbl={Rbttns.lbls[1]} />
                                    </div>
                                </div>
                            </div>
                            <div class="mbl">
                                <div class="grd_icon">
                                    <Mobile3 />
                                </div>
                                <div class="grd_desc">{Descr.lbls[2]}</div>
                                <div class="grd_cta">
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[1]} lbl={Rbttns.lbls[0]} />
                                    </div>
                                    <div className="r_bttons">
                                        <RadioButtons name={Rbttns.name[1]} lbl={Rbttns.lbls[1]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp43"}>
                                <BtnNavBack text_btn={Btns.lbl[0]} />
                            </Link>
                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/Fp45"}>
                                <BtnNavNext text_btn={Btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp44;