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
                                    <input type="text" class="form-control" placeholder="Post Title"    >
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Category</label>
                                    <select type="text" class="form-control">
                                        <option>Business</option>
                                        <option>Education</option>
                                        <option>Social</option>
                                    </select>
                                </div>
                        
                            </div>

                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Theme</label>
                                    <input type="file" class="form-control">
                                </div>
                        
                            </div>

                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Story</label>
                                    <textarea rows="8" class="form-control" name="story" placeholder="Write Here"></textarea>
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
        components:{

        }
    }
</script>