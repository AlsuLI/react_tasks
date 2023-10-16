import React from "react";

export const Progress = ({ min, max, value }) => {
  let res =  max  -  min ;
  let res2 = value  -  min ;
  let resProcent = (res2 * 100) / res;
  let styles = { width: `${resProcent}%`  };
   console.log(styles);
  return (
    <div class="progress">
      <div class="progress-bar" style={styles}>
        {resProcent}%
      </div>
     
    </div>
  );
};
