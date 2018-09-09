"use strict";

var app = {
    title: 'Indecision App',
    subtitle: 'put your life in the hands of a computer',
    options: []
};

function showOptions() {
    if (app.options.length > 0) {
        return React.createElement(
            'p',
            null,
            'Here are your options'
        );
    } else {
        return React.createElement(
            'p',
            null,
            'No Options'
        );
    }
}

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
        renderFormData();
    }
};

var removeOne = function removeOne(e) {
    e.preventDefault();
    if (app.options.length > 0) {
        app.options.pop();
        renderFormData();
    }
};

var removeAll = function removeAll(e) {
    e.preventDefault();
    if (app.options.length > 0) {
        app.options = [];
        renderFormData();
    }
};

var appRoot = document.getElementById('app');
var renderFormData = function renderFormData() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        showOptions(),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            ),
            React.createElement(
                'button',
                { onClick: removeOne },
                'Remove'
            ),
            React.createElement(
                'button',
                { onClick: removeAll },
                'Remove All'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderFormData();
