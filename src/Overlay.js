import "./Overlay.css"
import down_arrow from "./image/down-arrow.svg"
import {useRef} from "react";
import specification_report from "./static/reports/project_specification_report.pdf"

console.log(down_arrow)

export function Overlay() {
    return (
        <div className={"hero-container"}>
            <div className={"flex-grow"}/>
            <p
                style={{
                    fontFamily: "'Antonio', sans-serif",
                    flex: "1 1 0%",
                    height: 30,
                    fontSize: 100,
                    fontWeight: "700",
                    lineHeight: "30px",
                    color: "white",
                    letterSpacing: -2,
                }}>
                3KET
            </p>

            <p className={"code-text"}>
                coming soon
            </p>

            <a href={specification_report} target={"_blank"} className={"report-text"}>
                Specification Report
            </a>
            {/*<div className={"flex-grow"}/>
                <div className={"scroll-down-container"}>
                <img src={down_arrow} alt={"down arrow"} color={"white"} ref={arrow_down_ref}/>
                <p className={"scroll-down-text"}>asd</p>
                </div*/}
        </div>

    )
}