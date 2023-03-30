<template>
    <div class="col-xl-8">
        <div class="row">
            <div class="col-md-6" v-for="post in data" :key="post.id">
                <div class="card">
                    <div class="card-body">
                        <div class="post-details">
                            <h3 class="mb-2 text-black">{{ post.title }}</h3>
                            <ul class="mb-4 post-meta d-flex flex-wrap">
                                <li class="post-author me-3">By Admin</li>
                                <li class="post-date me-3"><i class="far fa-calendar-plus me-2"></i>{{post.date_posted}}</li>
                                <li class="post-comment"><i class="far fa-heart me-2"></i>{{post.category}}</li>
                            </ul>
                            <img :src="post.image_url" alt="" class="img-fluid mb-3 w-100 rounded">
                            <p>{{ post.description }}.</p>
                            <blockquote>{{ post.content }}.</blockquote>
                            <div class="profile-skills mt-5 mb-5">
                                
                                <a href="/posts-update" class="btn btn-primary light btn-xs mb-1">Update</a>
                                <a href="/posts-update" class="btn btn-secondary light btn-xs mb-1">Read More</a>
                                <a href="javascript:void();;" class="btn btn-danger light btn-xs mb-1">Delete</a>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default{
        name:'PostList',
        components:{

        },

        data(){
            return{
                data:[],
            }
        },

        methods:{
            getPost(){
                axios.get("http://127.0.0.1:8000/blog/")
                .then((response)=>{
                    this.data=response.data;
                    console.log(response.data);
                })
            }
        },

        created(){
            this.getPost();
        },
    }
</script>