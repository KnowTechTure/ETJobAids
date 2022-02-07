import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"


const Fp3 = () => {

    let Str = {
        title: "True, it can take some extra months for your periods and fertility to return after stopping the injectable.",
        sbttl: "This is because residual levels of hormones (DMPA) exist for several months after the end of contraceptive protection from the last injection. To continue to be protected, you must receive an injectable every three months. The delay in getting pregnant can be longer than other methods--perhaps a few extra months--but you will be able to get pregnant after stopping this method. In fact, all methods (except permanent methods like vasectomy and sterilization) are reversible and will not cause infertility."
    }

    let btns = {
        lbl: ['back', 'next']
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
                    <div className="fp3">
                        <div>
                            <ReactPlayer
                                url={require('../assets/mp4/example_video.mp4')}
                                width='auto'
                                height='25vw'
                                controls
                                playing
                                volume='0.85'
                            />
                        </div>
                        <div>
                            <h1 className="tracking_in_expand">{Str.title}</h1>
                            <h4 className="tracking_in_expand">{Str.sbttl}</h4>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="grd_bottom_nav">
                    <div className="btm_nab_one">
                        <div className="grd_btm_left">
                            <Link to={"/Fp2"}>
                                <BtnNavBack text_btn={btns.lbl[0]} />
                            </Link>
                        </div>
                        <div className="grd_btm_center"></div>
                        <div className="grd_btm_right">
                            <Link to={"/Fp11_1"}>
                                <BtnNavNext text_btn={btns.lbl[1]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fp3;