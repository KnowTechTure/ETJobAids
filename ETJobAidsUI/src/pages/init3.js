import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import { ReactComponent as NewUser } from '../assets/images/new_user.svg'
import { ReactComponent as ReturningUser } from '../assets/images/returning_user.svg'
import { Link } from "react-router-dom"

const Init3 = () => {

    let Str = {
        title: 'Kindly let us know if you are a new user or a returning user',
        cta1: 'New user',
        cta2: 'Returning user',
    }

    let btns = {
        lbl: ['back', 'next']
    }

    return (
        <>
        <div class="cont_int3"></div>
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div className="int3">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div>
                            <div>
                                <div className="slide_in_blurred_left">
                                    <Link to={"/Ss1"}>
                                        <NewUser />
                                    </Link>
                                </div>
                                <div className="tracking_in_expand">
                                    <h2>{Str.cta1}</h2>
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                <Link to={"/Rss1"}>
                                    <ReturningUser />
                                    </Link>
                                </div>
                                <div className="tracking_in_expand">
                                    <h2>{Str.cta2}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Init_2"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right"></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Init3;