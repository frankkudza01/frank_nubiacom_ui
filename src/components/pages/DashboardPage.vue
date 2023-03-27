<template>
    <div class="body">
        <DashboardComponent/>
        <TopHeader/>
        <SideBar/>
        <NavHeader/>
    </div>
</template>

<script>
    import DashboardComponent from '../dashboard/DashboardComponent';
    import SideBar from "../navigation/SideBar";
    import NavHeader from "../navigation/NavHeader";
    import TopHeader from "../navigation/TopHeader";
    export default{
        name:'DashboardPage',
        components : {
            DashboardComponent,
            SideBar,
            NavHeader,
            TopHeader

        }
    }
</script>