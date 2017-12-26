/**
 * bootstrip移动端+pc轮播自适应
 * Created by yinming on 2016/8/31.
 */
$(function(){
    banner();
});

/*动态轮播图*/
function banner(){
    /*
    * 1.获取数据       ajax
    * 2.判断当前是什么设备  768px以下都是  移动设备
    * 3根据设备来解析数据  （json转化HTML   字符串拼接  模版引擎  artTemplate native-template "underscorejs template"）
    * 4.渲染在html页面当中  html(解析的字符串);
    * 5.当页面尺寸改变的时候重新渲染   监听页面尺寸的改变  resize
    * */

	var myData;
    /*1获取数据*/
    var getData = function(callback){
        if(myData){
            callback && callback(myData);
            return false;
        }
    // 获取数据
    $.ajax({
    	url:'js/index.json',
    	type:'get',
    	date:{},
    	dateType:'json',
    	success:function(){
    		/*当我们做一次请求的时候需要记录*/
                myData = data;
                callback && callback(myData);
    	}
    });
	}


    // 渲染 render是一个jq渲染器
    var render = function (){
    	var width = $(window).width();
    // 2.判断是否移动端
    	var ismobile = false;
    	if (width<768){
    		ismobile = true;
    	}

    // 获取数据
    getData(function(date){

    });
    };




}