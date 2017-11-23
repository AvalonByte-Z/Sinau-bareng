import React from "react";
import axios from "axios"

// import LinkToProfile from "../atoms/LinkToProfile";
import Layout from "../templates/Layout";
import ListOfProfile from "../organisms/ListOfProfile";


export default class ListProfile extends React.Component {
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //       users: []
  //     }
  //   }
  //
  //   componentWillMount() {
  //     axios
  //       .get(`${process.env.REACT_APP_API_URL}/api/users`)
  //       .then(response => {
  //         console.log(response.data)
  //         this.setState({
  //           users: response.data
  //         })
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
    render() {
    // const users = this.state.users
    return (
      <Layout>
        {/* <ul>
          {users.map(user => {
            return (
              <li key={user.id}>
                <LinkToProfile user={user} />{" "}
              </li>
            )
          })}
        </ul> */}
        <ListOfProfile></ListOfProfile>


      </Layout>
    )
  }

}

// import DATAPROFILES from "../data/users";

// const ListProfile = () => (
//   <Layout>
//     <ul>
//       {DATAPROFILES.map(user => {
//         console.log(user);
//         return (
//           <li>
//             <LinkToProfile user={user} />
//           </li>
//         );
//       })}
//     </ul>
//   </Layout>
// );
//
// export default ListProfile;
