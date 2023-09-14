import React from "react";
import "../styles/components/PageTitle.scss";

function PageTitle(props: { title: string }) {
  return (
    <>
      <h1 className="header-page">{props.title}</h1>
    </>
  );
}

export default PageTitle;
