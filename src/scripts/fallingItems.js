import cards from './images/cards.svg';

export default {
  init: () => cards
}

// var canvas, ctx, height, width, flakes, flake_count, flake_size;

// const items = [

// ];

const draw_frame = () => {
  // for (var i = 0; i < flakes.length; i++) {
  //   var flake = flakes[i];
  //   flake.y += flake.speed;
  //   if (flake.y > height) {
  //     flake.y = -flake_size
  //   }
  //   flake.style.top = flake.y.toString() + 'px'
  // }
}

// var width, height, types, body, flakes;




const init = () => {
  const height = $(document).height();
  const width = $(document).width();
  const maxVisible = 5; // TODO: based on viewport width

  const items = [cards];

  const drawFrame = () => {}

  const animate = () => {
    window.requestAnimationFrame(animate);
    drawFrame();
  }


  // for (var i = 0; i < flake_count; i++) {
  //   var x = width * Math.random();
  //   var y = height * Math.random();
  //   var type = Math.floor(Math.random() * types.length);
  //   var flake = document.createElement('span');
  //   flake.className = 'snow ' + types[type];
  //   flake.style.left = x.toString() + 'px';
  //   flake.style.top = y.toString() + 'px';
  //   flake.style['-webkit-animation-duration'] = ((Math.random() * 15) + 5).toString() + 's';
  //   flake.x = x;
  //   flake.y = y;
  //   flake.speed = (Math.random() + 0.15);
  //   body.appendChild(flake);
  //   flakes.push(flake);
  // }

  animate();
}

// window.onload = function() {
//   init();
// };
