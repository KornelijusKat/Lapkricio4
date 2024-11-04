function searchArray(arrays, searchCrit){
    let result = arrays.filter(element => element.name.includes(searchCrit))
    console.log(result);
    return result
}
export default searchArray;