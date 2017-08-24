/**
 * Created by Administrator on 2017/8/22.
 */
$(function(){
//选中
    $("tbody tr").live("click",function(){//live这个方法是为了能够对新增的页面进行操作，用法看右边就明白了
            var status=0;
            if($(this).hasClass("h")){
                $(this).removeClass("h");
            }else{
                $(this).addClass("h");
            }
        });

//删除
    $(".delete").click(function(){
        if($("tbody tr").hasClass("h")){
            $("tbody tr.h").remove();
        }
    })

//增加
$(".add").click(function(){
    $(".table-body-body table tbody tr:last-child").after($(".table-body-body-hidden table tbody tr:first-child").clone());
})



//修改功能
    $("tbody tr td").live("dblclick",function(){
        ShowElement(this);
    })
    function ShowElement(element) {
        var oldhtml = element.innerHTML;
        //创建新的input元素
        var newobj = document.createElement('input');
        //为新增元素添加类型
        newobj.type = 'text';
        //为新增元素添加value值
        newobj.value = oldhtml;
        //为新增元素添加光标离开事件
        newobj.onblur = function() {
            //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值
            element.innerHTML = this.value == oldhtml ? oldhtml : this.value;
            //当触发时设置父节点的双击事件为ShowElement
            element.setAttribute("ondblclick", "ShowElement(this);");
        }
        //设置该标签的子节点为空
        element.innerHTML = '';
        //添加该标签的子节点，input对象
        element.appendChild(newobj);
        //设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
        newobj.setSelectionRange(0, oldhtml.length);
        //设置获得光标
        newobj.focus();

        //设置父节点的双击事件为空
        newobj.parentNode.setAttribute("ondblclick", "");
    }



    //查找功能
    $(".search-btn").click(highlight);//点击search时，执行highlight函数；

    function highlight(){
        clearSelection();//先清空一下上次高亮显示的内容；
        var searchText = $(".search input").val();//获取你输入的关键字；
        console.log(searchText);
        var regExp = new RegExp(searchText, 'g');//创建正则表达式，g表示全局的，如果不用g，则查找到第一个就不会继续向下查找了；
        $("tr td").each(function(){//遍历文章；
            var html = $(this).html();
            var newHtml = html.replace(regExp, '<span class="highlight">'+searchText+'</span>');//将找到的关键字替换，加上highlight属性；

            $(this).html(newHtml);//更新文章；
        });
    }

    function clearSelection(){
        $('tr td').each(function(){//遍历
            $(this).find('.highlight').each(function()//找到所有highlight属性的元素；
            {
                $(this).replaceWith($(this).html());//将他们的属性去掉；
            });
        });
    }
})




