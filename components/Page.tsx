import { PageProps} from "$fresh/server.ts"
import { User } from "../routes/users.tsx"


const Viewer = (props : PageProps)=>{
    return(
        <>
        <div class="general">
        <table class="tablita">
            <thead>
            <tr class="fila">
                <th class="item">Nombre</th>
                <th class="item">Email</th>
            </tr>
            </thead>
        <tbody>
        {props && 
            props.data.map((e:User)=>(
            <tr class="fila">
                <th class="item">{e.name}</th>
                <th class="item">{e.email}</th>
            </tr>
            ))  
        }
        </tbody>
        </table>
        </div>
        </>
    )
}

export default Viewer;