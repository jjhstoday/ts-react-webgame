import React, { Component } from 'react';
import { TryInfo } from './types';

export default class Try extends Component<{ tryInfo: TryInfo }> {
  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}
