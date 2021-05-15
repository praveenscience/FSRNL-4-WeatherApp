import React from "react";

const Sadaff = ({ Text, setText }) => {
  return <textarea value={Text} onChange={e => setText(e.target.value)} />;
};

export default Sadaff;
