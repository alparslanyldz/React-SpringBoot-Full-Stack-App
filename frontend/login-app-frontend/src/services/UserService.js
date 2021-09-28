import axios from 'axios';

const TICKET_API_BASE_URL = "http://localhost:8080/api/users";

class UserService{
    getUsers(){
        return axios.get(TICKET_API_BASE_URL);
    }

    createUser(user){
        return axios.post(TICKET_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(TICKET_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(TICKET_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(TICKET_API_BASE_URL + '/' + userId);
    }
}
export default new UserService()