import React from 'react';
import request from '../../request/axios';

import './index.less';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      water: '',
      electricity: '',
      gas: '',
      active: false,
    }
  }

  handleInput(key, event) {
    const value = event.target.value;
    this.setState({
      [key]: value,
    }, () => {
      this.checkData();
    });
  }

  confirm() {
    const { water, electricity, gas, active } = this.state;
    if (!active) {
      return;
    }

    request.post('/submit/info', {
      water,
      electricity,
      gas,
    }).then(res => {
      console.log(res);
    })
  }

  checkData() {
    const { water, electricity, gas } = this.state;
    if (water && electricity && gas) {
      this.setState({
        active: true,
      })
    } else {
      this.setState({
        active: false,
      })
    }
  }

  render() {
    return (
      <div className="index-warpper">
        <div className="form-item">
          <div className="label">水：</div>
          <div className="value">
            <input type="number" placeholder="请输入水吨数" onInput={this.handleInput.bind(this, 'water')}></input>
          </div>
        </div>
        <div className="form-item">
          <div className="label">电：</div>
          <div>
            <input type="number" placeholder="请输入电度数" onInput={this.handleInput.bind(this, 'electricity')}></input>
          </div>
        </div>
        <div className="form-item">
          <div className="label">煤气：</div>
          <div>
            <input type="number" placeholder="请输入煤气度数" onInput={this.handleInput.bind(this, 'gas')}></input>
          </div>
        </div>
        <div className={`confirm ${this.state.active ? 'active' : ''}`} onClick={this.confirm.bind(this)}>确定</div>
      </div>
    )
  }
}