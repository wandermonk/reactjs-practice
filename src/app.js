class IndecisionApp extends React.Component {

  constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOptions = this.handleAddOptions.bind(this);
      this.state = {
          options: []
      };
  }

  handleDeleteOptions(){
      this.setState(() => {
        return {
            options: []
        };
      });
  }

  handleAddOptions(option){
    if(!option){
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  handlePick(){
      const randNumber =Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randNumber]
      alert(option);
  }

  render() {
    const title = "IndecisionApp";
    const subTitle = "Put your life in the hands of a computer.";
    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <Action 
          title="action" 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          title="options" 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          title="addOption"
          handleAddOptions={this.handleAddOptions}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
   render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => {
          return <Option key={option} optionText={option} />;
        })}
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption=this.addOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const err = this.props.handleAddOptions(option);
    this.setState(() => {
      return {
        err
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.err && <p>{this.state.err}</p>}
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
