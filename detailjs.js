let tBtn = $('.tab-button');
let tCtn = $('.tab-content');
$('.tab-button').click(function(e){
    openTab(Number(e.target.dataset.id))
})
function openTab(x){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(x).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(x).addClass('show');
}
var names = ['흥민', '영희', '철수', '재석'];
function findName(kname){
    for(var i=0;i<names.length;i++){
        if(names[i] == kname){
            console.log('있어요')
        }
    }

}
findName('장원')