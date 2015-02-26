/** @jsx React.DOM */

var React = window.React = require('react'),
    Kiosk = require("./ui/Kiosk"),
    CoinSwitch = require("./ui/CoinSwitch"),
    mountNode = document.getElementById("app");

var todoStyle = {
    float: 'left',
    maxWidth: '50%'
};

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <div style={todoStyle}>
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.onChange} value={this.state.text} />
              <button>{'Add #' + (this.state.items.length + 1)}</button>
            </form>
            <Kiosk />
        </div>
        <CoinSwitch source="state/coinSwitchWait.json" />
      </div>
    );
  }
});


React.render(<TodoApp />, mountNode);

