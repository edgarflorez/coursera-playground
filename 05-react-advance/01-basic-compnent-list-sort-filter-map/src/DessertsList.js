function DessertsList(props) {
  // Implement the component here.
  const list = props.data
    .sort((a, b) => a.calories - b.calories)
    .filter(dessert => dessert.calories < 500)
    .map(dessert => {
    const itemText = `${dessert.name} - ${dessert.calories} cal`;
    return <li>{itemText}</li>
  });

  return (
    <ul>
      {list}
    </ul> 
  )
}

export default DessertsList;
