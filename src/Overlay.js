import "./App.css"

export function Overlay() {
    return (
        <div className={"hero-container"}>
            <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
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
            </div>
            <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <p style={{ flex: "1 1 0%", height: "100%", fontSize:30, color: "white" }}>
                    <p className={"code-text"}>coming soon</p>
                </p>
            </div>
        </div>

    )
}