import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"

const Fp29 = () => {

    let Str = {
        title: 'Great, thanks for telling me more about you!',
        sbttl: "Now I'm ready to recommend some methods that might fit your needs. According to the preferences you have selected, we suggest these methods. You can click on them to learn more."
    }

    let Rbttns = {
        name: 'radio',
        lbls: ["I'm ready to Select a Method", "Not Ready to Select a Method Today", "I want to see more Methods to make my decision"]
    }

    let btns = {
        lbl: ['back', 'next#1']
    }

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div class="fp29">
                    <div class="grd_title">
                        <h2>{Str.title}</h2>
                        <h4>{Str.sbttl}</h4>
                    </div>
                    <div class="grd_results">
                        <div class="grd_left">
                            <div className="slide_in_blurred_left">
                                <iframe id="c_video"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY?wmode=transparent&amp;autoplay=0&amp;autohide=0"
                                    frameborder="0"></iframe>
                            </div>
                        </div>
                        <div class="grd_right">
                            <div className="slide_in_blurred_right">
                                <iframe id="c_video"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY?wmode=transparent&amp;autoplay=0&amp;autohide=0"
                                    frameborder="0"></iframe>
                            </div>
                        </div>
                        <div class="grd_mthds">
                            <div>
                                <ul>
                                    <li>Characteristics 1</li>
                                    <li>Characteristics 2</li>
                                    <li>Characteristics 3</li>
                                </ul>
                            </div>
                        </div>
                        <div class="grd_cta r_bttons">
                            <div>
                                <div>
                                    <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[0]} />
                                </div>
                                <div>
                                    <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[1]} />
                                </div>
                                <div>
                                    <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[2]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp28"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/FP32"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fp29;