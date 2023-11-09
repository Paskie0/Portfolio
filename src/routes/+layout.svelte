<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
	<a href="/ProfielPlus">ProfielPlus</a>
</nav>

<slot />

<style>
	nav {
		width: 100%;
		position: fixed;
		top: 0;
		display: grid;
		grid-auto-flow: column;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		background-color: rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(1rem);

		& > a {
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
			color: rgba(255, 255, 255, 0.5);
			transition: 0.2s ease;

			&:hover {
				color: rgba(255, 255, 255);
			}
		}
	}
</style>
