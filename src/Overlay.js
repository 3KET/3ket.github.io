import "./Overlay.css"
import down_arrow from "./image/down-arrow.svg"
import specification_report from "./static/reports/project_specification_report.pdf"
import analysis_report from "./static/reports/project_analysis_report.pdf"

console.log(down_arrow)

export function Overlay() {
    return (
        <div className={"hero-container"}>
            <div className={"hero-container-row"}>
                <div className={"row row-1"}>
                    <div className={"corner-card top-left"}>
                        <p className={"hero-text"}>3KET</p>
                        <p className={"phonetic-spelling-text"}>/'θrikɪt/</p>
                    </div>
                    <div className={"corner-card bottom-left"}>
                        <p className={"corner-card-title"}>DEVELOPERS</p>
                        <p className={"corner-card-text cc-text-left"}>Doğa Tansel</p>
                        <p className={"corner-card-text cc-text-left"}>Ege Kaan Gürkan</p>
                        <p className={"corner-card-text cc-text-left"}>Mehmet Çalışkan</p>
                        <p className={"corner-card-text cc-text-left"}>Musa Ege Ünalan</p>
                        <p className={"corner-card-text cc-text-left"}>Mustafa Göktan Güdükbay</p>
                    </div>
                </div>
                <div className={"row row-2"} style={{alignItems: "center", alignContent: "center", flex: 1}}>
                    <div className={"corner-card top-left"} />
                    <div className={"corner-card bottom-left"} style={{display: "flex", alignItems: "center", justifyContent:"center", alignContent: "center"}}>
                        <a target={"_blank"} className={"launch-button"} href={"https://app.3ket.live"}>Launch the app!</a>
                    </div>

                </div>
                <div className={"row row-3"}>
                    <div className={"corner-card top-right"}>
                        <p className={"corner-card-title"}>REPORTS</p>
                        <br/>
                        <a target={"_blank"} href={specification_report} className={"corner-card-text cc-text-right"}>Project Specifications Report</a>
                        <br/>
                        <a target={"_blank"} href={analysis_report} className={"corner-card-text cc-text-right"}>Project Analysis Report</a>
                    </div>
                    <div className={"corner-card bottom-right"}>
                        <p className={"corner-card-title"}>SUPERVISOR</p>
                        <p className={"corner-card-text cc-text-right"}>Eray Tüzün</p>
                        <p className={"corner-card-title cc-text-right"}>INNOVATION EXPERT</p>
                        <p className={"corner-card-text cc-text-right"}>Ahmet Eren Başak</p>
                    </div>
                </div>
            </div>
            {/*<div className={"flex-grow"}/>
                <div className={"scroll-down-container"}>
                <img src={down_arrow} alt={"down arrow"} color={"white"} ref={arrow_down_ref}/>
                <p className={"scroll-down-text"}>asd</p>
                </div*/}
        </div>

    )
}