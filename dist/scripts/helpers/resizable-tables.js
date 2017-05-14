// select all tables and make resizable those that have 'resizable' class
var resizableTables = new Array();

function getWidth(x) {
	if (x.currentStyle)
		var y = x.clientWidth - parseInt(x.currentStyle["paddingLeft"]) - parseInt(x.currentStyle["paddingRight"]);
	else if (window.getComputedStyle)
		var y = document.defaultView.getComputedStyle(x, null).getPropertyValue("width");
	return y || 0;
}

function FitColumnWidthToHeader(table) {
	if (table == null)
		return;

	var tableContainer = table.parentNode.parentNode;
	var dragHeaders = table.rows[0].cells; // first row columns, used for changing of width
	if (!dragHeaders) return; // return if no table exists or no one row exists
	var tableRows = table.rows;

	if (tableRows.length == 1)
		return;

	// get table vertical scroll width
	var scrollWidth = tableContainer.offsetWidth - tableContainer.scrollWidth;

	// set header width to content
	var r = 0, c = 0;
	for (r = 1; r < tableRows.length; r++)
	{
		if (!(tableRows[r].getAttribute("class") || "").includes('ng-scope'))
			continue;
		else if (dragHeaders.length <= 0)
			continue;

		var dragRows = tableRows[r];
		for (c = 0; c < dragRows.cells.length - 1; c++)
			dragRows.cells[c].style.width = dragHeaders[c].offsetWidth + 'px';
		dragRows.cells[c].style.width = (dragHeaders[c].offsetWidth - scrollWidth) + 'px';
	}

	// set content width to header
	c = 0;
	var dragRows = tableRows[1];
	dragHeaders[c].style.width = (dragRows.cells[c].offsetWidth - 1) + 'px';
	for (c = 1; c < dragHeaders.length - 1; c++)
		dragHeaders[c].style.width = dragRows.cells[c].offsetWidth + 'px';
	dragHeaders[c].style.width = (dragRows.cells[c].offsetWidth + scrollWidth - 1) + 'px'
}

// main class prototype
function ColumnResize(table) {
	this.id = table.id;
	// ============================================================
	// private data
	var self = this;

	var dragHeaders = table.rows[0].cells; // first row columns, used for changing of width
	if (!dragHeaders) return; // return if no table exists or no one row exists
	var tableRows = table.rows;

	var dragColumnNo; // current dragging column
	var dragX; // last event X mouse coordinate

	var saveOnmouseup; // save document onmouseup event handler
	var saveOnmousemove; // save document onmousemove event handler
	var saveBodyCursor; // save body cursor property

	// ============================================================
	// methods
	// ============================================================
	// do changes columns widths
	// returns true if success and false otherwise
	this.changeColumnWidth = function (no, w) {
		for (var next = 1; no + next < dragHeaders.length; next++) {
			if (!dragHeaders[no + next].getAttribute("class").includes("ng-hide"))
				break;
		}
		if (no + next >= dragHeaders.length)
			next = 0;

		if (parseInt(dragHeaders[no].style.width) <= -w) return false;
		if (next > 0 && dragHeaders[no + next] && parseInt(dragHeaders[no + next].style.width) <= w) return false;

		dragHeaders[no].style.width = parseInt(dragHeaders[no].style.width) + w + 'px';
		if (next > 0 && dragHeaders[no + next])
			dragHeaders[no + next].style.width = parseInt(dragHeaders[no + next].style.width) - w + 'px';

		// make content width to same with headers
		FitColumnWidthToHeader(table);

		return true;
	}

	this.columnDrag = function (e) {
		var e = e || window.event;
		var X = e.clientX || e.pageX;
		if (!self.changeColumnWidth(dragColumnNo, X - dragX)) {
			// stop drag!
			self.stopColumnDrag(e);
		}
		dragX = X;
		// prevent other event handling
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	this.stopColumnDrag = function (e) {
		var e = e || window.event;
		if (!dragHeaders) return;
		// restore handlers & cursor
		document.onmouseup = saveOnmouseup;
		document.onmousemove = saveOnmousemove;
		document.body.style.cursor = saveBodyCursor;
	}

	// ============================================================
	// init data and start dragging
	this.startColumnDrag = function (e) {
		var e = e || window.event;
		// remember dragging object
		dragColumnNo = (e.target || e.srcElement).parentNode.parentNode.cellIndex;
		dragX = e.clientX || e.pageX;

		// set up current columns widths in their particular attributes
		// do it in two steps to avoid jumps on page!
		var colWidth = new Array();
		for (var i = 0; i < dragHeaders.length; i++)
			colWidth[i] = parseInt(getWidth(dragHeaders[i]));
		for (var i = 0; i < dragHeaders.length; i++) {
			dragHeaders[i].width = "";
			dragHeaders[i].style.width = colWidth[i] + "px";
		}

		saveOnmouseup = document.onmouseup;
		document.onmouseup = self.stopColumnDrag;

		saveBodyCursor = document.body.style.cursor;
		document.body.style.cursor = 'w-resize';

		// fire!
		saveOnmousemove = document.onmousemove;
		document.onmousemove = self.columnDrag;

		e.preventDefault();
		e.stopPropagation();
	}

	// prepare table header to be draggable
	// it runs during class creation
	for (var i = 0; i < dragHeaders.length; i++) {
		var resizer = dragHeaders[i].getElementsByClassName('table-header-resizer');
		if (resizer.length > 0)
			resizer[0].onmousedown = this.startColumnDrag;
	}
}

function ResizableColumns() {
	var gresizableGirdElement = document.getElementById('resizable-gird');
	new ColumnResize(gresizableGirdElement);
}
