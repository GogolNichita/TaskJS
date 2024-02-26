let points = [
    {x: 1, y: 2},
    {x: 3, y: 4},
    {x: null, y: 4},
    {x: 3, y: undefined}
];
function correctPoints(points){
    return points.filter(point => typeof point.x === 'number' && typeof point.y === 'number');
}
console.log(correctPoints(points));