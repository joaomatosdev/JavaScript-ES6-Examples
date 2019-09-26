import axios from 'axios';

class Api{
    static async  getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
            console.log(response.data.public_repos)
        }catch{
            console.warn('Erro na API');
        }

    }
}
Api.getUserInfo('joaomatos28');
