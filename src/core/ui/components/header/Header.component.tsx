import * as React from "react";
import Head from "next/head";

export interface IHeaderComponentProps {
  title?: string;
  description?: string;
}

HeaderComponent.defaultProps = {
  title: "",
  string: "",
};

export default function HeaderComponent(props: IHeaderComponentProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
}
