import React, { useState } from "react";
import DatePicker from "react-datepicker";
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { ReactComponent as Mobile1 } from '../assets/images/icons/mobile1.svg'
import { ReactComponent as Mobile2 } from '../assets/images/icons/mobile2.svg'
import { ReactComponent as Mobile3 } from '../assets/images/icons/mobile3.svg'
import datepicker from "react-datepicker/dist/react-datepicker.css";
import RadioButtons from '../components/btns/radioButton'
import SelectOp from '../components/selectOp'
import NumField from '../components/numField'
import { Link } from "react-router-dom"

const Fp45 = () => {

    const [startDate, setStartDate] = useState(new Date());

    let Str = {
        title: ['Did you refer to a HEW, or MSI, or neither?', 'Book appointment'],
        flds_lbls: 'Phone number'
    }

    let Btns = {
        lbl: ['back', 'next']
    }

    let Descr = {
        lbls: ['Do you own a phone?', 'Do you consent to receive service related phone callls or SMS?', 'Do you consent to receive feedback related phone calls or SMS?']
    }

    let Rbttns = {
        name: "radio1",
        lbls: ["HEW", "MSI", "NEITHER"]
    }

    let op_mobile = {
        name: 'amethod',
        clss: 'custom_select',
        mthds: ['No mobile', 'Her number', 'Shared phone number']
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
                    <div className="fp45">
                        <div className="cont">
                            <div class="grd_title1">
                                <h2 className="tracking_in_expand">{Str.title[0]}</h2>
                            </div>
                            <div class="grd_title2">
                                <h2 className="tracking_in_expand">{Str.title[1]}</h2>
                            </div>
                            <div class="grd_r">
                                <div className="r_bttons tracking_in_expand">
                                    <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[0]} />
                                </div>
                                <div className="r_bttons tracking_in_expand">
                                    <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[1]} />
                                </div>
                                <div className="r_bttons">
                                    <RadioButtons className="tracking_in_expand" name={Rbttns.name} lbl={Rbttns.lbls[2]} />
                                </div>
                            </div>
                            <div class="grd_date">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    monthsShown={1}
                                    inline
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp44"}>
                                <BtnNavBack text_btn={Btns.lbl[0]} />
                            </Link>
                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/Ds1"}>
                                <BtnNavNext text_btn={Btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp45;