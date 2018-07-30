// @flow
import React, { Component } from 'react'
import styles from './Home.css'

type Props = [{title: '首页'},{title: '设备管理'},{title: '出入应用管理'}]

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <ul>
            <li>首页</li>
          </ul>
        </div>
      </div>
    );
  }
}
