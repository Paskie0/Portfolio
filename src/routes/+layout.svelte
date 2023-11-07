<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		justify-content: center;
		gap: 0.1rem;
		padding: 0.5rem 0;
		background-color: rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	nav a {
		padding: 0.25rem 0.5rem;
		color: inherit;
		text-decoration: none;
		font-family: sans-serif;
		border-radius: 0.25rem;
		transition: 0.2s ease-in-out;

		&:hover {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}
</style>
