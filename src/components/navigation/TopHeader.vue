<template>
    <div class="header">
        <div class="header-content">
            <nav class="navbar navbar-expand">
                <div class="container d-block my-0">
                    <div class="d-flex align-items-center justify-content-sm-between justify-content-end">
                    
                    <ul class="navbar-nav header-right ">
                        <li class="nav-item d-flex align-items-center">
                        </li>
                        <li>
                            <div class="dropdown header-profile2 ">
                                <a class="nav-link " href="javascript:void(0);"  role="button" data-bs-toggle="dropdown">
                                <div class="header-info2 d-flex align-items-center">
                                    <img src="user.png" alt="">
                                    <div class="d-flex align-items-center sidebar-info">
                                        <div>
                                            <h6 class="font-w200 mb-0 ms-2">Kudzai</h6>
                                        </div>
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                <a href="/profile" class="dropdown-item ai-icon ">
                                    <svg  xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <span class="ms-2">Users</span>
                                </a>
                                
                                <a href="/profile-update" class="dropdown-item ai-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                    <span class="ms-2">Add User</span>
                                </a>
                                
                               
                                <a href="" class="dropdown-item ai-icon ms-1">
                                    <svg  xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>
                                    <span class="ms-1">Logout </span>
                                </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default{
        name:'TopHeader',
        props:{
            
        }
    }
</script>