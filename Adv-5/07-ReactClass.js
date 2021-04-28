//Fingir que é a Class Components dentro do react
class React {
  constructor(reactComponents) {
    this.reactComponents = reactComponents;
  }
}

class Toggle extends React {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    //This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(This);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !this.state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "on" : "off"}
      </button>
    );
  }
}
