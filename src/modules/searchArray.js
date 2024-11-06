function searchArray(arrays, searchCrit){
    let search = searchCrit.trim();
    let result = arrays.filter(element => element.name.toLowerCase().startsWith(search.toLowerCase()))
    return result
}
export default searchArray;