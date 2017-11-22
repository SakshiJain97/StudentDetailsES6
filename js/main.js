$(document).ready(() => {


$(".add").click(()=>{
let name=$('#name').val();
let rno=$('#rno').val();
let stream=$('#stream').val();
let pyear=$('#year').val();

let markup2=
`<tr>
<td contenteditable='true'>${name}</td>
<td contenteditable='true'>${rno}</td>
<td contenteditable='true'>${pyear}</td>
<td contenteditable='true'>${stream}</td>
<td style='width:25px;'>
<input type="checkbox" margin=20px>
    <button type="button" class="btn btn-default btn-sm del">
      <span class="glyphicon glyphicon-remove"></span>
      </button>
</td>
</tr> `
$("table tbody").append(markup2);
});


$(document.body).on('click', '.del' ,function(){
  $("#a").html("sdsd");
  $(this).closest('tr').remove();
});



});
if (NodeList.prototype[Symbol.iterator] === undefined) {
    NodeList.prototype[Symbol.iterator] = function () {
        let i = 0;
        return {
            next: () => {
                return { done: i >= this.length, value: this.item(i++) };
            }
        }
    };
}

let removeall =() => {
let aObj=document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
let i=aObj.length;
while(i--) {
    if(aObj[i].getElementsByTagName('input')[0].checked) {
        aObj[i].parentNode.removeChild(aObj[i]);
        }
	}
  /*for(var value of aObj){
    if(value.getElementsByTagName('input')[0].checked) {
        value.parentNode.removeChild(aObj[i]);
        }
  }*/

}
