import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import { ReactComponent as Done } from '../assets/images/icons/done.svg'
import { ReactComponent as Clear } from '../assets/images/icons/clear.svg'
import { ReactComponent as Lady_01 } from '../assets/images/hero/female/lady_01.svg'
import { ReactComponent as Lady_02 } from '../assets/images/hero/female/lady_02.svg'
import { ReactComponent as Lady_03 } from '../assets/images/hero/female/lady_03.svg'
import { ReactComponent as Male_01 } from '../assets/images/hero/male/male_01.svg'
import { ReactComponent as Male_02 } from '../assets/images/hero/male/male_02.svg'
import { ReactComponent as Male_03 } from '../assets/images/hero/male/male_03.svg'
import { ReactComponent as Kid_01 } from '../assets/images/hero/kids/kid_01.svg'
import { ReactComponent as Kid_02 } from '../assets/images/hero/kids/kid_02.svg'
import { ReactComponent as Kid_02my } from '../assets/images/hero/kids/kid_02my.svg'
import { ReactComponent as Kid_04 } from '../assets/images/hero/kids/kid_04.svg'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"


const Ss8 = () => {

    let Str = {
        title: "Are you interested in learning about family planning methods?"
    }

    let btns = {
        lbl: ['back', 'next']
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
                    <div className="ss8">
                        <div className="grd_left">
                            <div className="cont">
                                <h1 className="slide_in_blurred_left">{Str.title}</h1>
                                <div className="circle">
                                    <Link to={"/Ss8_1"}>
                                        <Done />
                                    </Link>
                                </div>
                                <div className="circle">
                                    <Link to={"/Ss8_2"}>
                                        <Clear />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grd_right">
                            <div className="cont">
                                <div className="fathers">
                                    <div><Male_01 /></div>
                                    <div><Male_01 /></div>
                                </div>
                                <div className="cont_kids">
                                    <div className="kids_l2">
                                        <div><Kid_02my /></div>
                                        <div><Kid_02my /></div>
                                        <div><Kid_02my /></div>
                                        <div><Kid_02my /></div>
                                        <div><Kid_02my /></div>
                                        <div><Kid_04 /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Ss7"}>
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
                        <div className="grd_btm_right"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ss8;