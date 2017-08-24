/**
 * Created by Administrator on 2017/8/22.
 */
var title = ['ID', '姓名', '性别', '年龄', '成绩', '手机号'];
var data = [
    {
        'Id': 1,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 2,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 3,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 4,
        'Name': 'test3',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },	{
        'Id': 5,
        'Name': 'test2',
        'Gender': 'men',
        'Age': '15',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 6,
        'Name': 'test1',
        'Gender': 'men',
        'Age': '14',
        'Grade': '1100',		'Tel': '18652000000'
    },    {
        'Id': 7,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 8,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 9,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 10,
        'Name': 'test3',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },	{
        'Id':11,
        'Name': 'test2',
        'Gender': 'men',
        'Age': '15',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 12,
        'Name': 'test1',
        'Gender': 'men',
        'Age': '14',
        'Grade': '1100',		'Tel': '18652000000'
    },
]
$(function(){
    var tr;
    for(var i=0;i<data.length;i++){
        tr ="<tr><td>"+data[i].Id+"</td><td>"
            +data[i].Name+"</td><td>"
            +data[i].Gender+"</td><td>"
            +data[i].Age+"</td><td>"
            +data[i].Grade+"</td><td>"
            +data[i].Tel+"</td></tr>"
        $(".table-body-body table tbody").append(tr);
    }

    for(var i=0;i<data.length;i++){//插入给隐藏表格的
        tr ="<tr><td>"+"*"+"</td><td>"
            +"*"+"</td><td>"
            +"*"+"</td><td>"
            +"*"+"</td><td>"
            +"*"+"</td><td>"
            +"*"+"</td></tr>"
        $(".table-body-body-hidden table tbody").append(tr);
    }

    for(var i= 0;i<title.length;i++){
        tr ="<th>"+title[i]+"</th>"
        $("table thead").append(tr);
    }
})
