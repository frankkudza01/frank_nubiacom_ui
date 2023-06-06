<template>
    <div class="content-body">
        <div class="container">
            <div class="text-center">
                <a href="/home" type="submit" class="btn btn-primary btn-block shadow" style="margin-bottom:4%; width:100px">Back</a>
            </div>
            <div class="card">
               <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Title</label>
                                    <input type="text" class="form-control" v-model="title"   >
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
                                    <label class="form-label">Story</label>
                                    <textarea rows="8" class="form-control" v-model="description" name="story">Star ships were meant to fly</textarea>
                                </div>
                        
                            </div>

                            <div class="col-lg-12">
                                <div class="mb-3 mb-0">
                                    <input type="submit" value="Save" class="submit btn btn-primary" name="submit">
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
    export default{
        name:'UpdatePost',
        data(){
            return {
                post:{
                    title:"",
                    description:"",
                    category:"",
                    _method:"patch"
                }
            }
        },

        mounted(){
        this.showPost()
    },

    methods:{
        async showPost(){
            await this.axios.get(`http://127.0.0.1:8000/blog/${this.$route.params.id}`).then(response=>{
                const { title, category, description } = response.data
                this.post.title = title
                this.post.description = description
                this.post.category = category
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`http://127.0.0.1:8000/blog/edit/${this.$route.params.id}`,this.post).then(response=>{
                this.$router.push({name:"home"});
                console.log(response.post);
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>