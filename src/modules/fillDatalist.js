import ajaxService from "./ajaxService";
import searchArray from "./searchArray";
function fillDataList(){
    let dataLi = document.querySelector('#selectInput');
    //ajaxService().then((json) => {
        //for(item of searchArray(json,document.querySelector('input').value)){
           // let option = document.createElement('option');
            //console.log(item);
            //console.log(dataLi);
            //option = item.name;
            //dataLi.appendChild(option);
        //}
//})
    console.log(document.querySelector('input').value);
    ajaxService().then((x)=>{
        searchArray(x,document.querySelector('input')).forEach(element => {
            
            let option = document.createElement('option');
            console.log(element);
            console.log(dataLi);
            option = element.name;
            
        });
    })
  }

export default fillDataList;