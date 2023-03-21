// the ? means that is optional
// It doesn't make sense to do this in a real life project,
// Only to do if you want a button that makes special things

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function Button ( props: ButtonProps ) {
    return (
        <button onClick = { props.onClick } className= { props.className }>
            { props.children }
        </button>
    )
}