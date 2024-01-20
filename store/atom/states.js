import {atom, selector} from "recoil"
// import {selector} from "recoil"
export const Title1=atom({
    key:"Title",
    default:""
})
export const Description1=atom({
    key:"Desc",
    default:""
})
export const Filter1=atom({
    key:"Filter",
    default:""
})
export const CreateTodos = atom({
    key:"CreateTodos",
    default: [{
        title: "khana",
        description: "subha khana khane ka re"
    },
    {
        title: "nahana",
        description: "2 din me ek baar to nahana"
    }]
    
})
export const GetTodos=selector({
    key:"GetTodos",
    get: (props)=>{
        const todos=props.get(CreateTodos);
        const filters=props.get(Filter1);
        return todos.filter(x=> x.title.includes(filters) || x.description.includes(filters)
         )
    }
})