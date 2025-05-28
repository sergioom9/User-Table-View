import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Viewer from "../components/Page.tsx";

export type User = {
    name:string,
    email:string
}

export const handler : Handlers = {
    GET: async (req:Request,ctx:FreshContext) => {
        const url = "https://jsonplaceholder.typicode.com/users"
        try{
            const respn = await fetch(url)
        const jsonbody = await respn.json()
        const users = jsonbody.map((e: User)=>(
                {
                name:e.name,
                email:e.email
                }
            
        ))
        return ctx.render(users)
        }catch(e){
        return ctx.render([])
        }
    }
}

const Page = (props:PageProps) => {
    return(
        <>
            <Viewer data={props.data} />
        </>
    )
    
}

export default Page;