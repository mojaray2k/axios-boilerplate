function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLOutput(error);
        });
}

function performGetRequest2() {
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').value;
    resultElement.innerHTML = '';

    axios.get('http://jsonplaceholder.typicode.com/todos', {
            params: {
                id: todoId
            }
        })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLOutput(error);
        });
}

document.getElementById('todoInputForm').addEventListener("submit", performPostRequest);

function performPostRequest(e) {
    var resultElement = document.getElementById('postResult');
    var todoTitle = document.getElementById('todoTitle').value;
    resultElement.innerHTML = '';

    axios.post('http://jsonplaceholder.typicode.com/todos', {
            userId: '1',
            title: todoTitle,
            completed: false
        })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLOutput(error);
        })
        e.preventDefault();
}

function generateSuccessHTMLOutput(response) {
    return (`
        <div class="card-header"><h4>Result:</h4></div>
        <div class="card-body border border-success">
            <div class="card-header"><h5>Status:</h5></div>
            <div class="card-body border border-primary">                
                <pre>${response.status} ${response.statusText}</pre>
            </div>
            <div class="card-header"><h5>Headers:</h5></div>
            <div class="card-body border border-primary">                
                <pre>${JSON.stringify(response.headers, null, '\t')}</pre>
            </div>
            <div class="card-header"><h5>Data:</h5></div>
            <div class="card-body border border-primary">
                <pre>${JSON.stringify(response.data, null, '\t')}</pre>
            </div>
        </div>
    `);
}

function genereateErrorHTMLOutput(error) {
    return (`
        <div class="card-header"><h4>Result:<h4></div>
        <div class="card-body border border-danger">            
            <div class="alert alert-dismissible alert-danger">
                <strong>${error.message}</strong>
            </div>
            
            <div class="alert alert-dismissible alert-danger">
                <div class="card-header"><h5>Status:</h5></div>  
                <div class="card-body border border-danger">                                 
                    <strong>${error.response.status} ${error.response.statusText}</strong>
                </div>
                <div class="card-header"><h5>Headers:</h5></div>
                <div class="card-body border border-danger"> 
                    <strong>${JSON.stringify(error.response.headers, null, '\t')}</strong>
                </div>
                <div class="card-header"><h5>Data:</h5></div>
                <div class="card-body border border-danger">
                    <strong>${JSON.stringify(error.response.data, null, '\t')}</strong>
                </div>
            </div>
        </div>
    `);
}

function clearOutput() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';
}