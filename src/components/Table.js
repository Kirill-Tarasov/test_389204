import React, { Component } from "react";

class Table extends Component {
  state = {
    pageSize: 10,
  };

  handlePageSizeChange = (event) => {
    const { value } = event.target;
    this.setState({ pageSize: value });
  };

  render() {
    const { data } = this.props;
    const { pageSize } = this.state;

    if (!data) {
        return <div>Идет загружка данных, ожидате...</div>;
      }

    const tableRows = data.slice(0, pageSize).map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.email}</td>
      </tr>
    ));

    return (
      <div>
        <select value={pageSize} onChange={this.handlePageSizeChange}>
          <option value={10}>10 элементов</option>
          <option value={30}>30 элементов</option>
          <option value={50}>50 элементов</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;