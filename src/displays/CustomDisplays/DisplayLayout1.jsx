import React from "react";
import { Layout1 } from "../../components";

export default function DisplayLayout1(props) {
  const a = props.a || [];
  const b = props.b || [];
  const c = props.c || [];
  return (
    <div>
      {a.length ? (
        <Layout1
          bgColor={a[0]}
          fontColor={a[1]}
          accent={a[2]}
          accentFontColor={a[3]}
          accentBorder={a[4]}
        />
      ) : (
        <></>
      )}
      {b.length ? (
        <Layout1
          bgColor={b[0]}
          fontColor={b[1]}
          accent={b[2]}
          accentFontColor={b[3]}
          accentBorder={b[4]}
        />
      ) : (
        <></>
      )}
      {c.length ? (
        <Layout1
          bgColor={c[0]}
          fontColor={c[1]}
          accent={c[2]}
          accentFontColor={c[3]}
          accentBorder={c[4]}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
