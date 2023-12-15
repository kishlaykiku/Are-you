let count = 0;

$('#buttonNo').hover(function (e) {
    let width = window.innerWidth - 100;
    let height = window.innerHeight - 50;

    let x_cord = Math.random() * width;
    let y_cord = Math.random() * height;

    // let cur_x = e.clientX;
    // let cur_y = e.clientY;

    // console.log(cur_x);
    // console.log(cur_y);

    $(this).css({
        'position': 'absolute',
        'left': x_cord + 'px',
        'top': y_cord + 'px'
    });

    if(count != 1){
        let decoy_div = '<div class="decoy"></div>';
        $('.choice').append(decoy_div);
        count = 1;
    }
}
);