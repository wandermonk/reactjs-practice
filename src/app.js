class IndecisionApp extends React.Component {
    render(){
        const title = 'IndecisionApp';
        const subTitle = 'Put your life in the hands of a computer.';
        const options = ["option1","option2","option3"];
        return (
            <div>
              <Header title={title} subtitle={subTitle}/>
              <Action title="action"/>
              <Options title="options" options={options}/>
              <AddOption title="addOption"/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
            <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
            <ol>
                {
                  this.props.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    }
                    )
                }
            </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
            option component here.
            </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                <form>
                <input type="text" name="option"/>
                <button>Add option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));