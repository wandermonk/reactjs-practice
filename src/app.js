class IndecisionApp extends React.Component {

  constructor(props){
      super(props);
      this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
      this.state = {
          options: ['thing one']
      };
  }

  handleDeleteOptions(){
      this.setState(() => {
        return {
            options: []
        };
      });
  }

  render() {
    const title = "IndecisionApp";
    const subTitle = "Put your life in the hands of a computer.";
    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <Action title="action" hasOptions={this.state.options.length > 0}/>
        <Options 
          title="options" 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption title="addOption" />
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
  handlePick() {
    alert("handlPick clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
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
  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
        alert(option);
    }
  }
  removeOption() {
    alert("removed option");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
