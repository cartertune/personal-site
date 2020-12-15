import React from "react";
import _ from "lodash";
import Page from "../components/Page";
import projects from "../../data/projects";
import ContentPreviewItem from "../components/ContentPreviewItem";

const Projects = (props) => {
  return (
    <Page>
      {_.map(projects, (project) => {
        const { name, previewUrl, description, url } = project;
        return (
          <ContentPreviewItem
            key={name}
            title={name}
            previewUrl={previewUrl}
            description={description}
            url={url}
          />
        );
      })}
    </Page>
  );
};

export default Projects;
