<template>
    <div class="content-body">
        <div class="container">
            <div class="text-center">
                <a href="/home" type="submit" class="btn btn-primary btn-block shadow" style="margin-bottom:4%; width:100px">Back</a>
            </div>
            <div class="card">
               <div class="card-body">
                    <form v-on:submit.prevent="submitForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Title</label>
                                    <input type="text" class="form-control" placeholder="Post Title" v-model="title"   >
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Category</label>
                                    <select type="text" class="form-control" v-model="category">
                                        <option>Business</option>
                                        <option>Education</option>
                                        <option>Social</option>
                                    </select>
                                </div>
                        
                            </div>

                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Theme</label>
                                    <input type="file" class="form-control" accept="image/*" ref="file" @change="onImageChange">
                                </div>
                        
                            </div>

                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Story</label>
                                    <textarea rows="8" class="form-control" name="story" placeholder="Write Here" v-model="description"></textarea>
                                </div>
                        
                            </div>

                            <div class="col-lg-12">
                                <div class="mb-3 mb-0">
                                    <button type="submit" class="submit btn btn-primary">Save</button>
                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
       
</template>

<script>
import axios from 'axios';
    export default{
        name:'CreatePost',
        data(){
            return {
                post:{
                    title:"",
                    description:""
                }
            }
        },

        methods:{
            onImageChange(e){
                console.log(e.target.files[0]);
                this.image = e.target.files[0];
            },

            async create(){
                axios.post('http://127.0.0.1:8000/blog/create',this.post)
                .then(response=>{
                    this.$router.push({name:"home"});
                    this.data=response.post;
                }).catch(error=>{
                    console.log(error)
                })
            }
        }

    }
</script>