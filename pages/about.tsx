import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Layout, SectionTitle } from "../components";
import database from "../data/database";
// import Slider from "react-slick";
// import { sliderSettings } from "../data/sliderConfig";

export interface Review {
  content: string;
  author: {
    name: string;
    designation: string;
  };
}

// interface ReviewItem extends Review {
//   id: string;
// }

export default function About() {
  const { information } = database;
  const {
    address = "",
    age,
    email = "",
    freelanceStatus = "",
    language = "",
    name = "",
    nationality = "",
    phone = "",
  } = information || {};

  return (
    <Layout>
      <Head>
        <title>akds : about</title>
        <meta name="description" content="Arkadiusz about me page" />
      </Head>
      <div className="mi-about-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <Image src="/img/about-image.jpg" width={1607} height={1050} alt="me" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{name}</span>
                </h3>
                <p>
                  An experienced full-stack engineer in East London who excels
                  at building scalable TypeScript solutions from front to back.
                </p>
                <p>
                  Always curious and learning, I’ve recently submitted an iOS app
                  for beta testing, because I learn best by doing. Outside of coding,
                  you’ll find me riding half-pro on a cycling team, training for triathlons,
                  and based on my wives feedback, drinking way too much coffee.
                </p>
                <p>
                  Still here? Let’s connect — chat about your next big feature,
                  market fit, scale up opportunities, coffee, or bicycles. No particular order.
                </p>

                <ul>
                  {age && (
                    <li>
                      <b>Age</b> {age} Years
                    </li>
                  )}
                  {phone && (
                    <li>
                      <b>Phone</b> {phone}
                    </li>
                  )}
                  {nationality && (
                    <li>
                      <b>Nationality</b> {nationality}
                    </li>
                  )}
                  {language && (
                    <li>
                      <b>Languages</b> {language}
                    </li>
                  )}
                  {email && (
                    <li>
                      <b>Email</b> {email}
                    </li>
                  )}
                  {address && (
                    <li>
                      <b>Resides in</b> {address}
                    </li>
                  )}
                  {freelanceStatus && (
                    <li>
                      <b>Freelance</b> {freelanceStatus}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*TODO turn off services for now*/}
      {/*<div className="mi-service-area mi-section mi-padding-top">*/}
      {/*  <div className="container">*/}
      {/*    <SectionTitle title="Services" />*/}
      {/*    <div className="mi-service-wrapper">*/}
      {/*      <div className="row mt-30-reverse">*/}
      {/*        {services.map((service: ServiceInterface) => (*/}
      {/*          <div*/}
      {/*            className="col-lg-4 col-md-6 col-12 mt-30"*/}
      {/*            key={service.title}*/}
      {/*          >*/}
      {/*            <Service {...service} />*/}
      {/*          </div>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*TODO turn off reviews*/}
      {/*<div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">*/}
      {/*  <div className="container">*/}
      {/*    <SectionTitle title="Reviews" />*/}
      {/*    <div className="row justify-content-center">*/}
      {/*      <div className="col-12">*/}
      {/*        <Slider className="mi-testimonial-slider" {...sliderSettings}>*/}
      {/*          {reviews.map((review: ReviewItem) => (*/}
      {/*            <Testimonial key={review.id} {...review} />*/}
      {/*          ))}*/}
      {/*        </Slider>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </Layout>
  );
}
