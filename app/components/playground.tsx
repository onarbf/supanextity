export default function Playground(){
    const randomNumber = Math.random()*10
    return (
        <div>Random number: {randomNumber.toFixed(2)}</div>
    )
}