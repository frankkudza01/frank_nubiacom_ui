<template>
    <div class="container mt-0">
   <div class="row align-items-center justify-contain-center">
      <div class="col-xl-12 mt-5">
         <div class="card border-0">
            <div class="card-body login-bx">
               <div class="row  mt-5">
                  <div class="col-xl-8 col-md-6 sign text-center">
                     <div>
                        <img src="banner.avif" class="food-img" alt=""/>
                     </div>
                  </div>
                  <div class="col-xl-4 col-md-6 pe-0">
                     <div class="sign-in-your">
                        <div class="text-center mb-3">
                           <img src="logo.png" class="mb-3" style="width:80%" alt=""/>
                           <h4 class="fs-20 font-w800 text-black">Login to Account</h4>
                           <span class="dlab-sign-up">Sign In</span>
                        </div>
                        <form action="">
                           <div class="mb-3">
                              <label class="mb-1"><strong>Email Address</strong></label>
                              <input type="email" class="form-control">
                           </div>
                           <div class="mb-3">
                              <label class="mb-1"><strong>Password</strong></label>
                              <div class="input-group">
                                 <input type="password" class="form-control">
                                 
                              </div>
                           </div>
                           <div class="row d-flex justify-content-between mt-4 mb-2">
                              <div class="mb-3">
                                 <div class="form-check custom-checkbox ms-1">
                                    <input type="checkbox" class="form-check-input" id="basic_checkbox_1">
                                    <label class="form-check-label" htmlFor="basic_checkbox_1">Remember my preference</label>
                                 </div>
                              </div>
                              
                           </div>
                           <div class="text-center">
                              <a href="/home" type="submit" class="btn btn-primary btn-block shadow">Sign In</a>
                           </div>
                        </form>
                        <div class="text-center my-3">
                           
                        </div>
                       
                        <div class="text-center">
                           <span>Don't Have An Account?<a href="/register" class="text-primary"> Sign Up</a></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script>

    export default{
        name:'LoginComponent',
        components:{

        }
    }
</script>