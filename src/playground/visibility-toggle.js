class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visible: false
        }
    }

    handleVisibility(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render(){
        return (
            <div>
            <h1>This is the paragraph.</h1>
            <button onClick={this.handleVisibility}>{this.state.visible ? 'show':'hide'}</button>
            {this.state.visible && (
                <div>
                <p>Hey. These are some details you can now see!</p>
                </div>
            )}
            </div>
        );
    } 
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));