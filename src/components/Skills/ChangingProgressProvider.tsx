import React, { useState, useEffect } from "react";

const ChangingProgressProvider = (props: any) => {
  var [perValue, setPerValue] = useState(0);

  const delay = (i: any, index: any) => {
    setTimeout(() => {
      setPerValue(i);
    }, props.interval * index);
  };

  useEffect(() => {
    props.values.map((per: any, index: any) => {
      delay(per, index);
    });
  }, []);

  return props.children(perValue);
};

export default ChangingProgressProvider;
