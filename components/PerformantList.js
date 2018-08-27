import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Text, ListItem, View } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CardSection from '../components/CardSection';

class PerformantList extends Component {
  renderDescription(item) {
    console.log(this.props.selectedLibraryId === item.id);
    if (this.props.selectedLibraryId === item.id) {
      return (
        <CardSection>
          <Text>{item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <FlatList
        data={this.props.data.libraries}
        keyExtractor={item => item.id}
        /*Make sure to set extra data to the state thats being updated*/
        extraData={this.props.selectedLibraryId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.selectLibrary(item.id)}>
            <View>
              <CardSection>
                <Text>{item.title}</Text>
              </CardSection>
              {this.renderDescription(item)}
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

function mapStateToProps({ selectedLibraryId }) {
  //console.log(selectedLibraryId);
  return {
    selectedLibraryId
  };
}

export default connect(mapStateToProps, actions)(PerformantList);
