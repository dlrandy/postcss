import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "../styles/AliasedName.css";

class AliasedName extends React.Component {
  hoverTimer = null;

  longHovering = false;

  render() {
    let className = classNames(
      { "svip-user": this.props.isSVIP },
      { "vip-user": this.props.isVIP },
      { "admin-user": this.props.isAdmin }
    );
    return (
      <span
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
        ref={span => (this.el = span)}
        className={` 
             display-name 
             aliasable 
             colorable 
             ${className} 
             `}
        data-user-id={this.props.id}
        data-user-type={className}
      >
        {this.props.name}
      </span>
    );
  }

  handleMouseEnter = () => {
    if (this.hoverTimer) {
      return;
    }

    this.hoverTimer = setTimeout(() => this.onLongHover, 500);
  };

  onLongHover = () => {
    this.longHovering = true;

    this.props.onLongHoverStartUsername(this.getIdNameDOM());
  };

  handleMouseLeave = () => {
    clearTimeout(this.hoverTimer);
    this.hoverTimer = null;

    if (this.longHovering) {
      this.longHovering = false;
      setTimeout(
        this.props.onLongHoverEndUsername.bind(null, this.getIdNameDOM()),
        500
      );
    }
  };

  handleClick = () => {
    this.longHovering = false;

    this.props.onClicktUsername(this.getIdNameDOM());
  };

  getIdNameDOM = () => {
    return {
      id: this.props.id,
      name: this.props.name,
      el: this.el
    };
  };
}

AliasedName.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default AliasedName;
