import React from "react";

import Layout from "../templates/Layout";
import ListOfProfile from "../organisms/ListOfProfile";


export default class ListProfile extends React.Component {

    render() {
      return (
      <Layout>
        <ListOfProfile></ListOfProfile>
      </Layout>
    )
  }

}
