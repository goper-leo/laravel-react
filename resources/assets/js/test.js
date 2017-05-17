import React from 'react';
import ReactDom from 'react-dom';

class Navheader extends React.Component {

  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }

}

export default Navheader;

ReactDom.render(<Navheader />, document.getElementById('test-append'));

// var Tweet = React.createClass({
//   	getInitialState: function() {
//   		return {
//   			alltweets: []
//   		};
//   	},
//   	componentDidMount: function() {
//
//   	},
//   	_getTweets: function() {
//   		$.get('/tweets/all',function(data) {
//   			this.setState({ alltweets: data });
//   		}.bind(this));
//   	},
//     render: function() {
// 		var handleTweets = this.state.alltweets.map(function(twt) {
// 			return <TweetBanner key={twt.id} id={twt.id} tweet={twt.tweet} />
// 		});
// 		return (
// 			<div>
// 			  <TwitterHeader />
// 			  <TwitterPoster />
//
// 			  {this._getTweets()}
// 			  {handleTweets}
// 			</div>
// 		);
//     }
//   });
