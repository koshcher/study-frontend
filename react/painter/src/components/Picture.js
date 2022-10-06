const Picture = ({ pic }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>{pic.name}</h1>
      <img src={pic.src} style={{ width: '500px' }} />
    </div>
  )
}

export default Picture