/**
 *
 * @param {number} force1
 * @param {number} force2
 * @param {number} theta
 */
function solution(force1, force2, theta) {
  theta = (theta * Math.PI) / 180;
  const resultantForce = Math.sqrt(
    force1 ** 2 + force2 ** 2 + 2 * force1 * force2 * Math.cos(theta)
  );

  // alpha is the angle between the resultantForce and force1
  let alpha = Math.atan(
    (force2 * Math.sin(theta)) / (force1 + force2 * Math.cos(theta))
  );
  alpha = (alpha * 180) / Math.PI;
  return [resultantForce, alpha];
}

// On codewars
// function solution(f1, f2, theta) {
//     theta  = theta * Math.PI / 180
//     return [Math.sqrt( f1 ** 2 + f2 ** 2 + 2 * f1 * f2 * Math.cos(theta)),
//             Math.atan((f2 * Math.sin(theta)) / (f1 + f2 * Math.cos(theta))) * 180 / Math.PI];
//   }

console.log(solution(20, 86, 161));
