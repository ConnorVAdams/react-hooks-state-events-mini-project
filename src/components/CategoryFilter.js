import Button from "./Button"

function CategoryFilter({ onButtonClick, currentFilter, categories }) {

  const catButtons = categories.map(cat => {
    return <Button key={cat} cat={cat} currentFilter={currentFilter} />
  })
  
  return (
    <div onClick={onButtonClick} className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
