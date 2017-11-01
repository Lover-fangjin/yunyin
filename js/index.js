
new IScroll('#home');
new IScroll('#list');
new IScroll('#items');
$('.container').on('click','a',function(e){
    // alert(1)
    e.preventDefault()

    var that=$(this).attr('href')

    $(that).css({
        transition:'all .5s',
        transform:'scale(1) translateX(0)'

    }).siblings().css({
        transition:'all .5s',
        transform:'scale(0) translateX(100%)'
    })


    var inde=$(this).index()
    // alert(inde) 

    if(this.parentNode.nodeName=='NAV'){
        $('#mask').css({
            transition:'all 0.35s',
            left:inde*25+'%'
        })

    }
    setHeader($(this));

})

function setHeader(a){
    var href=a.attr('href');
        return1 = $("#return1"),
        fav = $("#fav"),
        search = $("#search"),
        config =$('#config'),
        id=a.attr("id");
        

    if(href=='#home'){
        $('header').find('h2').text('孕育宝典');
        fav.hide();
        return1.hide();
        search.show();
    }
    else if(href=='#favorite'){
        $('header').find('h2').text('收藏');
        fav.hide();
        search.show();
        return1.show();
    }
    else if(href=='#history'){
        $('header').find('h2').text('历史记录');
        return1.show();

    }
    else if(href=='#config'){
        return1.show()
        $('header').find('h2').text('设置');
    }

    else if(href=='#list'){
        return1.show();
        search.hide();
        $('header').find("h2").text(a.attr("title"));
        
        var str = '';
            
        $.each(Dates[id].fenlei,function(idx,val){

            console.log(idx);

            str+=`
                <div class='list-text'>
                    <a href='#item' id='${id}_${idx}'>
                    <img src="img/tu/${val.img}" alt="" />
                    <h2>${val.title}</h2>
                    </a>
                </div>
            `
            })


        $("#list_iscroll").append(str);

        }else if(href=='#item'){

            var str =  a.attr("id");

            var arr = str.split("_");

            var str1='';

            str1+=Dates[arr[0]].fenlei[arr[1]].content


            $('#items').text(str1);

        }

}


var Dates = null;
$.ajax({
    url:'data/data.json',
    dataType:"json",
    success:function(data){

        Dates=data;

        console.log(Dates)
    }
})


