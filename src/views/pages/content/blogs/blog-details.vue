<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Blogs</h4>
                        <h6>Manage your blogs</h6>
                    </div>
                </div>
                <ul class="table-top-head">
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh">
                            <i class="ti ti-refresh"></i>
                        </a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader">
                            <i class="ti ti-chevron-up"></i>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3"><img src="@/assets/img/social/blog-detail.jpg" class="rounded w-100" alt="Img"></div>
                            <div class="mb-3 pb-3 border-bottom">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div>
                                            <h4 class="mb-2">What is a POS System? A Beginner’s Guide</h4>
                                            <div class="d-flex align-items-center">
                                                <p class="me-3 mb-0 border-end pe-3"><i class="ti ti-calendar me-1"></i>24 Dec 2024</p>
                                                <div class="d-flex align-items-center">
                                                    <img src="@/assets/img/users/user-01.jpg" class="avatar avatar-xs rounded-circle" alt="Img">
                                                    Gertrude Bowie
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex align-items-center justify-content-between text-center">
                                            <div class="me-3">
                                                <h6>3000</h6>
                                                <span class="fs-12">Likes</span>
                                            </div>
                                            <div class="border-start text-gray ps-3 me-3">
                                                <h6>454</h6>
                                                <span class="fs-12">Comments</span>
                                            </div>
                                            <div class="border-start text-gray ps-3 me-3">
                                                <h6>102</h6>
                                                <span class="fs-12">Share</span>
                                            </div>
                                            <div class="border-start text-gray ps-3">
                                                <h6>350</h6>
                                                <span class="fs-12">Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom">
                                <p class="mb-3">A POS (Point of Sale) System is a combination of hardware and 
                                    software designed to facilitate and manage sales transactions in retail, 
                                    restaurants, and other businesses. It is essentially where customers make payments
                                    for goods or services. A modern POS system integrates several functions like inventory 
                                    management, customer relationship management (CRM), and sales reporting, making it a crucial
                                    tool for businesses. At its core, a POS system processes payments, calculates total prices,
                                    applies discounts, and issues receipts. The hardware typically includes a register, barcode
                                    scanner, card reader, receipt printer, and sometimes a cash drawer. The software,
                                    on the other hand, manages transactions, tracks sales data, and provides detailed
                                    insights into business operations, helping business owners streamline their
                                    processes and make informed decisions. Whether you're running a small shop 
                                    or a large restaurant, understanding and using a POS system effectively can improve 
                                    efficiency, enhance customer service, and help in scaling your business.
                                </p>
                                <p class="mb-3">In addition to processing payments, modern POS systems offer
                                    a variety of features that make them indispensable for business owners. 
                                    These systems can manage inventory, automatically updating stock levels as sales are
                                    made, and even sending alerts when it's time to reorder products. Sales analytics is 
                                    another key feature, allowing businesses to track performance by generating reports on
                                    best-selling items, peak sales times, and customer preferences. This data can help 
                                    businesses identify trends, optimize their offerings, and adjust pricing strategies.
                                </p>
                                <p class="mb-0">Additionally, POS systems can be integrated with other business
                                    tools like accounting software, eCommerce platforms, and customer
                                    support tools, further streamlining operations. With advancements
                                    in mobile POS technology, businesses can now process transactions anywhere,
                                    whether on the shop floor or out in the field. This flexibility and ease of
                                    use have made POS systems a must-have for both small businesses and large
                                    enterprises aiming to enhance operational efficiency and customer satisfaction.
                                </p>
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                                <h6 class="me-2">Tags :</h6>
                                <a href="#" class="badge bg-soft-info me-2">PointOfSale</a>
                                <a href="#" class="badge bg-soft-info me-2">RetailTech</a>
                                <a href="#" class="badge bg-soft-info me-2">POSIntegration</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p class="mb-0">2014 - 2025 &copy; DreamsPOS. All Right Reserved</p>
            <p>Designed &amp; Developed by <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        toggleHeader() {
            document.getElementById("collapse-header").classList.toggle("active");
            document.body.classList.toggle("header-collapse");
        },
    },
}
</script>