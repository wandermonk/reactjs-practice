"use strict";
const app = {
    title: 'Indecision App',
    subtitle: 'put your life in the hands of a computer',
    options: ['one','two']
};

function showOptions(){
    if (app.options.length > 0){
        return <p>Here are your options</p>
    }else {
        return <p>No Options</p>
    }
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {showOptions()}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const appRoot = document.getElementById('app');