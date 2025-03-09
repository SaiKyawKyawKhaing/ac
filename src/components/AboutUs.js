import React from "react";
import { useRouter } from "next/router";

export default function AboutUs() {
    const { basePath } = useRouter();

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    return (
        <section
            id="about"
            className="about-us-section"
            style={{
                backgroundImage: `url(${basePath}/assets/img/about.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                className="overlay d-flex align-items-center"
                style={{
                    backgroundColor: "#08091bc9",
                    width: "100%",
                    minHeight: "100vh",
                }}
            >
                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        {/* Left Side - Title and Content */}
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div>
                                <h1 style={{ fontWeight: 800, color: "white" }}>Digitechvault</h1>
                                <p style={{ color: "white" }}>
                                    At Digitechvault, we’re pioneering the future of AI in Southeast Asia. As one of the region’s first AI consulting firms, we bridge the gap between cutting-edge technology and real-world business solutions. While our roots are in tech innovation, our focus is on empowering organizations to harness AI’s transformative power—whether through tailored education or strategic implementation. We combine industry-leading expertise with a deep understanding of Southeast Asia’s unique challenges, helping businesses unlock efficiency, creativity, and growth in the age of artificial intelligence.
                                </p>
                                <button class="button mr-3" onClick={() => scrollToSection('contact')}>
                                    Contact Us
                                    <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                        <path
                                            clip-rule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Key Highlights with Images */}
                        <div className="col-lg-7 d-flex justify-content-center">
                            <div className="row" style={{ display: "flex", alignItems: "center" }}>
                                {/* Region-Specific Expertise */}
                                <div className="col-12 col-md-6 mb-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img
                                            src={`${basePath}/assets/img/about/international.png`}
                                            alt="Region Expertise"
                                            style={{ width: "50px", marginRight: "15px" }}
                                        />
                                        <div>
                                            <h5 style={{ fontWeight: 700, color: "white" }}>Region-Specific Expertise</h5>
                                            <p style={{ color: "white" }}>Deep knowledge of Southeast Asia’s unique challenges and business landscape.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* AI Excellence */}
                                <div className="col-12 col-md-6 mb-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img
                                            src={`${basePath}/assets/img/about/ai.png`}
                                            alt="AI Excellence"
                                            style={{ width: "50px", marginRight: "15px" }}
                                        />
                                        <div>
                                            <h5 style={{ fontWeight: 700, color: "white" }}>AI Excellence</h5>
                                            <p style={{ color: "white" }}>Proven success in AI integration and corporate education programs.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tailored Solutions */}
                                <div className="col-12 col-md-6 mb-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img
                                            src={`${basePath}/assets/img/about/jigsaw.png`}
                                            alt="Tailored Solutions"
                                            style={{ width: "50px", marginRight: "15px" }}
                                        />
                                        <div>
                                            <h5 style={{ fontWeight: 700, color: "white" }}>Tailored Solutions</h5>
                                            <p style={{ color: "white" }}>Custom AI and tech solutions designed for your industry’s needs.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Ethical AI */}
                                <div className="col-12 col-md-6 mb-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img
                                            src={`${basePath}/assets/img/about/ai-ethic.png`}
                                            alt="Ethical AI"
                                            style={{ width: "50px", marginRight: "15px" }}
                                        />
                                        <div>
                                            <h5 style={{ fontWeight: 700, color: "white" }}>Ethical AI</h5>
                                            <p style={{ color: "white" }}>Committed to responsible and scalable AI innovation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
