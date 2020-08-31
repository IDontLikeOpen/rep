import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

// const UserItem = (props) => {
const UserItem = ({user: {login, avatar_url, html_url}}) => 
  // state = {
  //       id: "id",
  //       login: "mojombo",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //       html_url: "https://github.com/mojombo",
  //     };
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   icon: PropTypes.string.isRequired,
  // };

    // DeSTRucTuRInG
    // const { login, avatar_url, html_url } = props.user;
      <div>
        <div className="card text-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "60px" }}
          />
          <h3>{login}</h3>

          <div>
            {// Whu curly braces for logical statements?
            }
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">MORE</Link>
          </div>
        </div>
      </div>

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
