(function() {
  var finalFour = {
    teams : [
      ["USC", "Harvard"],
      ["UCLA", "Cal"]
    ],
    results : [
      [[19,4], [8,9]]
    ]
  }

  $('div#bracket').bracket({
    skipConsolationRound: true,
    init: finalFour /* data to initialize the bracket with */ })

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
