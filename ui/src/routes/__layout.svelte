<script>
    import '../globals/variables.scss';
    import '../globals/animations.scss';
    import '../globals/main.scss';
    import '../globals/scrollbars.scss';
    import { page } from '$app/stores';
    import Navbar from '$lib/Navbar/index.svelte';
    import Container from '$lib/Container/index.svelte';

    const url = `https://spline.fi${$page.path[$page.path.length - 1] === `/` ? $page.path : `${$page.path}/`}`;

    const updateTheme = () => {
        if (localStorage.getItem(`theme`) === null || (localStorage.getItem(`theme`) !== `dark` && localStorage.getItem(`theme`) !== `light`)) localStorage.setItem(`theme`, `light`);
        localStorage.getItem(`theme`) === `light` ? document.documentElement.setAttribute(`data-theme`, `light`) : document.documentElement.setAttribute(`data-theme`, `dark`);
    };
</script>

<svelte:window on:load={updateTheme} />

<svelte:head>
    <link rel="canonical" type="text/link" href={url}>
    <meta property="og:url" content={url}>
    <meta name="twitter:url" content={url}>
</svelte:head>


<header>
    <Navbar />
</header>
<Container>
    <main>
        <slot />
    </main>
</Container>

<style>
    header {
        position: fixed;
        top: 0;
        z-index: 1;
    }
    main {
        margin-top: 80px;
    }
</style>