function computerPlay() {
    const tools = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random()*3);
    return tools[choice];
}
