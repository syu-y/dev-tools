<script lang="ts">
  import Layout from '@/Layout.svelte';
  import Case from '@/pages/Case.svelte';
  import Home from '@/pages/Home.svelte';
  import { Route, Router } from 'svelte-routing';
</script>

<Router>
  <Layout>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/case">
      <Case />
    </Route>
  </Layout>
</Router>
