import ajaxService from "./ajaxService";
import searchArray from "./searchArray";
function fillDataList(){
    let dataLi = document.querySelector('#selectInput'); 
    let searchInput = document.querySelector('input').value; 
    ajaxService().then((json) => {
        dataLi.innerHTML = ''; 
        searchArray(json, searchInput).forEach(element => {
            let option = document.createElement('option');
            option.value = element.name; 
            dataLi.appendChild(option); 
        });
    });
  }
export default fillDataList;