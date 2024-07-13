const ProdColors = ({colors, className}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {colors.map(color => (
        <div style={{backgroundColor: `${color}`}} key={color} className='p-2.5 shadow rounded-full'></div>))}
    </div>
  )
}

export default ProdColors