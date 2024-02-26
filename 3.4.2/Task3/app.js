const styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock and Roll');
console.log(styles);

const middleIndex = Math.floor(styles.length / 2);
styles.splice(middleIndex, 1, 'Classic');
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Rap', 'Reggae');
console.log(styles);