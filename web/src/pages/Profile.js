import React from "react";
import axios from "axios"

import Layout from "../templates/Layout";

export default class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profile: {}
    }
  }

  componentWillMount() {
    const id = Number(this.props.match.params.uID)
    axios
      .get(`${process.env.REACT_API_API_URL}/api/users/${id}`)
      .then(response =>{
        const profile = response.data
        console.log(profile);
        this.setState({profile: profile
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render(){
    const profile = this.state.profile
    return (
      <Layout>
        <div>
          <h3>{profile.name}</h3>
          {profile.title && <h4>{profile.title}</h4>}
          {profile.bio && <p>{profile.bio}</p>}
          <small>id: {profile.id}</small>
        </div>
      </Layout>
    )
  }

}



// import DATAPROFILES from "../data/users";
//
// const Profile = props => (
//   <Layout>
//     <div>
//       {DATAPROFILES.filter(user => {
//         return user._id === Number(props.match.params.id);
//       }).map(user => {
//         return (
//           <div key={user._id}>
//             <h2>{user.name}</h2>
//             {user.title && <h3>{user.title}</h3>}
//             <h3>id: {user._id}</h3>
//           </div>
//         );
//       })}
//     </div>
//   </Layout>
// );
//
// export default Profile;
