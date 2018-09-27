"https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.3.min.js";
$(document).ready(function () {
	// Send an AJAX request
	$.getJSON(uri)
		.done(function (data) {
			// On success, 'data' contains a list of products.
			$.each(data, function (key, item) {
				// Add a list item for the product.
				$('<li>', { text: formatItem(item) }).appendTo($("#products"));
			});
		});
});

function formatItem(item) {
	return item.Name + ': $' + item.Price;
}

function find() {
	var id = $("#prodId").val();
	$.getJSON(uri + '/' + id)
		.done(function (data) {
			$("#product").text(formatItem(data));
		})
		.fail(function (jqXHR, textStatus, err) {
			$("#product").text('Error: ' + err);
		});
}