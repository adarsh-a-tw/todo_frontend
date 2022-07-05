import axios from "axios";

const fetchAPI = async () => {

    var config = {
        headers: {}
    };

    try {
        const response = await axios.get('http://localhost:8080/todos', config);
        return response.data;
    } catch (error) {
        console.log(error);
    };

}

const createAPI = async (todo) => {

    var data = JSON.stringify(todo);

    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        await axios.post('http://localhost:8080/todos', data, config);
    } catch (error) {
        console.log(error);
    };

}

const editAPI = async (id, description, completed) => {
    var data = JSON.stringify({
        "description": description,
        "completed": completed
    });

    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        await axios.put(`http://localhost:8080/todos/${id}`, data, config);
    } catch (error) {
        console.log(error);
    };

}

const deleteAPI = async (id) => {

    var config = {
        headers: {}
    };

    try {
        await axios.delete(`http://localhost:8080/todos/${id}`, config);
    } catch (error) {
        console.log(error);
    };
}

export default { fetchAPI, createAPI, editAPI, deleteAPI };