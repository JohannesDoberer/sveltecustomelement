<svelte:options
    customElement={{
        tag: null,
        shadow: "none",
        props: {
            test: {
                reflect: false,
                type: "String",
                attribute: "testattribute",
            },
        },
        extend: (customElementConstructor) => {
            return class extends customElementConstructor {
                constructor() {
                    super();
                    this.attachShadow({ mode: "open", delegatesFocus: false });
                }
            };
        },
    }}
/>

<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    export let test: string;
    let mainComponent: HTMLElement;

    onMount(async () => {
        const thisComponent: any = (mainComponent.getRootNode() as ShadowRoot)
            .host;

        console.log("thisComponent", thisComponent.test); //value always there
        console.log("props ", test); //value undefined
    });
    onDestroy(async () => {});
</script>

<div bind:this={mainComponent}>
    <span>Prop value: {test}</span>
</div>

<style>
    div {
        width: 200px;
        height: 200px;
        border: 1px solid green;
    }

    span {
        color: red;
    }
</style>
