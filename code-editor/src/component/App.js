import React, { useState, useEffect } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
<html>
<body><${html}<body/>
<style> ${css} <style/>
<script> ${js}<script/>
<html/>
`
      );
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <header>
        <h1>Code Editor</h1>
        <p>You can write and Preview HTML and CSS code live!</p>
      </header>

      <div>
        <div className="pane-box">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />

          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />

          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
          />
        </div>
        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100px"
            height="100px"
          />
        </div>
      </div>
    </>
  );
}

export default App;
