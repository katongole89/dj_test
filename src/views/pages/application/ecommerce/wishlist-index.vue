<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Wishlist</h4>
                        <h6>Manage your wishlist</h6>
                    </div>
                </div>
                <ul class="table-top-head">
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
                    </li>
                </ul>
            </div>
            
            <div class="wishlist-products p-4 bg-white">
                <div class="d-flex align-items-center justify-content-between">
                    <h4 class="mb-3">Products</h4>
                    <div class="d-flex align-items-center mb-3">
                        <div class="input-icon-start pos-search position-relative me-2">
                            <span class="input-icon-addon">
                                <i class="ti ti-search"></i>
                            </span>
                            <input type="text" class="form-control" placeholder="Search Product">
                        </div>
                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#remove_all"><i class="ti ti-trash"></i> Remove All</a>
                    </div>
                </div>
                <div class="tabs_container">
                    <div class="tab_content active" data-tab="all">
                        <div class="row">
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-01.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">IPhone 14 64GB</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$15800</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-02.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">MacBook Pro</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$1000</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-03.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">Rolex Tribute V3</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$6800</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-04.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">Red Nike Angelo</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-danger shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>Out of Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$7800</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card ">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-05.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">Airpod 2</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$5478</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-06.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">Blue White OGR</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$987</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-07.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">IdeaPad Slim 5 Gen 7</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-danger shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>Out of Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$1454</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-08.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">SWAGME</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$6587</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-09.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">Timex Black Silver</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$1457</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="product-info default-cover card">
                                    <a href="javascript:void(0);" class="img-bg">
                                        <img src="@/assets/img/products/pos-product-10.png" alt="Products">
                                        <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>
                                    </a>
                                    <h6 class="product-name mb-1"><a href="javascript:void(0);">Tablet 1.02 inch</a></h6>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                            <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        </div>
                                        <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between price">
                                        <p class="mb-0">$4744</p>
                                        <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
            <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
        </div>
    </div>

    <wishlist-modal></wishlist-modal>
</template>