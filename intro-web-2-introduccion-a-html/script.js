<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>jsPDF - Create PDFs with HTML5 JavaScript Library</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">

	<!-- Bootstrap -->
	<link href="./examples/css/bootstrap.min.css" rel="stylesheet">

	<!-- Editor CSS -->
	<link href="./examples/css/editor.css" rel="stylesheet">
</head>

	<body>
		<style>#forkongithub a{background:#000;color:#fff;text-decoration:none;font-family:arial, sans-serif;text-align:center;font-weight:bold;padding:5px 40px;font-size:1rem;line-height:2rem;position:relative;transition:0.5s;}#forkongithub a:hover{background:#333;color:#fff;}#forkongithub a::before,#forkongithub a::after{content:"";width:100%;display:block;position:absolute;top:1px;left:0;height:1px;background:#fff;}#forkongithub a::after{bottom:1px;top:auto;}@media screen and (min-width:800px){#forkongithub{position:absolute;display:block;top:0;right:0;width:160px;overflow:hidden;height:200px;}#forkongithub a{width:160px;position:absolute;top:15px;right:-40px;transform:rotate(45deg);-webkit-transform:rotate(45deg);box-shadow:4px 4px 10px rgba(0,0,0,0.8);}}</style><span id="forkongithub"><a href="https://github.com/MrRio/jsPDF">Star me on GitHub</a></span>
		<div class="container">

			<div class="masthead" style="margin-top: 20px">
				<div class="pull-right" style="text-align: right;">
							<span class="tweet-buttons">
								<a href="https://twitter.com/share" class="twitter-share-button" data-via="MrRio" data-size="large">Tweet</a>
								<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
								<a href="https://twitter.com/MrRio" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @MrRio</a>
														<a class="btn btn-primary btn-sm" style="vertical-align:top;" href="https://github.com/MrRio/jsPDF">Download Now</a>
							<br/><span class="muted" id="dversion"></span>
							</span>
					<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

				</div>
				<img src="https://parall.ax/parallax-2016/img/svg/jspdf-logo.svg" alt="jsPDF logo" height="60px">
				<h4>HTML5 JavaScript PDF generation library from <a href="https://twitter.com/MrRio">@MrRio</a> at <a href="http://parall.ax">Parallax</a></h4>
			</div>

			<div class="row-fluid">
				<div class="span6" style="float: right; height: 650px;width: 50%;" >
					<div id="preview-pane" style="height: 650px;position:relative; z-index:999"></div>
				</div>
				<div class="span5 no-gutter" style="width: 49%;float:left">

					<h2>Have a play.</h2>

					<p>A HTML5 client-side solution for generating PDFs. Perfect for event tickets, reports, certificates, you name it! </p>

					<p><b>No servers were used in the making of this demo.</b></p>

					<div class="template-picker">
						<label for="template">Choose example</label>
						<select id="template" name="template">
							<option>Hold your horses...</option>
						</select>
					</div>
				</div>

				<div id="editor" class="bypass" style="width: 49%;"></div>

				<div class="controls" style="width: 49%;">
					<div class="pull-right">
						<!--<a href="#" class="btn btn-primary">Download Your Code</a>-->
						<a href="#" class="btn btn-primary download-pdf">Download PDF</a>
					</div>

					<label class="checkbox-inline">
						<input type="checkbox" id="auto-refresh" checked="checked"> Auto refresh on changes?
					</label>
					<a href="#" class="run-code hide btn btn-success">Run Code</a>

					<div class="alert hide">
						Auto refresh disabled for this
					</div>

				</div>

			</div>
			<div class="clerfix"></div>

		</div> <!-- /container -->

		<footer>&copy; 2017-2021 James Hall, 2021 yWorks GmbH - <a href="https://parall.ax/pages/privacy-policy">Privacy Policy</a></footer>

		<!-- Scripts down here -->
		<script   src="./examples/js/jquery/jquery-1.7.1.min.js"></script>

		<script type="text/javascript" src="dist/polyfills.umd.js"></script>
		<script type="text/javascript" src="dist/jspdf.umd.js"></script>

		<script type="text/javascript">
			var jsPDF = window.jspdf.jsPDF;
			$(document).ready(function() {
				if(jsPDF && jsPDF.version) {
					$('#dversion').text('Version ' + jsPDF.version);
				}
			});
		</script>

		<!-- Code editor -->

		<script src="./examples/js/ace.js" type="text/javascript" charset="utf-8"></script>

		<!-- Scripts in development mode -->
		<script type="text/javascript" src="./examples/js/pdfobject.min.js"></script>
		<script type="text/javascript" src="./examples/js/editor.js"></script>
	</body>
</html>