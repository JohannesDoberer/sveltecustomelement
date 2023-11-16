import MySvelteWC from './MySvelteWC.svelte'
if (!customElements.get('my-svelte-wc')) {
    customElements.define('my-svelte-wc', MySvelteWC.element);
}