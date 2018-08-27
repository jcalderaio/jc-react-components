import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import base64 from 'base-64';
import Header from './app/components/Header';
import Card from './app/components/Card';
import CardSection from './app/components/CardSection';
import Button from './app/components/Button';
import Spinner from './app/components/Spinner';
import Input from './app/components/Input';
import ApiUtils from './app/config/ApiUtils';

class App extends Component {

  state = {
    text: '',
    loading: false,
    id: '',
    email: 'jcalderaio',
    password: '7Rx8bu5hn4'
  }

  onPressButton = () => {
    this.setState({
      loading: true
    });

    fetch('http://psitime.psnet.com/Api/Employees?Logon=jcalderaio', {
        method: 'get',
        headers: {
          'Authorization': 'Basic ' + base64.encode('jcalderaios:7Rx8bu5hn4')
        }
    })
    .then(ApiUtils.checkStatus)
    .then(response => response.text())
    .then(data => {
      this.setState({
        text: data,
        loading: false
      });
    })
    .catch(e => {
      this.setState({
        text: 'There was a problem signing in: ' + e,
        loading: false
      });
    });
  }
