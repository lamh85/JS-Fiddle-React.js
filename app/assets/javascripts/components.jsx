//= require_tree ./components

// THIS COMPONENT IS THE MOST OUTER SHELL
var FullScreen = React.createClass({
  render: function() {
    return (
      <div>
        <Half position="left" title="Input your code here" />
        <Half position="right" title="Results appear here" />
      </div>
      )

  } // End render property
}); // End FullScreen component

var Half = React.createClass({
  render: function() {

    if (this.props.position == "left") {
      return (
        <div className="col-md-6 col-lg-6">
          <h1>{this.props.title}</h1>
          <Quarter title="Enter your HTML here" language="html"/>
          <Quarter title="Enter your CSS here" language="css"/>
        </div>
        )
    } else {
      return (
        <div id="output" className="col-md-6 col-lg-6">
          <h1>Output appears here</h1>
        </div>)
    } // End if else statement

  } // End render property
}); // End Half component

var Quarter = React.createClass({
  render: function() {
    return (
      <div className="quarter">
        <h2>{this.props.title}</h2>
        <textarea rows="10"></textarea>
        <p>The props are:</p>
        <p>{JSON.stringify(this.props)}</p>
      </div>
      )
  }
});