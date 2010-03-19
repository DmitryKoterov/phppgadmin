$(document).ready(function() {
	$('.ajax_referrers').click(function() {
		if (this.popup) {
			$(this.popup).remove();
			delete this.popup;
			return;
		}
		var div = document.createElement('DIV');
		var hiddens = $('input', this);
		var lines = [];
		for (var i = 0; i < hiddens.length; i++) {
			lines.push("<a href='" + hiddens[i].value + "'><div class='refererrer'>" + hiddens[i].name + "<span class='" + hiddens[i].name + "'></span></div></a>");
		}
		div.innerHTML = lines.join("\n");
		div.className = "ajax_referrers_popup small";
		$(this).after(div);
		this.popup = div;
	});
});