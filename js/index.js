(function() {

  
  
  var eightTeams = {
    teams : [
      ["Team 1",  "Team 2" ],
      ["Team 3",  "Team 4" ],
      ["Team 5",  "Team 6" ],
      ["Team 7",  "Team 8" ]
    ],
    results : [[ /* WINNER BRACKET */
      [[1,2], [3,4], [5,6], [7,8]],
      [[9,1], [8,2]],
      [[1,3]]
    ], [         /* LOSER BRACKET */
      [[5,1], [1,2], [3,2], [6,9]],
      [[1,2], [3,1]],
      [[4,2]]
    ]]
  }
   

  $('div#bracket').bracket({
    skipGrandFinalComeback: true,
    init: eightTeams})

  initScoutingReport();

}());

function initScoutingReport() {
	var description = document.getElementById('scouting-description');
	var sidebar = document.getElementById('scouting-sidebar');
	var container = document.getElementById('scouting');

	var active = document.querySelector('#scouting-sidebar > li.school-wrapper > .school.active');

	Array.prototype.slice.apply(active.parentNode.children).map(function(n) {
		if (n.classList.contains('info')) {
			description.innerHTML = n.innerHTML;
			return; 
		}
	});

	var tick = document.createElement('div');
	tick.className = 'tick';
	active.parentNode.appendChild(tick);

	sidebar.addEventListener('click', function(e) {
		var t = e.target;
		while(t !== sidebar) {
			if (t.classList.contains('active')) { break; }
			if (t.parentNode.tagName === 'LI') {
				active.classList.remove('active');
				active = t;
				t.classList.add('active');
				t.parentNode.appendChild(tick);
				Array.prototype.slice.apply(t.parentNode.children).map(function(n) {
					if (n.classList.contains('info')) {
						description.innerHTML = n.innerHTML;
						return; 
					}
				});
				return;
			}

			t = t.parentNode; 
		}
	});

}