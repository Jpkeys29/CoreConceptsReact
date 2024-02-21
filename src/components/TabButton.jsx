export default function TabButton({children}){
    function handleClick(){
        console.log('Hola');
    }
    return (
    <li>
        <button onClick={handleClick}>{children}</button>
    </li>
    );
}