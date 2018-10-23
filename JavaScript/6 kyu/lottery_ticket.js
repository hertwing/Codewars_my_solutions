function bingo(ticket, win) {
	let wins = 0;
	ticket.map(mini => {
		mini[0].split("").map(value => {
			if (value.charCodeAt(0) === mini[1]) wins++;
		});
	});
	if (wins >= win) return "Winner!";
	else return "Loser!";
}
