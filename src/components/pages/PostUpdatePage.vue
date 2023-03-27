<template>
    <div class="body">
        
        <UpdatePost/>
        <TopHeader/>
        <SideBar/>
        <NavHeader/>
    </div>
</template>

<script>
    import UpdatePost from '../posts/update/UpdatePost';
    import SideBar from "../navigation/SideBar";
    import NavHeader from "../navigation/NavHeader";
    import TopHeader from "../navigation/TopHeader";
    export default{
        name:'PostUpdatePage',
        components : {
            UpdatePost,
            SideBar,
            NavHeader,
            TopHeader

        }
    }
</script>