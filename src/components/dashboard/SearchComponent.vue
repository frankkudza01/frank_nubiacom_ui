<template>
    <div class="col-xl-12 col-xxl-12">
        <div class="row">
            <div class="col-xl-12">
                <div class="card dlab-position">
                    <div class="card-header border-0 pb-0">
                        <h4 class="cate-title">Filter For Results</h4>
                    </div>
    
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-12">
                                <form>
                                    <div class="mb-3">
                                        <label class="form-label">Title</label>
                                        <input type="Text" class="form-control" placeholder="Post Title.">
                                    </div>
    
                                </form>
                            </div>
                            
                            
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary btn-block shadow" style="width:100px">Search</button>
                        </div>
                    </div>
    
                    
                </div>
            </div>
            
        </div>
    </div>
    
    </template>
    
    <script>
        export default{
            name:'SearchComponent.vue',
            components:{
    
            }
        }
    </script>