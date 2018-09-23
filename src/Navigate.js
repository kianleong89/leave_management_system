import React, { Component } from 'react';
import './Navigate.css';

class Navigate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Navigation_Bar">
        <ul>
          <li className="dropdown home">
            <input type="button" className="dropbtn" name="navigate" value="Home" onClick={this.props.pageNavigate} />
          </li>
          <li className="dropdown leave">
            <input type="button" className="dropbtn" name="navigate" value="Leave" onClick={this.props.pageNavigate} />
            <div className="leave-content">
              <a href="#" page="leave_request" onClick={this.props.pageNavigate}>Leave Request</a>
              <a href="#" page="leave_history" onClick={this.props.pageNavigate}>Leave History</a>
            </div>
          </li>
          <li className="dropdown admin">
          <input type="button" className="dropbtn" name="navigate" value="Admin" onClick={this.props.pageNavigate} />
            <div className="admin-content">
              <a href="#" page="leave_approval" onClick={this.props.pageNavigate}>Leave Approval</a>
              <a href="#" page="leave_report" onClick={this.props.pageNavigate}>Leave Report</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigate;