var React = require('react'),
    TrackStore = require('../stores/TrackStore'),
    TrackActions = require('../actions/TrackActions'),
    TrackPlayer = require('../components/TrackPlayer');

var JukeBox = React.createClass({
  componentDidMount: function () {
    TrackStore.addListener(this._onChange);
  },

  getInitialState: function () {
    return { tracks: TrackStore.all() };
  },

  render: function () {
    return (
      <div className="jukebox">
        <h3>JUKEBOX</h3>
        {
          this.state.tracks.map(function (track) {
            return <TrackPlayer key={track.get('id')} track={track}/>
          })
        }
      </div>
    );
  },

  _onChange: function () {
    this.setState({ tracks: TrackStore.all() });
  }
});

module.exports = JukeBox;
