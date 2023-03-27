<template>
    <div class="body">
        <div class="text-center">
            <button type="submit" class="btn btn-primary btn-block shadow" style="width:100px">Back</button>
        </div>
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
        name:'DashboardPage',
        components : {
            CreatePost,
            SideBar,
            NavHeader,
            TopHeader

        }
    }
</script>