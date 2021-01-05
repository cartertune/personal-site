import React from "react";
import _ from "lodash";
import Page from "../components/Page";
import H2 from "../components/H2";
import H4 from "../components/H4";
import P from "../components/P";
import books from "../../data/books";
const Books = (props) => {
  return (
    <Page>
      {_.map(Object.keys(books), (category) => {
        return (
          <div className="pt-5" key={category}>
            <div className="d-flex flex-column">
              <div>
                <H2>{category}</H2>
              </div>
              <div className=" row">
                {_.map(books[category], (book) => {
                  const { title, previewUrl, description, url } = book;
                  return (
                    <div className="col-md-3 p-4">
                      <a href={url} target="_blank" key="title">
                        <div className="book-preview-div">
                          <img
                            className="w-100 book-preview"
                            src={previewUrl}
                          ></img>
                        </div>
                        <div className="book-preview-content pt-2 p-1">
                          <H4>{title}</H4>
                          <P light>{description}</P>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </Page>
  );
};

export default Books;
