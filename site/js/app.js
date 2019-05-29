/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

// particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
//   console.log('particles.js loaded - callback');
// });


/* Otherwise just put the config content (json):*/

// particlesJS('particles-js', {
  // "particles": { /* настройка частиц */
//     "number": {
//       "value": 80, { /* количество частиц */
//       "density": { /* плотность частиц */
//         "enable": true, /* включено/выключено */
//         "value_area": 800 /* площадь, по которой частицы рассеяны, чем больше число, тем меньше плотность */
//       }
//     },
//     "color": { /* цвет */
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "circle", /* форма: "circle", "edge", "triangle", "polygon", "star", "image" */
//       "stroke": { /* обводка частиц */
//         "width": 0, /* ширина обводки */
//         "color": "#000000" /* цвет обводки */
//       },
//       "polygon": {
//         "nb_sides": 5 /* количество сторон полигона (type: polygon), от 3 до 12 */
//       },
//       "image": { /* картинка, которая будет отображаться при выборе параметра формы type: image */
//         "src": "img/github.svg",
//         "width": 100, /* ширина картинки */
//         "height": 100 /* высота картинки */
//       }
//     },
//     "opacity": { /* прозрачность */
//       "value": 0.5, /* значение прозрачности от 0.0 до 1.0 */
//       "random": false, /* случайное значение для каждой частцы, но максимальным будет значение value */
//       "anim": { /* анимация прозрачности */
//         "enable": false, /* включено/выключено */
//         "speed": 1, /* скорость анимации */
//         "opacity_min": 0.1, /* минимальная прозрачность анимации */
//         "sync": false /* анимация для всех частиц происходит синхронно или нет */
//       }
//     },
//     "size": { /* размер */
//       "value": 10, /* значение размера */
//       "random": true, /* случайный размер */
//       "anim": { /* анимация изменения размера частиц */
//         "enable": false, /* включено/выключено */
//         "speed": 80, /* скорость анимации */
//         "size_min": 0.1, /* минимальный размер частицы */
//         "sync": false /* анимация для всех частиц происходит синхронно или нет */
//       }
//     },
//     "line_linked": { /* связующие линии */
//       "enable": true, /* включено/выключено */
//       "distance": 300, /* расстояние между частицами, при котором проявляется линия */
//       "color": "#ffffff", /* цвет */
//       "opacity": 0.4, /* прозрачность */
//       "width": 2 /* ширина */
//     },
//     "move": { /* движение */
//       "enable": true, /* включено/выключено */
//       "speed": 12, /* скорость движения */
//       "direction": "none", /* направление: none (хаотично), top, top-right, right, bottom-right, bottom, bottom-left, left, top-left */
//       "random": false, /* скорость движения для каждой частицы случайна */
//       "straight": false,  движение строго в указанном направлении 
//       "out_mode": "out", /* out (частицы выходят за пределы экрана) или bounce (не выходят за пределы) */
//       "bounce": false, /* частицы отталкиваются друг от друга или нет */
//       "attract": { /* притяжение частиц друг к другу */
//         "enable": false, /* включено/выключено */
//         "rotateX": 600, /* притяжение по горизонтали */
//         "rotateY": 1200 /* притяжение по вертикали */
//       }
//     }
//   },
//   "interactivity": { /* интерактивность */
//     "detect_on": "canvas", /* реакция на событие мыши в окне (window) или в объекте (canvas) */
//     "events": { /* события */
//       "onhover": { /* по наведению */
//         "enable": false, /* включено/выключено */
//         "mode": "repulse" /* repulse (отталкивание частиц), grab (соединение связующих линий), bubble ('пузырение' частиц) */
//       },
//       "onclick": { /* по клику */
//         "enable": true, /* включено/выключено */
//         "mode": "push" /* push (добавление новых частиц), remove (удаление частиц), bubble (временное изменение прозрачности частиц на непрозрачное и увеличение их в размере), repulse (отталкивание частиц) */
//       },
//       "resize": true /* я не понял на что влияет этот параметр, экспериментируйте =) */
//     },
//     "modes": { /* параметры видов событий */
//       "grab": { /* при onhover: mode: grab */
//         "distance": 800, /* расстояние от мышки до частиц, при котором проявляются линии */
//         "line_linked": {
//           "opacity": 1 /* прозрачность линий */
//         }
//       },
//       "bubble": { /* при onhover или onclick: mode: bubble */
//         "distance": 800, /* расстояние от мышки до частиц, при котором происходит эффект */
//         "size": 80, /* размер увеличения частиц */
//         "duration": 2, /* продолжительность эффекта в секундах при клике */
//         "opacity": 0.8, /* максимальная прозрачность */
//         "speed": 3 /* скорость эффекта */
//       },
//       "repulse": { /* при onhover или onclick: mode: repulse */
//         "distance": 400, /* расстояние отталкивания */
//         "duration": 0.4 /* продолжительность отталкивания */
//       },
//       "push": { /* при onclick: mode: push */
//         "particles_nb": 4 /* количество добавляемых частиц */
//       },
//       "remove": { /* при onclick: mode: remove */
//         "particles_nb": 2 /* количество убираемых частиц */
//       }
//     }
//   },
//   "retina_detect": true /* поддержка ретина-дисплеев */
// }, function(){ /* Вызываем callback-функцию */
//   console.log('callback - particles.js загружен!');
// });

 

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);