import React, { Component } from "react";
import Table from "./components/table";

export default class App extends Component {
  handleThead = (number) => {
    const thead = [];
    for (let i = 0; i < number; i++) {
      thead.push(<th>Column {i}</th>);
    }
    return thead;
  };

  handleTable = (count) => {
    const table = [];
    for (let i = 0; i < count; i++) {
      table.push(
        <tr>
          <td>Tom</td>
          <td>10</td>
          <td>London Park No {i}</td>
          <td>London Park No {i}</td>
          <td>London Park No {i}</td>
          <td>London Park No {i}</td>
          <td>London Park No {i}</td>
          <td>London Park No {i}</td>
          <td>London Park No {i}</td>
          <td>London Park No {i}</td>
        </tr>
      );
    }
    return table;
  };
  render() {
    return (
      <div className="wrapper">
        <Table onThLength={this.handleThead} onTableCount={this.handleTable} />
      </div>
    );
  }
}
