interface Props{
    path:string;
}

function Icon(props:Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="fill-orange">
            <path d={props.path}/>
        </svg>
    );
}
  
export default Icon;