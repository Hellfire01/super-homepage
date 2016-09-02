function animate_hand() {
	move('#hand-hand')
	.y(-200)
	.set('opacity', 100)
	.duration(2000)
	.end(function() {
		move('#waves')
		.scale(1.25)
		.set('opacity', 100)
		.duration('0.8s')
		.end(function () {
			move('#waves')
			.scale(1)
			.duration('0.8s')
			.end(function() {
				move('#waves')
				.scale(1.25)
				.duration('0.8s')
				.end(function () {
					move('#waves')
					.set('opacity', 0)
					.scale(1)
					.duration('0.8s')
					.end(function() {
						move('#hand-hand')
						.set('opacity', 0)
						.duration(2000)
						.y(0)
						.end();
					});
				});
			});
		});
	});
	setTimeout('animate_hand()', 2000);
}

function move_money(){
	move('#box-money')
	.x(-100)
	.y(350)
	.duration(4000)
	.end(function(){
	move('#box-money')
	    .x(0)
	    .y(0)
	    .duration(0)
	    .end();
	});
    setTimeout('move_money()', 5000);
}

function move_drink(){
	move('#box-drink')
	.x(100)
	.y(350)
	.duration(3500)
	.end(function(){
	move('#box-drink')
	    .x(0)
	    .y(0)
	    .duration(0)
	    .end();
	});
    setTimeout('move_drink()', 4000);
}

function move_pie() {
	move('#box-pie')
	.x(-100)
	.y(350)
	.duration(3500)
	.end(function(){
	move('#box-pie')
	    .x(0)
	    .y(0)
	    .duration(0)
	    .end();
	});
    setTimeout('move_pie()', 4500);
}

function move_calendar() {
	move('#box-calendar')
	.x(-100)
	.y(350)
	.duration(3500)
	.end(function(){
	move('#box-calendar')
	    .x(0)
	    .y(0)
	    .duration(0)
	    .end();
	});
    setTimeout('move_calendar()', 5500);
}

function move_windows() {
	move('#box-windows')
	.x(100)
	.y(350)
	.duration(3500)
	.end(function(){
	move('#box-windows')
	    .x(0)
	    .y(0)
	    .duration(0)
	    .end();
	});
    setTimeout('move_windows()', 6000);
}

function move_chart() {
	move('#box-chart')
	.x(100)
	.y(350)
	.duration(3500)
	.end(function(){
	move('#box-chart')
	    .x(0)
	    .y(0)
	    .duration(0)
	    .end();
	});
    setTimeout('move_chart()', 4800);
}

function move_playstore() {
	move('#box-playstore')
	.x(-100)
	.y(350)
	.duration(3500)
	.end(function(){
	move('#box-playstore')
	    .x(0)
	    .y(0)
	    .duration(0)
	    .end();
	});
    setTimeout('move_playstore()', 6200);
}

function move_world() {
	move('#box-world')
	.x(-100)
	.y(350)
	.duration(3500)
	.end(function(){
	move('#box-world')
	    .x(0)
	    .y(0)
	    .duration(0)
	    .end();
	});
    setTimeout('move_world()', 6700);
}

function move_wow() {
	move('#box-wow')
	.x(50)
	.y(350)
	.duration(3500)
	.end(function(){
	move('#box-wow')
	    .x(0)
	    .y(0)
	    .duration(0)
	    .end();
	});
    setTimeout('move_wow()', 7200);
}
