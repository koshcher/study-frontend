const writers = [
  { name: 'Lesia', surname: 'Ukrainka' },
  { name: 'Ivan', surname: 'Franko' },
  { name: 'Taras', surname: 'Shevchenko' },
]

const Writer = ({ name, surname }) => {
  return (
    <div style={{ fontSize: '50px', margin: '5px' }}>{name} {surname}</div>
  )
}

const Writers = () => {
  return (
    <>
      {writers.map((writer, i) =>
        // <Writer name={writer.name} surname={writer.surname} />
        <Writer key={i} {...writer} /> // destruct right there
      )}
    </>
  )
}

export default Writers