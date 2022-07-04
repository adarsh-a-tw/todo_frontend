import axios from "axios";

const fetchAPI = async () => {

    var config = {
        method: 'get',
        url: 'http://localhost:8080/todos',
        headers: {}
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log(error);
    };

}

const createAPI = async (todo) => {

    var data = JSON.stringify(todo);

    var config = {
        method: 'post',
        url: 'http://localhost:8080/todos',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        await axios(config);
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
        method: 'put',
        url: `http://localhost:8080/todos/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    console.log(config)

    try {
        await axios(config);
    } catch (error) {
        console.log(error);
    };

}

const deleteAPI = async (id) => {

    var config = {
        method: 'delete',
        url: `http://localhost:8080/todos/${id}`,
        headers: {}
    };

    try {
        await axios(config);
    } catch (error) {
        console.log(error);
    };
}

export default { fetchAPI, createAPI, editAPI, deleteAPI };