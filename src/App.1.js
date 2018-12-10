import React, { Component } from 'react'

import './App.css'
import { getSongList, getSongCommentList } from './config/api'
import Router from './router'
import { getDateStr } from './utils/date'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      value: ''
    }
  }
  onQuery () {
    this.getData(this.state.value)
  }
  onChange (e) {
    this.setState({
      value: e.target.value
    })
  }
  getData (value) {
    if (!value) return
    getSongList({ keywords: value })
      .then((res) => {
        return getSongCommentList({ id: res.result.songs[0].id, limit: 1 })
      })
      .then((res) => {
        console.log(res.result)
        const list = res.result.hotComments.map((item) => {
          return {
            userImg: item.user.avatarUrl,
            username: item.user.nickname,
            content: item.content,
            likedCount: item.likedCount,
            id: item.commentId,
            date: getDateStr(new Date(item.time), 'YYYY-MM-DD hh:mm:ss')
          }
        })
        this.setState({ list })
      })
  }
  componentDidMount () {}
  render () {
    const { value, list } = this.state
    return (
      <div className='App'>
        <Router />
        <div className='query-box'>
          <input type='text' onChange={this.onChange.bind(this)} value={value} />
          <button onClick={this.onQuery.bind(this)}>query</button>
        </div>
        {list.map((item) => {
          return (
            <div className='box' key={item.id}>
              <div className='box-icon' style={{ backgroundImage: `url(${item.userImg})` }} />
              <div className='box-name'>{item.username}:</div>
              <div className='box-content'>{item.content}</div>
              <div className='box-date'>{item.date}</div>
              <div className='box-number'>{item.likedCount}</div>
            </div>
          )
        })}
      </div>
    )
  }
}
// function Query ({ onChange, onQuery }) {
//   return (

//   )
// }

export default App
