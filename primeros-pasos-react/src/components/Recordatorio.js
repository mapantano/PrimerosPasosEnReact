import React from "react";

class Recordatorio extends React.Component {
  render() {
    return (
      <div className="recordatorio">
        <h4>Selección anterior: {this.props.seleccion}</h4>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Recordatorio;
