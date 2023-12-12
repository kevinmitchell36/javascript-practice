const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers']
}

for (const team of app.teams) {
  console.log(team);
}


// or

const app2 = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length 
        ? {value: this.teams[nextIndex++], done: false}
        : {done: true}
      }
    }
  }
}

const iterator = app[Symbol.iterator]();
console.log(iterator.next().value);