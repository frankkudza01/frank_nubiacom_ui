<template>
    <div class="body">
        
        <CreatePost/>
        <TopHeader/>
        <SideBar/>
        <NavHeader/>
    </div>
</template>

<script>
    import CreatePost from '../posts/create/CreatePost';
    import SideBar from "../navigation/SideBar";
    import NavHeader from "../navigation/NavHeader";
    import TopHeader from "../navigation/TopHeader";
    export default{
        name:'PostCreatePage',
        components : {
            CreatePost,
            SideBar,
            NavHeader,
            TopHeader

        }
    }
</script>