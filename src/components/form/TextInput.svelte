<script lang="ts">
  export let value = '';
  export let type = 'text';
  export let name = '';
  export let readonly: boolean | null = null;
  export let disabled: boolean | null = null;
  export let placeholder = '';
  export let change = (event: { currentTarget: HTMLInputElement }) => {};
  const props = {
    type,
    name,
    placeholder,
    readonly,
    disabled,
    change,
  };
</script>

<input class="text-black" {...props} bind:value on:change={change} />
