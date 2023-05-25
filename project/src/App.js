import React from "react";
import "./App.css";
import Form from "./components/form";
import Card from "./components/card";

class App extends React.Component {
  state = {
    cardName: "",
    cardDescription: "",
    cardAttr1: "0",
    cardAttr2: "0",
    cardAttr3: "0",
    cardImage: "",
    cardRare: "",
    cardTrunfo: false,
    hasTrunfo: false,
    inSaveButtonDisabled: true,
  };

  verifyInputs = () => {
    if (
      this.state.cardName !== "" &&
      this.state.cardDescription !== "" &&
      this.state.cardImage !== "" &&
      this.verifyAttributes()
    ) {
      return this.setState({ inSaveButtonDisabled: false });
    }
    return this.setState({ inSaveButtonDisabled: true });
  };

  verifyAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1 = Number(cardAttr1) ?? 0;
    const attr2 = Number(cardAttr2) ?? 0;
    const attr3 = Number(cardAttr3) ?? 0;
    const sum = attr1 + attr2 + attr3;

    if (typeof sum !== "number") return false;
    if (sum > 210) return false;
    if (attr1 > 90 && attr1 < 0) return false;
    if (attr2 > 90 && attr2 < 0) return false;
    if (attr3 > 90 && attr3 < 0) return false;

    return true;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => this.verifyInputs()
    );
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    console.log("fui clicado");
  };

  render() {
    return (
      <div>
        <header>Adicionar Nova Carta</header>
        <main>
          <Form
            onInputChange={this.onInputChange}
            onSaveButtonClick={this.onSaveButtonClick}
            inSaveButtonDisabled={this.state.inSaveButtonDisabled}
            cardName={this.state.cardName}
            cardDescription={this.state.cardDescription}
            cardAttr1={this.state.cardAttr1}
            cardAttr2={this.state.cardAttr2}
            cardAttr3={this.state.cardAttr3}
            cardImage={this.state.cardImage}
            cardRare={this.state.cardRare}
            cardTrunfo={this.state.cardTrunfo}
          />
          <Card
            cardName={this.state.cardName}
            cardDescription={this.state.cardDescription}
            cardAttr1={this.state.cardAttr1}
            cardAttr2={this.state.cardAttr2}
            cardAttr3={this.state.cardAttr3}
            cardImage={this.state.cardImage}
            cardRare={this.state.cardRare}
            cardTrunfo={this.state.cardTrunfo}
          />
        </main>
      </div>
    );
  }
}

export default App;
