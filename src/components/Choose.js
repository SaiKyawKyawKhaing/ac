import React from "react";
import { useRouter } from "next/router";

export default function Choose() {
    const { basePath } = useRouter()
    return (
        <section
            id="why-choose-us"
            className="why-choose-section"
            style={{
                backgroundImage: `url(${basePath}/assets/img/choose.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "75vh",
                width: "100vw",
            }}
        >
            <div
                className="overlay d-flex align-items-center justify-content-center text-center"
                style={{ backgroundColor: "#280444cc", minHeight: "75vh", width: "100vw" }}
            >
                <div className="container">
                    <h1
                        style={{
                            fontWeight: 800,
                            paddingTop: "30px",
                            paddingBottom: "30px",
                            color: "white",  // Added color
                        }}
                    >
                        Why Choose Digitechvault?
                    </h1>

                    <div className="row justify-content-center">
                        {/* Regional Expertise */}
                        <div
                            className="col-12 d-flex flex-column align-items-center text-center mb-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div style={{ fontSize: "40px", color: "#ffcc00", marginBottom: "15px" }}>
                                <i className="fa fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 700, color: "white" }}>Regional Expertise</h3> {/* Added color */}
                                <p style={{ color: "white" }}>Deep knowledge of Southeast Asia’s unique challenges and business landscape.</p> {/* Added color */}
                            </div>
                        </div>

                        {/* AI Excellence */}
                        <div
                            className="col-12 d-flex flex-column align-items-center text-center mb-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div style={{ fontSize: "40px", color: "#ffcc00", marginBottom: "15px" }}>
                                <i className="fa fa-robot"></i>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 700, color: "white" }}>AI Excellence</h3> {/* Added color */}
                                <p style={{ color: "white" }}>Proven success in AI integration and corporate education programs.</p> {/* Added color */}
                            </div>
                        </div>

                        {/* Tailored Solutions */}
                        <div
                            className="col-12 d-flex flex-column align-items-center text-center mb-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            <div style={{ fontSize: "40px", color: "#ffcc00", marginBottom: "15px" }}>
                                <i className="fa fa-cogs"></i>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 700, color: "white" }}>Tailored Solutions</h3> {/* Added color */}
                                <p style={{ color: "white" }}>Custom AI and tech solutions designed for your industry’s needs.</p> {/* Added color */}
                            </div>
                        </div>

                        {/* Ethical AI */}
                        <div
                            className="col-12 d-flex flex-column align-items-center text-center mb-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                        >
                            <div style={{ fontSize: "40px", color: "#ffcc00", marginBottom: "15px" }}>
                                <i className="fa fa-shield-alt"></i>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 700, color: "white" }}>Ethical AI</h3> {/* Added color */}
                                <p style={{ color: "white" }}>Committed to responsible and scalable AI innovation.</p> {/* Added color */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
