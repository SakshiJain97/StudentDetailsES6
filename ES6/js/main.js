'use strict';

$(document).ready(function () {

    $(".add").click(function () {
        var name = $('#name').val();
        var rno = $('#rno').val();
        var stream = $('#stream').val();
        var pyear = $('#year').val();

        var markup2 = '<tr>\n<td contenteditable=\'true\'>' + name + '</td>\n<td contenteditable=\'true\'>' + rno + '</td>\n<td contenteditable=\'true\'>' + pyear + '</td>\n<td contenteditable=\'true\'>' + stream + '</td>\n<td style=\'width:25px;\'>\n<input type="checkbox" margin=20px>\n    <button type="button" class="btn btn-default btn-sm del">\n      <span class="glyphicon glyphicon-remove"></span>\n      </button>\n</td>\n</tr> ';
        $("table tbody").append(markup2);
    });

    $(document.body).on('click', '.del', function () {
        $("#a").html("sdsd");
        $(this).closest('tr').remove();
    });
});
if (NodeList.prototype[Symbol.iterator] === undefined) {
    NodeList.prototype[Symbol.iterator] = function () {
        var _this = this;

        var i = 0;
        return {
            next: function next() {
                return { done: i >= _this.length, value: _this.item(i++) };
            }
        };
    };
}

var removeall = function removeall() {
    var aObj = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    var i = aObj.length;
    while (i--) {
        if (aObj[i].getElementsByTagName('input')[0].checked) {
            aObj[i].parentNode.removeChild(aObj[i]);
        }
    }
    /*for(var value of aObj){
      if(value.getElementsByTagName('input')[0].checked) {
          value.parentNode.removeChild(aObj[i]);
          }
    }*/
};