import React from 'react';
import Griddle from 'griddle-react';

class ResultTable extends React.Component {
  constructor(){
    super();
  }
  render(){
    let data = this.props.data;
    return (
      <Griddle results={data} tableClassName="table" showFilter={true}
      showSettings={true} showFilter={false} displayName="Accounts" columns={["name", "city", "state", "country"]}/>
    )
  }
}

export default ResultTable
