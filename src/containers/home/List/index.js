import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import GroupList from '../../../components/ProjectListItem';
import Dialog from '../../../components/Dialog'

class ProjectList extends Component {
  static componentName = 'ProjectList';

  static propTypes = {
    dialogContent: PropTypes.string,
  };

  static defaultProps = {
    dialogContent: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    
  }

  render() {
    const rows = this.state.rowData.map((val, index) => (
      <GroupList key={val.name} content={this.state.rowData[index]} />));
    return (
      <ScrollView style={AppStyle.detailBasisStyle}>
        <Dialog show={this.state.loading} content={this.props.dialogContent} />
        {
          !this.state.loading
            ? rows
            : null
        }
      </ScrollView>);
  }
}
export default ProjectList;
