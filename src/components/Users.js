import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        Users
        <ul>
          {this.props.users.map((user, i) => <li key={i}>{user.username} from {user.hometown}</li>) }
        </ul>
        <div>
          User Count:
          {this.props.userCount}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let userCount = state.users.length
  return { users: state.users, userCount: userCount }
}
export default connect(mapStateToProps)(Users)
