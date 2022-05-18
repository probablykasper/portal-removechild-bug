<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { cubicInOut } from 'svelte/easing'
  import { fade, scale } from 'svelte/transition'
  import { checkShortcut } from './shortcuts'

  const dispatch = createEventDispatcher<{ close: undefined }>()

  export let title: string | null = null
  export let center = true
  export let closeIcon = true
  export let maxWidth = '30rem'

  function bringFocus(container: HTMLDivElement) {
    container.focus()
  }
  function close() {
    dispatch('close')
  }
  function keydown(e: KeyboardEvent) {
    if (checkShortcut(e, 'Escape')) {
      close()
    }
  }
</script>

<svelte:body on:keydown={keydown} />

<div class="absolute top-0 left-0 z-40 flex h-full w-full items-center justify-center p-4 sm:p-8">
  <div
    class="absolute inset-0 -z-10 bg-black bg-opacity-20"
    on:click|self={close}
    transition:fade={{ duration: 200, easing: cubicInOut }}
  />
  <div
    transition:scale|local={{ duration: 300, start: 0.9, opacity: 0, easing: cubicInOut }}
    class="relative max-h-full w-full flex-shrink overflow-auto rounded-lg bg-white p-6 shadow-lg outline-none"
    style="max-width: {maxWidth};"
    tabindex="-1"
    use:bringFocus
  >
    {#if closeIcon}
      <svg
        class="absolute right-5 top-5 cursor-pointer fill-slate-600 p-1"
        on:click={close}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        ><path
          d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
        /></svg
      >
    {/if}
    <div
      class="flex h-full flex-col justify-center"
      class:items-left={!center}
      class:items-center={center}
      class:pt-4={closeIcon}
    >
      <p class="mb-6 text-4xl font-light">{title}</p>
      <slot />
    </div>
  </div>
</div>
