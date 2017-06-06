/** @jsx React.DOM */
(function () {
    'use strict';

    var Quiz = React.createClass({
        render: function () {
            return <div>Testing</div>;

        }
    });

    React.renderComponent(<Quiz data={"Foo"} />, 
    document.getElementById('AppContainer'));

})();