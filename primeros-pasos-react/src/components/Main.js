import React from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import Reinicio from "./Reinicio";
import data from "./data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
      seleccionPrevia: "",
      historial: [],
    };
  }

  componentDidMount() {
    alert("Hola! Listx para elegir tu propia aventura? Comencemos!");
  }

  componentDidUpdate(prevState) {
    if (prevState.contador !== this.state.contador) {
      this.state.historial.push(this.state.seleccionPrevia);
    }
  }

  handleClick = (element) => {
    const id = element.target.id;

    this.state.contador >= 7
      ? alert("Fin de la Historia!")
      : id === "A" && this.state.seleccionPrevia !== "A"
      ? this.setState({
          contador: this.state.contador + 1,
          seleccionPrevia: "A",
        })
      : id === "A" && this.state.seleccionPrevia === "A"
      ? this.setState({ contador: this.state.contador + 2 })
      : id === "B" && this.state.seleccionPrevia === "A"
      ? this.setState({
          contador: this.state.contador + 3,
          seleccionPrevia: "B",
        })
      : this.setState({
          contador: this.state.contador + 2,
          seleccionPrevia: "B",
        });
  };

  handleReinicio = () => {
    this.setState({ contador: (this.state.contador = 0), historial: [] });
  };

  render() {
    return (
      <div className="layout">
        <div className="historia">
          <h3>{data[this.state.contador].historia}</h3>
        </div>
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Recordatorio
          seleccion={this.state.seleccionPrevia}
          historial={this.state.historial.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        />
        <Reinicio handleReinicio={this.handleReinicio} />
      </div>
    );
  }
}

export default Main;
