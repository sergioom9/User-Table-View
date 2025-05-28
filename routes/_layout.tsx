import { PageProps } from "$fresh/server.ts";

const Layout = (props:PageProps) => {
    const Component = props.Component;
    return (
        <>
        <div class="header">Project created by Sergio Martin </div>
        <Component />
        </>
    )
}

export default Layout;