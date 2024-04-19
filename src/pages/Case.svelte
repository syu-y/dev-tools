<script lang="ts">
  import Label from '../components/form/Label.svelte';
  import TextInput from '../components/form/TextInput.svelte';
  let camelCaseStr: string = '';
  let snakeCaseStr: string = '';

  const handleChange = (event: { currentTarget: HTMLInputElement }) => {
    snakeCaseStr = event.currentTarget.value;
  };
</script>

<h1 class="text-blue-600 text-2xl">ケース変換</h1>

<Label labeltext="CamelCase" name="inCamelCase"></Label>
<TextInput
  type="text"
  name="inCamelCase"
  change={handleChange}
  bind:value={camelCaseStr}
/>

<Label labeltext="To SnakeCase" name="inSnakeCase"></Label>
<TextInput type="text" name="inSnakeCase" bind:value={snakeCaseStr} />

<style></style>
