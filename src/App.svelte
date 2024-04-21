<script lang="ts">
  import Layout from '@/Layout.svelte';
  import Case from '@/pages/Case.svelte';
  import Home from '@/pages/Home.svelte';
  import { Route, Router } from 'svelte-routing';
  import Count from './pages/Count.svelte';
</script>

<Router>
  <Layout>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/case">
      <Case />
    </Route>
    <Route path="/count">
      <Count />
    </Route>
  </Layout>
</Router>
