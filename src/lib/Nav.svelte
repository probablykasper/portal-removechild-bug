<script lang="ts">
  import NewPageModal from "./NewPageModal.svelte";
  import { portal } from "svelte-portal/src/Portal.svelte";

  let showCreateNewModal = false;
</script>

<button
  class="flex w-full cursor-pointer items-center px-5 py-3 text-left hover:bg-gray-50 sm:py-2"
  type="button"
  on:click={() => (showCreateNewModal = true)}
>
  New page
</button>

{#if showCreateNewModal}
  <div use:portal on:click|stopPropagation>
    <NewPageModal on:close={() => (showCreateNewModal = false)} />
  </div>
{/if}
