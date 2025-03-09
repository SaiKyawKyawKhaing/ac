import React from "react";
import { useRouter } from "next/router";


export default function Vision() {
    const {basePath} = useRouter()
  return (
<section
  id="vision"
  className="about-section"
  style={{
    backgroundImage: `url(${basePath}/assets/img/vision-bg.png)`,
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
    style={{ backgroundColor: "#33333338", width: "100%", minHeight: "100vh" }}
  >
    <div className="container">
      <div className="row gy-4 align-items-center">
        {/* Left Side - Text Content */}
        <div className="col-lg-6">
          <h1 style={{ fontWeight: 800, color: "white", padding: "30px 0" }}>
            Our Vision & Mission
          </h1>
          <ul className="p-box">
            <li>
              <strong>Our Vision:</strong> Becoming the catalyst for Southeast Asia’s AI revolution, transforming industries and economies through <strong>ethical innovation</strong> and <strong>scalable AI solutions</strong>.
            </li>
          </ul>
          <ul className="p-box">
            <li>
              <strong>Our Mission:</strong> Democratizing AI adoption in Southeast Asia by equipping businesses with the <strong>knowledge, tools, and strategies</strong> needed to thrive in a tech-driven world.
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="col-lg-6 text-center">
          <img
            src={`${basePath}/assets/img/vision.png`}
            alt="Digitechvault AI Innovation"
            className="img-fluid"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  </div>
</section>


  )
}
