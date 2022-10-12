import { createContext } from "react";

const UserContext = createContext({
    name: ['', () => { }],
    age: [Number, () => { }],
    email: ['', () => { }],
});

export default UserContext;

