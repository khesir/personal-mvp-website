import { P5CanvasInstance } from "react-p5-wrapper";


// export default function sketch(p: P5CanvasInstance) {
//   let angle = 0;
//   let offset = 100;
//   let scalar = 40;
//   let w: number;
//   let h: number;
//   p.setup = () => {
//     const parent = document.getElementById('p-container');
//       if (!parent) {
//         throw new Error("Parent container not found");
//       }
//       w = parent.offsetWidth;
//       h = parent.offsetHeight;

//     p.background(255);
//     p.stroke(0);
//     p.noFill();
//   };

//   p.draw = function() {
//     p.background(255);
//     let x = p.width / 2 + p.cos(angle) * offset;
//     let y = p.height / 2 + p.sin(angle) * offset;
//     p.beginShape();
//     for (let a = 0; a < p.TWO_PI; a += 0.1) {
//       let offset = p.map(p.sin(a * 5 + angle), -1, 1, -25, 25);
//       let r = scalar + offset;
//       let sx = x + r * p.cos(a);
//       let sy = y + r * p.sin(a);
//       p.vertex(sx, sy);
//     }
//     p.endShape(p.CLOSE);
//     angle += 0.05;
//     scalar += 0.5;
//   };
// };
// export default function sketch (p: P5CanvasInstance) {
//   let cols: number;
//   let rows: number;
//   let scl: number = 20;
//   let w: number;
//   let h: number;
//   let terrain: number[][] = [];

//   p.setup = () => {
//     const parent = document.getElementById('p-container');
//     if (!parent) {
//       throw new Error("Parent container not found");
//     }
//     w = parent.offsetWidth;
//     h = parent.offsetHeight;

//     p.createCanvas(w, h, p.WEBGL);
//     cols = w / scl;
//     rows = h / scl;

//     for (let x = 0; x < cols; x++) {
//       terrain[x] = [];
//       for (let y = 0; y < rows; y++) {
//         terrain[x][y] = p.random(0, 100);
//       }
//     }
//   };

//   p.draw = () => {
//     p.background(0);
//     p.translate(-w / 2, -h / 2);
//     p.rotateX(p.PI / 3);

//     for (let y = 0; y < rows - 1; y++) {
//       p.beginShape(p.TRIANGLE_STRIP);
//       for (let x = 0; x < cols; x++) {
//         p.fill(255);
//         p.vertex(x * scl, y * scl, terrain[x][y]);
//         p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
//       }
//       p.endShape();
//     }
//   };
// };

let values: number[] = [];
let i: number = 0;
let j: number = 0;

export default function sketch(p: P5CanvasInstance){
  p.setup = () => {
    const canvasParent = document.getElementById('p-container');
    const canvasWidth = canvasParent?.clientWidth;
    const canvasHeight = canvasParent?.clientHeight;
    
    p.createCanvas(canvasWidth, canvasHeight).parent('p-container')
    values = new Array(p.width);
    for (let i = 0; i < values.length; i++) {
      values[i] = p.random(p.height);
    }
  };

  p.draw = () => {
    p.background(0);
    if (i < values.length) {
      for (let k = 0; k < 10; k++) {
        if (j < values.length - i - 1) {
          let a = values[j];
          let b = values[j + 1];
          if (a > b) {
            swap(values, j, j + 1);
          }
          j++;
        } else {
          j = 0;
          i++;
        }
      }
    } else {
      p.noLoop();
    }

    for (let i = 0; i < values.length; i++) {
      p.stroke(255);
      p.line(i, p.height, i, p.height - values[i]);
    }
  };
};

function swap(arr: number[], a: number, b: number) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
