function List() {
    const fruits = [
        { 
            name: 'apple', 
            calories: 121,
            id: 1
        },
        {
            name: 'banana', 
            calories: 104,
            id: 2,
        },
        {
            name: 'cherries', 
            calories: 59,
            id: 3,
        },
        {
            name: 'mango',
            calories: 124,
            id: 4
        }
    ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); 
    fruits.sort((a, b) => a.calories - b.calories); 

    const lowCalFruits = fruits.filter(fruit => fruit.calories > 100)

    const listItems = lowCalFruits.map(lowCalFruit => (
        <li key={lowCalFruit.id}> {lowCalFruit.name}: {lowCalFruit.calories} </li>
    ));
    
    return (
        <>
            <ol>
                {listItems}
            </ol> 
        </>
    );
}

export default List;
