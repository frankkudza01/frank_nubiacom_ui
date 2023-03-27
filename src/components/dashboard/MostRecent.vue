<template>
        <div class="col-xl-4">
            <div class="row">
               <div class="col-xl-12">
                  <div class="card">
                     <div class="card-body">
                        <div class="profile-statistics">
                           <div class="text-center">
                              <div class="row">
                                 <div class="col">
                                    <h3 class="m-b-0">150</h3>
                                    <span>Readers</span>
                                 </div>
                                 <div class="col">
                                    <h3 class="m-b-0">140</h3>
                                    <span>Authers</span>
                                 </div>
                                 
                              </div>
                              <div class="mt-4">
                                 <a href="/posts-create" class="btn btn-primary mb-1 me-1">New Post</a> 
                                
                              </div>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-12">
                  <div class="card">
                     <div class="card-body">
                        <div class="profile-blog">
                           <h5 class="text-primary d-inline">Posts</h5>
                           <img src="assets/images/profile/1.jpg" alt="" class="img-fluid mt-4 mb-4 w-100 rounded">
                           <h4><a href="post-details.html" class="text-black">Darwin Creative Agency Theme</a></h4>
                           <p class="mb-0">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                     </div>
                  </div>
               </div> 
            </div>
         </div>
</template>

<script>
    export default{
        name:'MostRecent',
        components:{

        }
    }
</script>