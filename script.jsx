
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

function Header({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes,setLike] = React.useState(0);

    function handleClick(){
        setLike(likes + 1);
    }

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like {likes}</button>
        </div>
    );
}
root.render(<HomePage />);