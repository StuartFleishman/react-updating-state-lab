// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  } 

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
      <button onClick={this.handleClick} className="bitrate">hi</button>
      <button onClick={this.handleRes} className="resolution">hi</button>
      </div>
    )
  }
}

export default YouTubeDebugger