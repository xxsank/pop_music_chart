//--------------------
// import core
//--------------------
import React, { Component, Fragment } from "react";

//--------------------
// import third-party
//--------------------
import Axios from "axios";

//--------------------
// import presentation component
//--------------------
import TableComponent from "../component/table";

//--------------------
// import util
//--------------------
import { REACT_APP_API_KEY, REACT_APP_API_BASE_URL } from "../../utils/secret";

class ChartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      fetchDataItemLength: 50,
      fetchDataSource: []
    };
    this.fetchData.bind(this);
  }

  //--------------------
  //
  //--------------------
  componentDidMount() {
    this.fetchData();
  }

  //--------------------
  //
  //--------------------
  fetchData = () => {
    const { pageNumber, fetchDataItemLength } = this.state;
    const url = `${REACT_APP_API_BASE_URL}?method=chart.gettopartists&page=${pageNumber}&limit=${fetchDataItemLength}&api_key=${REACT_APP_API_KEY}&format=json`;
    Axios.get(url).then(response => {
      this.setState({
        fetchDataSource: response.data.artists.artist
      });
    });
  };

  //--------------------
  //
  //--------------------
  goToDetailPage = (artistName, uid) => {
    this.props.history.push({
      pathname: `/detail/${uid}`,
      state: { artistName }
    });
  };

  //--------------------
  //
  //--------------------
  render() {
    const { fetchDataSource } = this.state;
    return (
      <Fragment>
        <TableComponent
          dataSource={fetchDataSource}
          goToDetailPage={this.goToDetailPage}
        />
      </Fragment>
    );
  }
}

export default ChartPage;
