import React from "react";
import { Layout1 } from "../../components";

export default function DisplayLayout1(props) {
  const a = props.a || [];
  const b = props.b || [];
  const c = props.c || [];
  return (
    <div>
      {a.length ? (
        <Layout1 bgColor={a[0]} fontColor={a[1]} accent={a[2]} />
      ) : (
        <></>
      )}
      {b.length ? (
        <Layout1 bgColor={b[0]} fontColor={b[1]} accent={b[2]} />
      ) : (
        <></>
      )}
      {c.length ? (
        <Layout1 bgColor={c[0]} fontColor={c[1]} accent={c[2]} />
      ) : (
        <></>
      )}
    </div>
  );
}
