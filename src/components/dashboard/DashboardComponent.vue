<template>
    <div class="content-body">
   <div class="container">
      
      <div class="row">
         <SearchComponent/>
         <MostRecent/>
         <PostList/>
      </div>
   </div>
</div>
</template>

<script>
import PostList from "./PostsList.vue";
import MostRecent from "./MostRecent.vue";
import SearchComponent from './SearchComponent.vue';

    export default{
        name:'DashboardComponent',
        components:{
            PostList,
            MostRecent,
            SearchComponent
        }
    }
</script>