<script lang="ts">
  export let value = '';
  export let type = 'text';
  export let id = '';
  export let name = '';
  export let readonly: boolean | null = null;
  export let disabled: boolean | null = null;
  export let placeholder = '';
  export let change = (event: { currentTarget: HTMLInputElement }) => {};
  const props = {
    type,
    id,
    name,
    placeholder,
    readonly,
    disabled,
    change,
  };
</script>

<input class="text-black" {...props} bind:value on:change={change} />
