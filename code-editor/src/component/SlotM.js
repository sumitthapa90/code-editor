import React from "react";

function SlotM(props) {
  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <div>
          <h2>
            {x} {y} {z}
          </h2>
          <h2>This is Matching</h2>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h2>
            {x} {y} {z}
          </h2>
          <h2>This is not Matching</h2>
          <hr />
        </div>
      </>
    );
  }
}

export default SlotM;
