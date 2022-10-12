// import axios from 'axios';
// import useApp from '../hooks/useApp';

// export const useHelper = () => {
//     const { token } = useApp();

//     const api = axios.create({
//         baseURL: process.env.REACT_APP_API_URL,
//         headers: {
//             'Content-Type': 'application/json',
//             'x-auth-token': token,
//         },
//     });

//     return { api };
// };

import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export default api;