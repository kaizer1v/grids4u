<?php require "header.php"; ?>
<div id="header">
	<h1>Create your own Grid CSS</h1>
	<table>
		<tr>
			<td>Container Width</td>
			<td><input type="number" name="txt_container_width" id="txt_container_width" step="100" /></td>
		</tr>
		<tr>
			<td>Number of Columns you want</td>
			<td><input type="number" name="txt_col_width" id="txt_total_col" value="12" min="2" max="16" /></td>
		</tr>
		<tr>
			<td>Note:</td>
			<td><i>Gutter space is constant = 10px on left and 10px on the right.</i></td>
		</tr>
	</table>

	
	<h3>Copy the CSS below and paste it in your CSS file and use these classes and you are good to go :)</h3>
	<div id="css"></div>
	
</div>

<div class="col-container clearfix"></div>

<?php require "footer.php"; ?>
