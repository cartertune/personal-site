import React from "react";
import _ from "lodash";
import Page from "../components/Page";
import books from "../../data/books";
import ContentPreviewItem from "../components/ContentPreviewItem";

const Books = (props) => {
  return (
    <Page>
      {_.map(books, (book) => {
        const { title, previewUrl, description, url } = book;
        return (
          <ContentPreviewItem
            key={title}
            title={title}
            previewUrl={previewUrl}
            description={description}
            url={url}
          />
        );
      })}
    </Page>
  );
};

export default Books;
