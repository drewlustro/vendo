/** @jsx React.DOM */
var React = require('react');

var KIOSKMODE = {
  BOOT: 0,
  IDLE: 1,
  INTRO: 2,
  STATS: 3,
  PLEASANT: 4,
  UNKNOWN: -1
};

var Kiosk = React.createClass({
  getInitialState: function() {
    return {
      mode: KIOSKMODE.BOOT,
      secondsElapsed: 0,
      secondsOnMode: 0,
      customers: 0,
      timeLastCustomer: 1424936768519
    };
  },
  getModeName: function (mode) {
    mode = mode !== undefined ? mode : this.state.mode;
    switch (mode) {
      case KIOSKMODE.BOOT:
        return 'Booting...';
      case KIOSKMODE.IDLE:
        return 'Idle';
      case KIOSKMODE.INTRO:
        return 'Intro';
      case KIOSKMODE.STATS:
        return 'Statistics';
      case KIOSKMODE.PLEASANT:
        return 'Pleasant';
      default:
        return 'Unkown Mode';
    }
  },
  tick: function() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1,
      secondsOnMode: this.state.secondsOnMode + 1}
    );
    if (this.state.secondsOnMode >= 3) {
      var nextMode = this.state.mode + 1;
      if (this.state.mode == KIOSKMODE.PLEASANT) {
        nextMode = KIOSKMODE.IDLE;
      }
      this.switchMode(nextMode);
    }
  },
  switchMode: function (mode) {
    this.setState({
      secondsOnMode: 0,
      mode: mode
    });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
        <h4>{this.getModeName(this.state.mode)}</h4>
        <div>Total Seconds Elapsed: {this.state.secondsElapsed}</div>
        <div>Seconds On Mode: {this.state.secondsOnMode}</div>
      </div>
    );
  }
});


module.exports = Kiosk;
