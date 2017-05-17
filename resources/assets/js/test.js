var Tweet = React.createClass({
  	getInitialState: function() {
  		return {
  			alltweets: []
  		};
  	},
  	componentDidMount: function() {

  	},
  	_getTweets: function() {
  		$.get('/tweets/all',function(data) {
  			this.setState({ alltweets: data });
  		}.bind(this));
  	},
    render: function() {
		var handleTweets = this.state.alltweets.map(function(twt) {
			return <TweetBanner key={twt.id} id={twt.id} tweet={twt.tweet} />
		});
		return (
			<div>
			  <TwitterHeader />
			  <TwitterPoster />

			  {this._getTweets()}
			  {handleTweets}
			</div>
		);
    }
  });
