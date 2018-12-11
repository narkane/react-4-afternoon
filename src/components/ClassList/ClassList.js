import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(response => {
        this.setState({ students: response.data });
      });
  }

  render() {
    const students = this.state.students.map((elm, i) => {
      return (
        <Link key={i} to={`/student/${elm.id}`}>
          <h3>
            {elm.first_name} {elm.last_name}
          </h3>
        </Link>
      );
    });
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    );
  }
}
