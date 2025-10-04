export default function Body(props: {name:string, age:number}) {
    return(
        <>
            <p>You are {props.name} and {props.age} years old.</p>
        </>
    )
}