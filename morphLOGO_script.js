anime({
        targets: '.logo_svg',
        opacity: 1,
        duration: 300,
        loop: false,
        translateY: 42,
        delay: 450,
        easing: 'easeInOutExpo',
    

});

anime({
        targets: ['.st4'],
        opacity: 1,
        duration: 300,
        loop: true,
        translateY: [0, 1.4,],
        delay: 450,
        easing: 'easeInOutElastic',
    

});

anime({
        targets: ['.st0','.st2'],
        opacity: 1,
        duration: 300,
        loop: true,
        translateY: [0, 0.4,],
        delay: 450,
        easing: 'easeInOutExpo',
    

});

anime({
        targets: ['.st3','.st1'],
        opacity: 1,
        duration: 200,
        loop: true,
        translateY: [0, 0.2,],
        delay: 150,
        easing: 'easeInOutExpo',
    

});


anime({
        targets: ['.head_logo', '.headline_one'],
        opacity: 1,
        duration: 2200,
        loop: false,
        translateY: -10,

});


anime({
        targets: ['.svgDiv'],
        opacity: 1,
        duration: 1800,
        loop: false,
        translateY: [13, 0],
        height: 2.4,
        width: '100%' ,
        backgroundColor: '#000000',
        easing: 'easeInOutQuad',
        borderRadius: ['100%', '0%'],
        delay: 250

});

var bouncingBall = anime({
	targets: '.ball',
	translateY: '50vh',
    translateX: [0, -130],
	duration: 1300,
	loop: true,
	direction: 'alternate',
	easing: 'easeInCubic',
    
    backgroundColor: (el, i, t) => {
    const r = 190 + (i * 12);
    const g = 43 + (i * 12);
    const b = 227;
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;  
    },
        
	scaleX: {
		value: 1.04,
		duration: 150,
		delay: 268,

     rotate: {
    value: '+=2turn', // 0 * 2 = '2turn'
    duration: 1800,
    easing: 'easeInOutSine',
  },
  direction: 'normal',
    delay: 900.02
}
});

var bouncingBall = anime({
	targets: '.b2',
	translateY: '50vh',
    translateX: [533, 534],
	duration: 1800,
	loop: true,
	direction: 'alternate',
	easing: 'easeInCubic',
    
    backgroundColor: (el, i, t) => {
    const r = 0 + (i * 12);
    const g = 153 + (i * 12);
    const b = 255;
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;  
    },
        
	scaleX: {
		value: 1.05,
		duration: 150,
		delay: 268,

     rotate: {
    value: '+=2turn', // 0 * 2 = '2turn'
    duration: 1800,
    easing: 'easeInOutSine',
  },
  direction: 'normal',
    delay: 955.03
}
});

var bouncingBall = anime({
	targets: '.b3',
	translateY: '50vh',
    translateX: [833, 874],
	duration: 1800,
	loop: true,
	direction: 'alternate',
	easing: 'easeInCubic',
    
    backgroundColor: (el, i, t) => {
    const r = 0 + (i * 12);
    const g = 10 + (i * 12);
    const b = 155;
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;  
    },
        
	scaleX: {
		value: 1.05,
		duration: 150,
		delay: 268,

     rotate: {
    value: '+=2turn', // 0 * 2 = '2turn'
    duration: 1800,
    easing: 'easeInOutSine',
  },
  direction: 'normal',
    delay: 655.03
}
});