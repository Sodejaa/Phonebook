const Filter = (props) =>{
    return(
        <form>
        <div>
        filter shown with:
        <input
        type="Search"
        value={props.newFilter}
        onChange={props.handleFilterChange}/>
        </div>
      </form>
    )
}

export default Filter