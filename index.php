<?php
	$lib_size = number_format(((float)(filesize("tell.js") + filesize("tell.css")) / 1024), 2, '.', '');
?>

<!doctype html>
<html>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="/js/prism.js"></script>
		<link rel="stylesheet" href="/css/prism.css">
		<script src="tell.js"></script>
		<link rel="stylesheet" href="/css/project_page.css">
		<link rel="stylesheet" href="tell.css">
	</head>
	<body>
		<div class="projects-header">
			<h1>
				Tell
			</h1>
			<h3>
				JavaScript Dialogs
			</h3>
			<a href="https://github.com/calebsevern/Tell" style="position: absolute; top: 24px; right: 48px; font-size: 42px; color: white; text-decoration: none;">
				<i class="fa fa-github"></i>
			</a>
		</div>
		
		<br><br>
		
		<div class="section"><br>
			<b>Tell</b> is a tiny JavaScript library that creates pretty, draggable dialog boxes.
			<br><br>
			The un-minified JS + CSS is currently <?php echo $lib_size;?>KB.
			
			<br><br><Br>
			
			<b>Simple alert</b>
			
			<br><br>
			
			<pre><code class="language-javascript">Tell.alert("Hello, world.");</code></pre>
			
			<br><br>
			
			<button class="try-me simple-alert">Alert</button>
			
			<br><br>
		</div>
		
		<div class="section">
			<b>Asks the user for a confirmation</b>
			
			<br><br>
			
			<pre><code class="language-javascript">Tell.confirm("Are you really, really sure about that?", function(decision) {
	$(".tell-reply").html((decision) ? "Yes" : "No");
});</code></pre>
			
			<br><br>Were you sure? <text class="tell-reply">...</text>.
			
			<button class="try-me simple-confirm">Alert</button>
			
			<br><br>
		</div>
		
		<div class="section"><br><br>
			<b>Prompts the user for a reply</b>
			
			<br><br>
			
			<pre><code class="language-javascript">Tell.prompt("Enter your name", function(data) {
	if(data)
		$(".tell-prompt-reply").html(data);
});</code></pre>
			
			<br><br>Prompt value: <text class="tell-prompt-reply">...</text>
			
			<button class="try-me simple-prompt">Prompt</button>
			
			<br><br>
		</div>
		
		
		<br><br><br><br><br><br>
		
		<script>
			$(function() {
				$(".simple-alert").click(function() {
					Tell.alert("Hello, world.");
				});
				
				$(".simple-confirm").click(function() {
					Tell.confirm("Are you really, really sure about that?", function(decision) {
						$(".tell-reply").html((decision) ? "Yes" : "No");
					});
				});
				
				$(".simple-prompt").click(function() {
					Tell.prompt("Enter your name", function(data) {
						if(data)
							$(".tell-prompt-reply").html(data);
					});
				});
			});
		</script>
		
	</body>
</html>