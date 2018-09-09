"use strict";
const app = {
    title: 'Indecision App',
    subtitle: 'put your life in the hands of a computer',
    options: []
};

function showOptions(){
    if (app.options.length > 0){
        return <p>Here are your options</p>
    }else {
        return <p>No Options</p>
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = ' ';
        renderFormData();
    }
};

const removeOne = (e) => {
    e.preventDefault();
    if(app.options.length > 0){
        app.options.pop();
        renderFormData();
    }
};

const removeAll = (e) => {
    e.preventDefault();
    if(app.options.length > 0){
        app.options = [];
        renderFormData();
    }
};

const appRoot = document.getElementById('app');
const renderFormData = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {showOptions()}
            <p>{app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
                <button onClick={removeOne}>Remove</button>
                <button onClick={removeAll}>Remove All</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

renderFormData();