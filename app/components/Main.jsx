var React = require('react');

var Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    Main.jsx
                    {props.children}
                </div>
            </div>

        </div>
        )
}

module.exports = Main;