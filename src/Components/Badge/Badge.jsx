
function Badge (array) {
  var index = 0;
  return (
    array.array.map( badge => {
        index++;
        return(
            <h4 key={index} className="badge badge-card">{badge}</h4>
        )
    })
  )
}

export default Badge