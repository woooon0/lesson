let tBtn = $('.tab-button');
let tCtn = $('.tab-content');
for(let i=0;i<tBtn.length;i++)
    tBtn.eq(i).on('click', function(){
        tBtn.removeClass('orange')
        tBtn.eq(i).addClass('orange')
        tCtn.removeClass('show')
        tCtn.eq(i).addClass('show')
    })
