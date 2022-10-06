const Rand = ({ max, min }) => <h1>{Math.floor(Math.random() * (max - min + 1) + min)}</h1>

export default Rand