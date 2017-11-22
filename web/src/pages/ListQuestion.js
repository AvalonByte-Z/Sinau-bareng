import React from "react";

import LinkToProfile from "../atoms/LinkToProfile";
import Layout from "../templates/Layout";

import DATAPROFILES from "../data/users";

const ListQuestion = () => (
  <Layout>
    <ul>
      {DATAPROFILES.map(user => {
        console.log(user);
        return (
          <li>
            <LinkToProfile user={user} />
          </li>
        );
      })}
    </ul>
  </Layout>
);

export default ListQuestion;
