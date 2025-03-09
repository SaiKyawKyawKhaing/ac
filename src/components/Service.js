import React from "react";
import { useRouter } from "next/router";


export default function Service() {
    const { basePath } = useRouter()
    return (
        <section
        id="services"
        className="services-section"
        style={{
            backgroundImage: `url(${basePath}/assets/img/service-bg.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            minHeight: "100vh",
        }}
    >
        <div
            className="overlay d-flex align-items-center"
            style={{
                backgroundColor: "#15152c45",
                minHeight: "100vh",
                width: "100%",
                 padding:"70px 0"
            }}
        >
            <div className="container text-center">
                <h1 className="fw-bold text-white py-4">Our Services</h1>
                <p className="text-white">
                    Tailored solutions to meet your business needs in the age of AI.
                </p>
    
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 px-4">
                    {/* Region-Specific Plugin Sales */}
                    <div className="col" data-aos="fade-up" data-aos-duration="1000">
                        <div className="card p-4 shadow border-0 text-center h-100">
                            <img
                                src={`${basePath}/assets/img/services/plug.png`}
                                alt="Plugin Sales"
                                className="img-fluid mb-3"
                                style={{ width: "100px", margin: "0 auto" }}
                            />
                            <h3 className="fw-bold">Region-Specific Plugin Sales</h3>
                            <p>
                                Specialized plugins designed for Southeast Asian businesses,
                                optimizing workflows, enhancing e-commerce platforms, and
                                improving operational efficiency.
                            </p>
                        </div>
                    </div>
    
                    {/* AI Integration Consultation */}
                    <div className="col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="card p-4 shadow border-0 text-center h-100">
                            <img
                                src={`${basePath}/assets/img/services/ai.png`}
                                alt="AI Consultation"
                                className="img-fluid mb-3"
                                style={{ width: "100px", margin: "0 auto" }}
                            />
                            <h3 className="fw-bold">AI Integration Consultation</h3>
                            <p>
                                Our AI consultants seamlessly integrate AI into your workflows,
                                from automation to predictive analytics, ensuring innovation and
                                efficiency.
                            </p>
                        </div>
                    </div>
    
                    {/* Corporate Training for AI Usage */}
                    <div className="col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        <div className="card p-4 shadow border-0 text-center h-100">
                            <img
                                src={`${basePath}/assets/img/services/ai-train.png`}
                                alt="AI Training"
                                className="img-fluid mb-3"
                                style={{ width: "100px", margin: "0 auto" }}
                            />
                            <h3 className="fw-bold">Corporate Training for AI Usage</h3>
                            <p>
                                Dynamic training programs tailored for managers and developers,
                                equipping teams with AI literacy and advanced technical skills.
                            </p>
                        </div>
                    </div>
    
                    {/* Moodle LMS Customization */}
                    <div className="col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                        <div className="card p-4 shadow border-0 text-center h-100">
                            <img
                                src={`${basePath}/assets/img/services/edu.png`}
                                alt="Moodle LMS"
                                className="img-fluid mb-3"
                                style={{ width: "100px", margin: "0 auto" }}
                            />
                            <h3 className="fw-bold">Moodle LMS Customization</h3>
                            <p>
                                Custom Moodle LMS solutions for corporate and educational needs,
                                ensuring seamless integration and user-friendly experiences.
                            </p>
                        </div>
                    </div>
    
                    {/* Custom Software & AI Solutions */}
                    <div className="col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                        <div className="card p-4 shadow border-0 text-center h-100">
                            <img
                                src={`${basePath}/assets/img/services/dev.png`}
                                alt="Custom AI"
                                className="img-fluid mb-3"
                                style={{ width: "100px", margin: "0 auto" }}
                            />
                            <h3 className="fw-bold">Custom Software & AI Solutions</h3>
                            <p>
                                Bespoke AI-powered applications, including chatbots, analytics
                                platforms, and industry-specific tools tailored to your business
                                needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    




    )
}

