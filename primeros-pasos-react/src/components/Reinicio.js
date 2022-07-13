import React from "react";

class Reinicio extends React.Component {
  render() {
    return (
      <div className="reinicio">
        <button className="boton-final" onClick={this.props.handleReinicio}>
          Volver a Empezar
        </button>
      </div>
    );
  }
}

export default Reinicio;
