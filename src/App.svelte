<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Layout from "./Layout.svelte";
  import Home from "./pages/Home.svelte";
  import Case from "./pages/Case.svelte";
</script>


<Router>
  <Layout>
    <Route path="/">
      <Home　/>
    </Route>
    <Route path="/case">
      <Case/>
    </Route>
  </Layout>
</Router>
