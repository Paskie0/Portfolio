<script>
	import { onMount } from 'svelte';

	let introTitle = 'Paskie.dev';
	let introTitleSplit = introTitle.split('');
	let introTitleArray = [];
	let title;

	onMount(() => {
		introTitleSplit.forEach((letter, i) => {
			setTimeout(() => {
				setTimeout(() => {
					introTitleArray.push(letter);
					title.innerHTML = introTitleArray.join('');
				}, i * 50);
			}, 1000);
		});
	});
</script>

<main>
	<div class="intro">
		<span bind:this={title} />
		<span class="blink">|</span>
	</div>
</main>

<style>
	main {
		height: 100dvh; /* dynamic viewport height, auto adjusts to dynamic interfaces (mobile browsers) */
		display: grid;
		place-items: center;
	}
	.intro {
		font-size: 0; /* remove whitespace */
	}

	.blink {
		text-align: center;
		animation: blink 0.8s infinite;
	}

	span {
		font-size: 2rem;
		font-weight: bold;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
