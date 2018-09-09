let count = 0;

const addOne = () => {
    count++;
    renderCount();
};

const minusOne = () => {
    count--;
    renderCount();
};

const reset = () => {
    count = 0;
    renderCount();
};
const appRoot = document.getElementById('app');
const renderCount = () => {
    const templateTwo = (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={addOne} id='my-id' className='button'>+1</button>
          <button onClick={minusOne} id='my-id1' className='button'>-1</button>
          <button onClick={reset} id='my-id2' className='button'>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCount();