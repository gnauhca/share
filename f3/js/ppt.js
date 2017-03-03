var classes = Array(14).fill(1).map((i, index)=>{return 'bg' + index});

console.log(classes);
document.body.classList.add(classes[0]);
Slide.on('update', function(i, itemIndex, cls) {
//接受三个参数：
//* 当前slide的index
//* itemIndex当前slide进入的第几个build动画，从1开始
//* 方向pageup/pagedown
    // classes.forEach((c)=>{
    //     document.body.classList.remove(c);
    // });
    // document.body.classList.add(classes[i]);
});