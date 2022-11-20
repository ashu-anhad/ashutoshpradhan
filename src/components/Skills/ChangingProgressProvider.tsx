import { useState, useEffect } from "react";

const ChangingProgressProvider = (props: any) => {
  var [perValue, setPerValue] = useState(0);

  useEffect(() => {
    const delay = (i: any, index: any) => {
      setTimeout(() => {
        setPerValue(i);
      }, props.interval * index);
    };
    props.values.map((per: any, index: any) => delay(per, index));
  }, [props.values, props.interval]);

  return props.children(perValue);
};

export default ChangingProgressProvider;
