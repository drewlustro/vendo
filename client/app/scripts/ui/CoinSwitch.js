/** @jsx React.DOM */
var React = require('react');

var coinSwitchStyle = {
    float: 'right',
    padding: '20px',
    backgroundColor: '#eeeeee',
    borderRadius: '4px',
    margin: '10px'
};

var CoinSwitch = React.createClass({
    getInitialState: function () {
        return {
            credits: 0,
            timeLastUsed: new Date(),
            timeElapsed: 0,
            timeLimit: 5000,
            message: ''
        };
    },
    componentDidMount: function() {
        this.fetchCoinSwitchStatus(this.props.source);
    },
    fetchCoinSwitchStatus: function(url) {
        url = url !== undefined ? url : this.props.source;
        $.get(url, function(result) {
            console.log('CoinSwitch $.get() for "' + url + '":');
            console.log(result);
            var credits = result.credits ? result.credits : 0;
            var timeElapsed = result.timeElapsed ? result.timeElapsed : 0;
            var timeLimit = result.timeLimit ? result.timeLimit : 10000;
            if (this.isMounted()) {
                this.setState({
                    credits: this.state.credits + credits,
                    timeElapsed: this.state.timeElapsed + timeElapsed,
                    timeLimit: timeLimit
                });
            }
        }.bind(this));
    },
    handleCoinWait: function () {
        this.fetchCoinSwitchStatus('state/coinSwitchWait.json');
    },
    handleCoinReceive: function () {
        this.fetchCoinSwitchStatus('state/coinSwitchReceive.json');
    },
    handleCoinUse: function () {
        if (this.state.credits > 0) {
            this.setState({
                credits: this.state.credits - 1,
                timeLastUsed: new Date(),
                timeElapsed: 0,
                message: 'Used a coin! :D'
            });
        } else {
            this.setState({
                message: 'No coins to use! :('
            });
        }
    },
    render: function () {
        var primaryButtonClassName = 'btn btn-primary';
        var buttonClassName = 'btn';
        return (
            <div style={coinSwitchStyle}>
                <div><strong>Credits:</strong> {this.state.credits}</div>
                <div><strong>Last Used:</strong> {this.state.timeLastUsed.toTimeString()}</div>
                <div><em>{Math.floor(this.state.timeElapsed / 1000)} sec elapsed of {Math.floor(this.state.timeLimit / 1000)} sec limit.</em></div>
                <blockquote>{this.state.message}</blockquote>
                <div>
                    <a className={buttonClassName} onClick={this.handleCoinWait}>Wait</a>
                    <a className={buttonClassName} onClick={this.handleCoinReceive}>Recieve</a>
                    <a className={primaryButtonClassName} onClick={this.handleCoinUse}>Use</a>
                </div>
            </div>
        );
    }
});


module.exports = CoinSwitch;
