import React, { useState } from "react";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const TermsAndConditions = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-6 bg-[#F6F6F6] h-screen">
      <h1 className="text-xl font-semibold mb-4">Terms & Conditions</h1>
      <Editor
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        style={{ height: "320px", backgroundColor: "white" }}
      />

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-[#007BFF] text-white rounded-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
