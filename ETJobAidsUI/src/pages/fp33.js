import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { ReactComponent as Method_5 } from '../assets/images/family_planning_methods/method_05.svg'
import { ReactComponent as Method_1 } from '../assets/images/family_planning_methods/method_01.svg'
import { ReactComponent as Method_4 } from '../assets/images/family_planning_methods/method_04.svg'
import { ReactComponent as Method_6 } from '../assets/images/family_planning_methods/method_06.svg'
import { ReactComponent as Method_2 } from '../assets/images/family_planning_methods/method_02.svg'
import { ReactComponent as Method_3 } from '../assets/images/family_planning_methods/method_03.svg'
import { ReactComponent as Icon1 } from '../assets/images/icons/check_circle.svg'
import { ReactComponent as Icon2 } from '../assets/images/icons/arrows.svg'
import { ReactComponent as Icon3 } from '../assets/images/icons/error.svg'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"

const Fp33 = () => {

    let Str = {
        title: 'Congratulations on selecting your method!',
        sbttle: 'Here is some helpful information to remember about the method you selected.',
        mthds: ['UID', 'Implant', 'Condoms', 'Injectable', 'Pills', 'EC']
    }

    let Btns = {
        lbl: ['back', 'next']
    }

    let Descriptions = {
        lbls: ['UID', 'Implant', 'Condoms', 'Injectable', 'Pills', 'EC'],
        desc: ['Effective at preventing pregnancy Self-administration Privacy', 'Quick return to fertility Low frequency of use Easy to  stop use Lighter periods', 'Quick return to fertility Low frequency of use Easy to stop use Lighter periods']
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
                    <div className="fp33">
                        <div className="grd_line1 ">
                            <h1 className="slide_in_blurred_top">{Str.title}</h1>
                            <h2 className="slide_in_blurred_top">{Str.sbttle}</h2>
                        </div>
                        <div className="grd_line2">
                            <div className="mssg">
                                <div className="grd_img"><Method_6 /></div>
                                <div className="grd_cont">
                                    <div className="grd_tile"><h2>{Descriptions.lbls[3]}</h2></div>
                                    <div className="grd_c10">
                                        <Icon1 />
                                    </div>
                                    <div className="grd_c11">{Descriptions.desc[0]}</div>
                                    <div className="grd_c20">
                                        <Icon2 />
                                    </div>
                                    <div className="grd_c21">{Descriptions.desc[1]}</div>
                                    <div className="grd_c30">
                                        <Icon3 />
                                    </div>
                                    <div className="grd_c31">{Descriptions.desc[2]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp32"}>
                                <BtnNavBack text_btn={Btns.lbl[0]} />
                            </Link>
                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/Fp34"}>
                                <BtnNavNext text_btn={Btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp33;