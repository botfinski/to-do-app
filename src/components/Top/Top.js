import React, { Component } from "react";
import propTypes from "prop-types";
import "./Top.scss";

class Top extends Component {
  state = {
    orgHeight: null
  };

  textareaRef = React.createRef();

  componentDidMount() {
    let orgHeight = this.textareaRef.current.offsetHeight;
    this.setState({ orgHeight });
  }

  componentDidUpdate() {
    this.textareaRef.current.style.height = "auto";
    this.textareaRef.current.style.height = this.textareaRef.current.scrollHeight + "px";
  }

  render() {
    return (
      <div className="Top">
        <form onSubmit={this.props.submitted}>
          <textarea
            name="content"
            type="text"
            autoComplete="off"
            placeholder="Type here..."
            onChange={this.props.typed}
            value={this.props.value}
            data-valid={this.props.valid}
            ref={this.textareaRef}
          />
          <div>
            <p className="Top__charcount">{this.props.charCount}</p>
            <button disabled={this.props.disabled} onClick={this.handleClick}>
              Submit
              <span />
              <span />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Top.propTypes = {
  typed: propTypes.func,
  value: propTypes.string,
  valid: propTypes.bool
};

export default Top;
