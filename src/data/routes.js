import Hello from "../components/Hello";
import Test from "../components/Test";
const routes=[
    {
        path:"/",
        element:<Test/>
    },
    {
        path:"/hello",
        element:<Hello nom="Faneva"/>
    }
];

export default routes;