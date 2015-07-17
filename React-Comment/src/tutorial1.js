// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      Hello, world! commentBox here!
      </div>
    )
  }

});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
