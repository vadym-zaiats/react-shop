import React from "react";
import "../Modal/index.css";
import styled from "styled-components";
const FooterButtons = styled.div`
  padding: 10px 0;
  text-align: center;
  background-color: #ea4b35;
`;
class Modal extends React.Component {
  render() {
    return this.props.isActive ? (
      <div className="modal-overlay" onClick={this.props.onClick}>
        <div className="modal-window">
          <div className="modal-question">{this.props.question}</div>
          <button className="modal-footer">{this.props.actions}</button>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
