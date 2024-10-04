import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <h2 style={{ color: "white", textAlign: "center", marginTop: "20%" }}>
          Welcome to my Portfolio! Loading...
        </h2>
      )}
    </div>
  );
}

export default Pre;
