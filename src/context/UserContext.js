import { createContext } from "react";

const UserContext = createContext({
    name: ['', () => { }],
    age : [Number, () => { }],
    image: [File, () => { }]
});

export default UserContext;
