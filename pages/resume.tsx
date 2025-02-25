import React, { type JSX } from "react";
import Head from "next/head";
import { SectionTitle, SmallTitle, Layout, TimelineItem } from "../components";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import database from "../data/database";

export default function Resume() {
  const { workingExperience, educationExperience } = database.experience;

  return (
    <Layout>
      <Head>
        <title>akds : resume</title>
        <meta name="description" content="Arkadiusz resume page" />
      </Head>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Resume" />
          <SmallTitle title="Working Experience" Icon={WorkIcon} />
          <div className="mi-resume-wrapper">
            {workingExperience.map((workingExp) => (
              <TimelineItem key={workingExp.id} {...workingExp} />
            ))}
          </div>
          <div className="mt-30" />
          <SmallTitle title="Educational Qualifications" Icon={MenuBookIcon} />
          <div className="mi-resume-wrapper">
            {educationExperience.map(
              (educationExperience): JSX.Element => (
                <TimelineItem
                  key={educationExperience.id}
                  {...educationExperience}
                />
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
