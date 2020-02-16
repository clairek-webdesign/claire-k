$(document).ready(function()
			{
				$(".description").hide();
				
			});


$(function () 
	{
		$('#maccueil').click(function()
		{
			$(".description").hide();
			$(".accueil").show();
		});
		$('#mprojets').click(function ()
			{
				$(".accueil").hide();
				$(".description").hide();
				$(".projets").show();				
			});

		$('#mcontact').click(function ()
			{
				$(".accueil").hide();
				$(".description").hide();
				$(".contact").show();
			});

		


	});