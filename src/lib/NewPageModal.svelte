<script lang="ts">
  import Modal from '$lib/Modal.svelte'
  import { goto } from '$app/navigation'
  import { createEventDispatcher } from 'svelte'

  let loading = false
  const dispatch = createEventDispatcher()

  async function create() {
    loading = true
      goto('/2')
      dispatch('close')
    loading = false
  }
</script>

<form on:submit|preventDefault={create}>
  <Modal maxWidth="26rem" title="Create new page" on:close>
    <button class="mt-4 ml-auto" type="submit" disabled={loading}>Create</button>
  </Modal>
</form>
