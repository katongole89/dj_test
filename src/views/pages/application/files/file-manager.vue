<template>
	<layout-header></layout-header>
	<layout-sidebar></layout-sidebar>

    <div class="page-wrapper notes-page-wrapper file-manager">
		<div class="content">
			<div class="page-header page-add-notes border-0 flex-sm-row flex-column">
				<div class="add-item d-flex">
					<div class="page-title">
						<h4>File Manager</h4>
						<h6 class="mb-0">Manage your files</h6>
					</div>
				</div>
				<div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">
					<ul class="table-top-head me-2">
						<li>
							<router-link to="/application/notes" data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></router-link>
						</li>
						<li>
							<a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i class="ti ti-chevron-up"></i></a>
						</li>
					</ul>
					<div class="search-set">
						<div class="search-input">
							<a href="javascript:void(0);" class="btn-searchset"><i data-feather="search" class="feather-search"></i></a>
							<div id="DataTables_Table_0_filter" class="dataTables_filter">
								<label> <input type="search" class="form-control form-control-sm py-0" placeholder="Search"></label>
							</div>
						</div>
					</div>
					<div class="form-sort me-2">
						<vue-select
							:options="Allfiles"
							id="all-files"
							placeholoder=""
						/>
					</div>
					<div class="page-btn">
						<a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_folder"><i class="feather feather-plus-circle me-2"></i> Create Folder</a>
					</div>
				</div>
			</div>

			<div class="row">
				<!-- Dropbox -->
				<div class="col-lg-3 col-md-6 d-flex">
				<div class="card bg-lightdanger-gradient flex-fill">
					<div class="card-body">
					<div class="d-flex align-items-center justify-content-between mb-2">
						<div class="d-flex align-items-center">
						<img src="@/assets/img/icons/dropbox.svg" alt="img" />
						<h5 class="ms-2">Dropbox</h5>
						</div>
						<div class="dropdown">
						<a
							href="javascript:void(0);"
							class="d-inline-flex align-items-center"
							data-bs-toggle="dropdown"
						>
							<i class="ti ti-dots"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-end p-3">
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-folder-open me-2"></i>Open</a
							>
							</li>
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-trash me-1"></i>Delete All</a
							>
							</li>
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-status-change me-1"></i>Reset</a
							>
							</li>
						</ul>
						</div>
					</div>
					<div class="progress progress-xs flex-grow-1 mb-2">
						<div
						class="progress-bar bg-pink rounded"
						role="progressbar"
						style="width: 20%"
						aria-valuenow="30"
						aria-valuemin="0"
						aria-valuemax="100"
						></div>
					</div>
					<div class="d-flex align-items-center justify-content-between">
						<p class="mb-0">200 Files</p>
						<p class="text-title mb-0">28GB</p>
					</div>
					</div>
				</div>
				</div>
				<!-- /Dropbox -->

				<!-- Google Drive -->
				<div class="col-lg-3 col-md-6 d-flex">
				<div class="card bg-lightpink-gradient flex-fill">
					<div class="card-body">
					<div class="d-flex align-items-center justify-content-between mb-2">
						<div class="d-flex align-items-center">
						<img src="@/assets/img/icons/drive.svg" alt="img" />
						<h5 class="ms-2">Google Drive</h5>
						</div>
						<div class="dropdown">
						<a
							href="javascript:void(0);"
							class="d-inline-flex align-items-center"
							data-bs-toggle="dropdown"
						>
							<i class="ti ti-dots"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-end p-3">
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-folder-open me-2"></i>Open</a
							>
							</li>
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-trash me-1"></i>Delete All</a
							>
							</li>
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-status-change me-1"></i>Reset</a
							>
							</li>
						</ul>
						</div>
					</div>
					<div class="progress progress-xs flex-grow-1 mb-2">
						<div
						class="progress-bar bg-pink rounded"
						role="progressbar"
						style="width: 80%"
						aria-valuenow="30"
						aria-valuemin="0"
						aria-valuemax="100"
						></div>
					</div>
					<div class="d-flex align-items-center justify-content-between">
						<p class="mb-0">144 Files</p>
						<p class="text-title mb-0">54GB</p>
					</div>
					</div>
				</div>
				</div>
				<!-- /Google Drive -->

				<!-- Cloud Storage -->
				<div class="col-lg-3 col-md-6 d-flex">
				<div class="card bg-lightsuccess-gradient flex-fill">
					<div class="card-body">
					<div class="d-flex align-items-center justify-content-between mb-2">
						<div class="d-flex align-items-center">
						<img src="@/assets/img/icons/cloud.svg" alt="img" />
						<h5 class="ms-2">Cloud Storage</h5>
						</div>
						<div class="dropdown">
						<a
							href="javascript:void(0);"
							class="d-inline-flex align-items-center"
							data-bs-toggle="dropdown"
						>
							<i class="ti ti-dots"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-end p-3">
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-folder-open me-2"></i>Open</a
							>
							</li>
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-trash me-1"></i>Delete All</a
							>
							</li>
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-status-change me-1"></i>Reset</a
							>
							</li>
						</ul>
						</div>
					</div>
					<div class="progress progress-xs flex-grow-1 mb-2">
						<div
						class="progress-bar bg-purple rounded"
						role="progressbar"
						style="width: 50%"
						aria-valuenow="30"
						aria-valuemin="0"
						aria-valuemax="100"
						></div>
					</div>
					<div class="d-flex align-items-center justify-content-between">
						<p class="mb-0">144 Files</p>
						<p class="text-title mb-0">54GB</p>
					</div>
					</div>
				</div>
				</div>
				<!-- /Cloud Storage -->

				<!-- Internal Storage -->
				<div class="col-lg-3 col-md-6 d-flex">
				<div class="card bg-lightpurple-gradient flex-fill">
					<div class="card-body">
					<div class="d-flex align-items-center justify-content-between mb-2">
						<div class="d-flex align-items-center">
						<img src="@/assets/img/icons/storage.svg" alt="img" />
						<h5 class="ms-2">Internal Storage</h5>
						</div>
						<div class="dropdown">
						<a
							href="javascript:void(0);"
							class="d-inline-flex align-items-center"
							data-bs-toggle="dropdown"
						>
							<i class="ti ti-dots"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-end p-3">
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-folder-open me-2"></i>Open</a
							>
							</li>
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-trash me-1"></i>Delete All</a
							>
							</li>
							<li>
							<a href="javascript:void(0);" class="dropdown-item rounded-1"
								><i class="ti ti-status-change me-1"></i>Reset</a
							>
							</li>
						</ul>
						</div>
					</div>
					<div class="progress progress-xs flex-grow-1 mb-2">
						<div
						class="progress-bar bg-purple rounded"
						role="progressbar"
						style="width: 20%"
						aria-valuenow="30"
						aria-valuemin="0"
						aria-valuemax="100"
						></div>
					</div>
					<div class="d-flex align-items-center justify-content-between">
						<p class="mb-0">144 Files</p>
						<p class="text-title mb-0">54GB</p>
					</div>
					</div>
				</div>
				</div>
				<!-- /Internal Storage -->
			</div>

			<div class="row">
				<!-- Sidebar -->
				<div class="col-xl-3 theiaStickySidebar">
					<div class="card">
						<div class="card-body p-3">
							<div class="shadow-xs p-2 mb-3">
								<div class="d-flex align-items-center justify-content-between">
								<div class="d-flex align-items-center overflow-hidden">
									<span class="avatar">
									<img
										src="@/assets/img/profiles/avatar-29.jpg"
										alt="img"
										class="rounded-circle"
									/>
									</span>
									<div class="overflow-hidden ms-2">
									<h5 class="text-truncate">James Hong</h5>
									<p class="fs-12 text-truncate">Jnh343@example.com</p>
									</div>
								</div>
								<div class="dropdown ms-2">
									<a
									href="javascript:void(0);"
									class="d-inline-flex align-items-center"
									data-bs-toggle="dropdown"
									>
									<i class="ti ti-dots"></i>
									</a>
									<ul class="dropdown-menu dropdown-menu-end p-3">
									<li>
										<a href="javascript:void(0);" class="dropdown-item rounded-1"
										><i class="ti ti-edit me-1"></i>Edit</a
										>
									</li>
									</ul>
								</div>
								</div>
							</div>
							<div class="file-drop mb-3 text-center">
								<span class="avatar avatar-sm bg-primary text-white mb-2">
								<i class="ti ti-upload fs-16"></i>
								</span>
								<h6 class="mb-2">Drop files here</h6>
								<p class="fs-12 mb-0">
								Browse and chose the files you want to upload from your computer
								</p>
								<input type="file" />
							</div>
							<div class="files-list nav d-block">
								<a
								href="javscript:void(0);"
								class="d-flex align-items-center fw-medium p-2 active"
								><i class="ti ti-folder-up me-2"></i>All Folder / Files</a
								>
								<a
								href="javscript:void(0);"
								class="d-flex align-items-center fw-medium p-2"
								><i class="ti ti-star me-2"></i>Drive</a
								>
								<a
								href="javscript:void(0);"
								class="d-flex align-items-center fw-medium p-2"
								><i class="ti ti-octahedron me-2"></i>Dropbox</a
								>
								<a
								href="javscript:void(0);"
								class="d-flex align-items-center fw-medium p-2"
								><i class="ti ti-share-2 me-2"></i>Shared with Me</a
								>
								<a
								href="javscript:void(0);"
								class="d-flex align-items-center fw-medium p-2"
								><i class="ti ti-file me-2"></i>Document</a
								>
								<a
								href="javscript:void(0);"
								class="d-flex align-items-center fw-medium p-2"
								><i class="ti ti-clock-hour-11 me-2"></i>Recent File</a
								>
								<a
								href="javscript:void(0);"
								class="d-flex align-items-center fw-medium p-2"
								><i class="ti ti-star me-2"></i>Important</a
								>
								<a
								href="javscript:void(0);"
								class="d-flex align-items-center fw-medium p-2"
								><i class="ti ti-music me-2"></i>Media</a
								>
							</div>
						</div>
					</div>

					<!-- Storage Details -->
					<div class="card">
						<div class="card-body p-3">
						<div class="d-flex align-items-center justify-content-between mb-2">
							<h4 class="mb-2">Storage Details</h4>
							<span class="badge badge-success mb-2">Used 77%</span>
						</div>
						<div id="storage-chart">
							<apexchart
							type="donut"
							height="200"
							:options="notesChart.notes"
							:series="notesChart.series"
							>
							</apexchart>
						</div>
						<div class="d-flex align-items-center justify-content-between mb-3">
							<div class="d-flex align-items-center overflow-hidden">
							<span class="avatar avatar-md bg-transparent-info">
								<i class="ti ti-music fs-20 text-info"></i>
							</span>
							<div class="overflow-hidden ms-2">
								<h6 class="text-truncate">Music</h6>
								<p class="text-truncate">35 Files</p>
							</div>
							</div>
							<p class="text-title">8.5 GB</p>
						</div>
						<div class="d-flex align-items-center justify-content-between mb-3">
							<div class="d-flex align-items-center overflow-hidden">
							<span class="avatar avatar-md bg-transparent-warning">
								<i class="fa-regular fa-file-audio fs-20 text-warning"></i>
							</span>
							<div class="overflow-hidden ms-2">
								<h6 class="text-truncate">Video</h6>
								<p class="text-truncate">145 Files</p>
							</div>
							</div>
							<p class="text-title">2 GB</p>
						</div>
						<div class="d-flex align-items-center justify-content-between mb-3">
							<div class="d-flex align-items-center overflow-hidden">
							<span class="avatar avatar-md bg-transparent-secondary">
								<i class="ti ti-file-description fs-20 text-secondary"></i>
							</span>
							<div class="overflow-hidden ms-2">
								<h6 class="text-truncate">Documents</h6>
								<p class="text-truncate">487 Files</p>
							</div>
							</div>
							<p class="text-title">24.5 GB</p>
						</div>
						<div class="d-flex align-items-center justify-content-between mb-3">
							<div class="d-flex align-items-center overflow-hidden">
							<span class="avatar avatar-md bg-transparent-purple">
								<i class="ti ti-photo fs-20 text-purple"></i>
							</span>
							<div class="overflow-hidden ms-2">
								<h6 class="text-truncate">Photos</h6>
								<p class="text-truncate">35 Files</p>
							</div>
							</div>
							<p class="text-title">8.5 GB</p>
						</div>
						<div class="d-flex align-items-center justify-content-between mb-0">
							<div class="d-flex align-items-center overflow-hidden">
							<span class="avatar avatar-md bg-transparent-purple">
								<i class="ti ti-file-type-doc fs-20 text-pink"></i>
							</span>
							<div class="overflow-hidden ms-2">
								<h6 class="text-truncate">Other</h6>
								<p class="text-truncate">487 Files</p>
							</div>
							</div>
							<p class="text-title">16.2 GB</p>
						</div>
						</div>
					</div>
					<!-- /Storage Details -->

					<!-- Upgrade Details -->
					<div class="card bg-black bg-01">
						<div class="card-body text-center">
						<img src="@/assets/img/icons/upgrade.svg" alt="img" class="mb-3" />
						<h6 class="mb-3 text-white">Upgrade to Pro for Unlimited Storage</h6>
						<a href="javascript:void(0);" class="btn btn-white btn-sm"
							>Upgrade Now<i class="ti ti-arrow-right ms-1"></i
						></a>
						</div>
					</div>
					<!-- /Upgrade Details -->
				</div>
				<!-- /Sidebar -->

				<div class="col-xl-9">
					<!-- Quick Access -->
					<div class="border-bottom mb-4">
						<div class="d-flex align-items-center justify-content-between mb-2">
							<h4 class="mb-2">Quick Access</h4>
								<div>
									<a href="javascript:void(0);" class="mb-2 me-3 fw-medium link-default">Close</a>
									<a href="javascript:void(0);" class="mb-2 fw-medium link-default">View All</a>
								</div>
							</div>
							<div class="row row-cols-xxl-5 row-cols-xl-3 row-cols-sm-3 row-cols-1 justify-content-center">
							<div class="col d-flex">
								<div class="card access-wrap border-0 flex-fill">
									<div class="card-body text-center">
										<img src="@/assets/img/icons/file.svg" alt="img" class="mb-3" />
										<h6 class="mb-2 fw-medium">
											<a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Final Change.doc</a>
										</h6>
										<span class="badge badge-dark-transparent">2.4 GB</span>
									</div>
									<span class="access-rate rating-select">
										<i class="ti ti-star-filled filled"></i>
									</span>
								</div>
							</div>
							<div class="col d-flex">
								<div class="card access-wrap border-0 flex-fill">
									<div class="card-body text-center">
										<img src="@/assets/img/icons/pdf-icon.svg" alt="img" class="mb-3" />
										<h6 class="mb-2 fw-medium">
											<a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Marklist.pdf</a>
										</h6>
										<span class="badge badge-dark-transparent">2.4 GB</span>
									</div>
									<span class="access-rate rating-select">
										<i class="ti ti-star"></i>
									</span>
								</div>
							</div>
							<div class="col d-flex">
								<div class="card access-wrap border-0 flex-fill">
									<div class="card-body text-center">
										<img src="@/assets/img/icons/image.svg" alt="img" class="mb-3" />
										<h6 class="mb-2 fw-medium">
											<a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Nature.png</a>
										</h6>
										<span class="badge badge-dark-transparent">2.4 GB</span>
									</div>
									<span class="access-rate rating-select">
										<i class="ti ti-star-filled filled"></i>
									</span>
								</div>
							</div>
							<div class="col d-flex">
								<div class="card access-wrap border-0 flex-fill">
									<div class="card-body text-center">
										<img src="@/assets/img/icons/xls-icon.svg" alt="img" class="mb-3" />
										<h6 class="mb-2 fw-medium">
											<a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">List.xlsx</a>
										</h6>
										<span class="badge badge-dark-transparent">2.4 GB</span>
									</div>
									<span class="access-rate rating-select">
										<i class="ti ti-star"></i>
									</span>
								</div>
							</div>
							<div class="col d-flex">
								<div class="card access-wrap border-0 flex-fill">
									<div class="card-body text-center">
										<img src="@/assets/img/icons/folder-icon.svg" alt="img" class="mb-3"/>
										<h6 class="mb-2 fw-medium">
											<a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Group Photos</a>
										</h6>
										<span class="badge badge-dark-transparent">2.4 GB</span>
									</div>
									<span class="access-rate rating-select">
										<i class="ti ti-star"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<!-- /Quick Access -->

					<!-- Recent Videos -->
					<recent-video></recent-video>
					<!-- /Recent Videos -->

					<!-- Recent Folders -->
					<recent-folder></recent-folder>
					<!-- /Recent Folders -->

					<!-- Recent Files -->
					<recent-file></recent-file>
					<!-- /Recent Files -->

					<!-- Student List -->
					<div class="d-flex align-items-center justify-content-between mb-2">
						<h4 class="mb-2">Files</h4>
						<div class="d-flex align-items-center">
							<div class="dropdown mb-2 me-2">
								<a
								href="javascript:void(0);"
								class="dropdown-toggle btn btn-white"
								data-bs-toggle="dropdown"
								>
								Sort By : Docs Type
								</a>
								<ul class="dropdown-menu dropdown-menu-end p-3">
								<li>
									<a href="javascript:void(0);" class="dropdown-item rounded-1">Docs</a>
								</li>
								<li>
									<a href="javascript:void(0);" class="dropdown-item rounded-1">Pdf</a>
								</li>
								<li>
									<a href="javascript:void(0);" class="dropdown-item rounded-1"
									>Image</a
									>
								</li>
								<li>
									<a href="javascript:void(0);" class="dropdown-item rounded-1"
									>Folder</a
									>
								</li>
								<li>
									<a href="javascript:void(0);" class="dropdown-item rounded-1">Xml</a>
								</li>
								</ul>
							</div>
							<a href="javascript:void(0);" class="link-primary fw-medium mb-2">View All</a>
						</div>
					</div>
					<div class="custom-datatable-filter table-responsive mb-4">
						<table class="table datatable">
							<thead class="thead-light">
								<tr>
								<th class="no-sort">
									<div class="form-check form-check-md">
									<input class="form-check-input" type="checkbox" id="select-all" />
									</div>
								</th>
								<th>Name</th>
								<th>Size</th>
								<th>Type</th>
								<th>Modified</th>
								<th>Share</th>
								<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="form-check form-check-md">
											<input class="form-check-input" type="checkbox" />
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center file-name-icon">
										<a
											href="javascript:void(0);"
											class="avatar avatar-md bg-light"
											data-bs-toggle="offcanvas"
											data-bs-target="#preview"
										>
											<img
											src="@/assets/img/icons/file-01.svg"
											class="img-fluid"
											alt="img"
										/></a>
										<div class="ms-2">
											<p class="text-title fw-medium mb-0">
											<a
												href="javascript:void(0);"
												data-bs-toggle="offcanvas"
												data-bs-target="#preview"
												>Secret</a
											>
											</p>
										</div>
										</div>
									</td>
									<td>7.6 MB</td>
									<td>Doc</td>
									<td>
										<p class="text-title mb-0">Mar 15, 2025</p>
										<span>05:00:14 PM</span>
									</td>
									<td>
										<div class="avatar-list-stacked avatar-group-sm">
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-27.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-29.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-12.jpg"
											alt="img"
											/>
										</span>
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center">
										<div class="rating-select me-2">
											<a href="javascript:void(0);"><i class="ti ti-star"></i></a>
										</div>
										<div class="dropdown">
											<a
											href="javascript:void(0);"
											class="d-flex align-items-center justify-content-center"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											>
											<i class="ti ti-dots fs-14"></i>
											</a>
											<ul class="dropdown-menu dropdown-menu-right p-3">
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-trash me-2"></i>Permanent Delete
												</a>
											</li>
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-edit-circle me-2"></i>Restore File
												</a>
											</li>
											</ul>
										</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="form-check form-check-md">
										<input class="form-check-input" type="checkbox" />
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center file-name-icon">
										<a
											href="javascript:void(0);"
											class="avatar avatar-md bg-light"
											data-bs-toggle="offcanvas"
											data-bs-target="#preview"
										>
											<img
											src="@/assets/img/icons/file-02.svg"
											class="img-fluid"
											alt="img"
										/></a>
										<div class="ms-2">
											<p class="text-title fw-medium mb-0">
											<a
												href="javascript:void(0);"
												data-bs-toggle="offcanvas"
												data-bs-target="#preview"
												>Sophie Headrick</a
											>
											</p>
										</div>
										</div>
									</td>
									<td>7.4 MB</td>
									<td>PDF</td>
									<td>
										<p class="text-title mb-0">Jan 8, 2025</p>
										<span>08:20:13 PM</span>
									</td>
									<td>
										<div class="avatar-list-stacked avatar-group-sm">
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-15.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-16.jpg"
											alt="img"
											/>
										</span>
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center">
										<div class="rating-select me-2">
											<a href="javascript:void(0);"><i class="ti ti-star"></i></a>
										</div>
										<div class="dropdown">
											<a
											href="javascript:void(0);"
											class="d-flex align-items-center justify-content-center"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											>
											<i class="ti ti-dots fs-14"></i>
											</a>
											<ul class="dropdown-menu dropdown-menu-right p-3">
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-trash me-2"></i>Permanent Delete
												</a>
											</li>
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-edit-circle me-2"></i>Restore File
												</a>
											</li>
											</ul>
										</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="form-check form-check-md">
										<input class="form-check-input" type="checkbox" />
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center file-name-icon">
										<a
											href="javascript:void(0);"
											class="avatar avatar-md bg-light"
											data-bs-toggle="offcanvas"
											data-bs-target="#preview"
										>
											<img
											src="@/assets/img/icons/file-03.svg"
											class="img-fluid"
											alt="img"
										/></a>
										<div class="ms-2">
											<p class="text-title fw-medium mb-0">
											<a
												href="javascript:void(0);"
												data-bs-toggle="offcanvas"
												data-bs-target="#preview"
												>Gallery</a
											>
											</p>
										</div>
										</div>
									</td>
									<td>6.1 MB</td>
									<td>Image</td>
									<td>
										<p class="text-title mb-0">Aug 6, 2025</p>
										<span>04:10:12 PM</span>
									</td>
									<td>
										<div class="avatar-list-stacked avatar-group-sm">
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-02.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-03.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-05.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-06.jpg"
											alt="img"
											/>
										</span>
										<a
											class="avatar bg-primary avatar-rounded text-fixed-white"
											href="javascript:void(0);"
										>
											+1
										</a>
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center">
										<div class="rating-select me-2">
											<a href="javascript:void(0);"><i class="ti ti-star"></i></a>
										</div>
										<div class="dropdown">
											<a
											href="javascript:void(0);"
											class="d-flex align-items-center justify-content-center"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											>
											<i class="ti ti-dots fs-14"></i>
											</a>
											<ul class="dropdown-menu dropdown-menu-right p-3">
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-trash me-2"></i>Permanent Delete
												</a>
											</li>
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-edit-circle me-2"></i>Restore File
												</a>
											</li>
											</ul>
										</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="form-check form-check-md">
										<input class="form-check-input" type="checkbox" />
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center file-name-icon">
										<a
											href="javascript:void(0);"
											class="avatar avatar-md bg-light"
											data-bs-toggle="offcanvas"
											data-bs-target="#preview"
										>
											<img
											src="@/assets/img/icons/file-04.svg"
											class="img-fluid"
											alt="img"
										/></a>
										<div class="ms-2">
											<p class="text-title fw-medium mb-0">
											<a
												href="javascript:void(0);"
												data-bs-toggle="offcanvas"
												data-bs-target="#preview"
												>Doris Crowley</a
											>
											</p>
										</div>
										</div>
									</td>
									<td>5.2 MB</td>
									<td>Folder</td>
									<td>
										<p class="text-title mb-0">Jan 6, 2025</p>
										<span>03:40:14 PM</span>
									</td>
									<td>
										<div class="avatar-list-stacked avatar-group-sm">
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-06.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-10.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-15.jpg"
											alt="img"
											/>
										</span>
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center">
										<div class="rating-select me-2">
											<a href="javascript:void(0);"><i class="ti ti-star"></i></a>
										</div>
										<div class="dropdown">
											<a
											href="javascript:void(0);"
											class="d-flex align-items-center justify-content-center"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											>
											<i class="ti ti-dots fs-14"></i>
											</a>
											<ul class="dropdown-menu dropdown-menu-right p-3">
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-trash me-2"></i>Permanent Delete
												</a>
											</li>
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-edit-circle me-2"></i>Restore File
												</a>
											</li>
											</ul>
										</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="form-check form-check-md">
										<input class="form-check-input" type="checkbox" />
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center file-name-icon">
										<a
											href="javascript:void(0);"
											class="avatar avatar-md bg-light"
											data-bs-toggle="offcanvas"
											data-bs-target="#preview"
										>
											<img
											src="@/assets/img/icons/file-05.svg"
											class="img-fluid"
											alt="img"
										/></a>
										<div class="ms-2">
											<p class="text-title fw-medium mb-0">
											<a
												href="javascript:void(0);"
												data-bs-toggle="offcanvas"
												data-bs-target="#preview"
												>Cheat_codez</a
											>
											</p>
										</div>
										</div>
									</td>
									<td>8 MB</td>
									<td>Xml</td>
									<td>
										<p class="text-title mb-0">Oct 12, 2025</p>
										<span>05:00:14 PM</span>
									</td>
									<td>
										<div class="avatar-list-stacked avatar-group-sm">
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-04.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-28.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-14.jpg"
											alt="img"
											/>
										</span>
										<span class="avatar avatar-rounded">
											<img
											class="border border-white"
											src="@/assets/img/profiles/avatar-15.jpg"
											alt="img"
											/>
										</span>
										</div>
									</td>
									<td>
										<div class="d-flex align-items-center">
										<div class="rating-select me-2">
											<a href="javascript:void(0);"><i class="ti ti-star"></i></a>
										</div>
										<div class="dropdown">
											<a
											href="javascript:void(0);"
											class="d-flex align-items-center justify-content-center"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											>
											<i class="ti ti-dots fs-14"></i>
											</a>
											<ul class="dropdown-menu dropdown-menu-right p-3">
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-trash me-2"></i>Permanent Delete
												</a>
											</li>
											<li>
												<a class="dropdown-item rounded-1" href="javascript:void(0);">
												<i class="ti ti-edit-circle me-2"></i>Restore File
												</a>
											</li>
											</ul>
										</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- /Student List -->
				</div>
			</div>
		</div>

		<!-- /Add Customer -->
		<div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
			<p class="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
			<p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
		</div>
	</div>
</template>

<script>
import { notesChart } from "./data";
export default {
  data() {
    return {
      notesChart: notesChart,
	  Allfiles: ["All Files", "Music", "Documents", "Photos"]
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>