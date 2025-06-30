import {createRouter, createWebHistory} from 'vue-router';
import SignIn from '@/views/pages/pages/authentication/login/sign-in.vue'
import SignIn_2 from '@/views/pages/pages/authentication/login/signin-2.vue'
import SignIn_3 from '@/views/pages/pages/authentication/login/signin-3.vue'
import Email_Verification from '@/views/pages/pages/authentication/email-verification/email-verification.vue'
import Email_Verification_2 from '@/views/pages/pages/authentication/email-verification/email-verification-2.vue'
import Email_Verification_3 from '@/views/pages/pages/authentication/email-verification/email-verification-3.vue'
import Two_Step_Verification from '@/views/pages/pages/authentication/two-step-verification/two-step-verification.vue'
import Two_Step_Verification_2 from '@/views/pages/pages/authentication/two-step-verification/two-step-verification-2.vue'
import Two_Step_Verification_3 from '@/views/pages/pages/authentication/two-step-verification/two-step-verification-3.vue'
import Forgot_Password from '@/views/pages/pages/authentication/forgot-password/forgot-password.vue'
import Forgot_Password_2 from '@/views/pages/pages/authentication/forgot-password/forgot-password-2.vue'
import Forgot_Password_3 from '@/views/pages/pages/authentication/forgot-password/forgot-password-3.vue'
import Reset_Password from '@/views/pages/pages/authentication/reset-password/reset-password.vue'
import Reset_Password_2 from '@/views/pages/pages/authentication/reset-password/reset-password-2.vue'
import Reset_Password_3 from '@/views/pages/pages/authentication/reset-password/reset-password-3.vue'
import Lock_Screen from '@/views/pages/pages/authentication/lock-screen.vue'
import Coming_Soon from '@/views/pages/pages/coming-soon.vue'
import Under_Maintenance from '@/views/pages/pages/under-maintenance.vue'
import Error from '@/views/pages/pages/error/pos-error.vue'
import Error_404 from '@/views/pages/pages/error/error-404.vue'
import Error_500 from '@/views/pages/pages/error/error-500.vue'
import Dashboard from '@/views/pages/dashboard/pos-dashboard.vue'
import AdminDashboard from '@/views/pages/dashboard/admin-dashboard.vue'
import AdminDashboardTwo from '@/views/pages/dashboard/admin-dashboard-two.vue'
import SalesDashboard from '@/views/pages/dashboard/sales-dashboard.vue'
import socialFeed from '@/views/pages/application/social-feed.vue';
import kanbanView from '@/views/pages/application/kanban-view/kanban-view.vue';
import Chat from '@/views/pages/application/chat/chat-index.vue'
import Call from '@/views/pages/application/call/pos-call.vue'
import VideoCall from '@/views/pages/application/call/video-call.vue'
import AudioCall from '@/views/pages/application/call/audio-call.vue'
import CallHistory from '@/views/pages/application/call/call-history.vue'
import Calendar from '@/views/pages/application/pos-calendar.vue'
import Contacts from '@/views/pages/application/contacts-index.vue'
import Register from '@/views/pages/pages/authentication/register/pos-register.vue'
import Register_2 from '@/views/pages/pages/authentication/register/register-2.vue'
import Register_3 from '@/views/pages/pages/authentication/register/register-3.vue'
import Blank_Page from '@/views/pages/pages/blank-page.vue'
import Tables from '@/views/pages/uiinterface/tables/ui-tables'
import Tables_Basic from '@/views/pages/uiinterface/tables/tables-basic.vue'
import Data_Tables from '@/views/pages/uiinterface/tables/data-tables.vue'
import Chartapex from '@/views/pages/uiinterface/charts/apex/chart-apex.vue'
import Chartc3 from '@/views/pages/uiinterface/charts/c3/chart-c3.vue'
import Chartflot from '@/views/pages/uiinterface/charts/flot/chart-flot.vue'
import Chartjs from '@/views/pages/uiinterface/charts/js/chart-js.vue'
import Chartmorris from '@/views/pages/uiinterface/charts/morris/chart-morris.vue'
import Charts from '@/views/pages/uiinterface/charts/ui-charts.vue'
import Forms from '@/views/pages/uiinterface/forms/ui-forms.vue'
import Formbasicinput from '@/views/pages/uiinterface/forms/form-elements/formbasic/formbasic-input.vue'
import Formcheckboxradios from '@/views/pages/uiinterface/forms/form-elements/form-checkbox-radios.vue'
import Formgridgutters from '@/views/pages/uiinterface/forms/form-elements/form-grid-gutters.vue'
import Formselect from '@/views/pages/uiinterface/forms/form-elements/form-select.vue'
import FormInput from '@/views/pages/uiinterface/forms/form-elements/forminput/form-input.vue'
import Formmask from '@/views/pages/uiinterface/forms/form-elements/formmask/formmask.vue'
import Formfileupload from '@/views/pages/uiinterface/forms/form-elements/formfile-upload.vue'
import FormHorizontal from '@/views/pages/uiinterface/forms/layouts/form-horizontal.vue'
import Formvertical from '@/views/pages/uiinterface/forms/layouts/form-vertical.vue'
import Formfloatinglabels from '@/views/pages/uiinterface/forms/layouts/form-floating-labels.vue'
import Formvalidation from '@/views/pages/uiinterface/forms/form-validation.vue'
import Formselect2 from '@/views/pages/uiinterface/forms/form-select2.vue'
import Formwizard from '@/views/pages/uiinterface/forms/form-wizard.vue'
import FormPickers from '@/views/pages/uiinterface/forms/form-pickers.vue';
import Advancedui from '@/views/pages/uiinterface/advancedUI/advanced-ui.vue'
import UI_Ribbon from '@/views/pages/uiinterface/advancedUI/ui-ribbon.vue'
import UI_Clipboard from '@/views/pages/uiinterface/advancedUI/ui-clipboard.vue'
import UI_Drag_Drop from '@/views/pages/uiinterface/advancedUI/ui-drag-drop.vue'
import UI_Text_Editor from '@/views/pages/uiinterface/advancedUI/ui-text-editor.vue'
import UI_Counter from '@/views/pages/uiinterface/advancedUI/ui-counter.vue'
import UI_Scrollbar from '@/views/pages/uiinterface/advancedUI/ui-scrollbar.vue'
import UI_Rating from '@/views/pages/uiinterface/advancedUI/ui-rating.vue'
import UI_Stickynote from '@/views/pages/uiinterface/advancedUI/ui-stickynote.vue'
import UI_Timeline from '@/views/pages/uiinterface/advancedUI/ui-timeline.vue'
import BaseUi from '@/views/pages/uiinterface/baseui/base-ui.vue'
import UI_Alerts from '@/views/pages/uiinterface/baseui/ui-alerts.vue'
import UI_Accordion from '@/views/pages/uiinterface/baseui/ui-accordion.vue'
import UI_Avatar from '@/views/pages/uiinterface/baseui/ui-avatar.vue'
import UI_Badges from '@/views/pages/uiinterface/baseui/ui-badges.vue'
import UI_Borders from '@/views/pages/uiinterface/baseui/ui-borders.vue'
import UI_Buttons from '@/views/pages/uiinterface/baseui/ui-buttons.vue'
import UI_Buttons_group from '@/views/pages/uiinterface/baseui/ui-buttons-group.vue'
import UI_Breadcrumb from '@/views/pages/uiinterface/baseui/ui-breadcrumb.vue'
import UI_Cards from '@/views/pages/uiinterface/baseui/ui-cards.vue'
import UI_Carousel from '@/views/pages/uiinterface/baseui/carousel/ui-carousel.vue'
import UI_Colors from '@/views/pages/uiinterface/baseui/ui-colors.vue'
import UI_Dropdowns from '@/views/pages/uiinterface/baseui/ui-dropdowns.vue'
import UI_Grid from '@/views/pages/uiinterface/baseui/ui-grid.vue'
import UI_Images from '@/views/pages/uiinterface/baseui/ui-images.vue'
import UI_Lightbox from '@/views/pages/uiinterface/baseui/lightbox/ui-lightbox.vue'
import UI_Media from '@/views/pages/uiinterface/baseui/ui-media.vue'
import UI_Modals from '@/views/pages/uiinterface/baseui/ui-modals.vue'
import UI_Offcanvas from '@/views/pages/uiinterface/baseui/ui-offcanvas.vue'
import UI_Pagination from '@/views/pages/uiinterface/baseui/ui-pagination.vue'
import UI_Popovers from '@/views/pages/uiinterface/baseui/ui-popovers.vue'
import UI_Progress from '@/views/pages/uiinterface/baseui/ui-progress.vue'
import UI_Placeholders from '@/views/pages/uiinterface/baseui/ui-placeholders.vue'
import UI_Rangeslider from '@/views/pages/uiinterface/baseui/ui-rangeslider.vue'
import UI_Spinner from '@/views/pages/uiinterface/baseui/ui-spinner.vue'
import UI_Sortable from '@/views/pages/uiinterface/baseui/ui-sortable.vue'
import UI_Sweetalerts from '@/views/pages/uiinterface/baseui/ui-sweetalerts.vue'
import UI_Tooltips from '@/views/pages/uiinterface/baseui/ui-tooltips.vue'
import UI_Typography from '@/views/pages/uiinterface/baseui/ui-typography.vue'
import UI_Video from '@/views/pages/uiinterface/baseui/ui-video.vue'
import Icons from '@/views/pages/uiinterface/icons/ui-icons.vue'
import UI_Iconfontawesome from "@/views/pages/uiinterface/icons/icon-fontawesome.vue";
import UI_Iconfeather from "@/views/pages/uiinterface/icons/icon-feather.vue";
import UI_Iconionic from "@/views/pages/uiinterface/icons/icon-ionic.vue";
import UI_Iconmaterial from "@/views/pages/uiinterface/icons/icon-material.vue";
import UI_Iconpe7 from "@/views/pages/uiinterface/icons/icon-pe7.vue";
import UI_Iconsimpleline from "@/views/pages/uiinterface/icons/icon-simpleline.vue";
import UI_Iconthemify from "@/views/pages/uiinterface/icons/icon-themify.vue";
import UI_Iconweather from "@/views/pages/uiinterface/icons/icon-weather.vue";
import UI_Icontypicon from "@/views/pages/uiinterface/icons/icon-typicon.vue";
import UI_Iconflag from "@/views/pages/uiinterface/icons/icon-flag.vue";
import iconTabler from '@/views/pages/uiinterface/icons/icon-tabler.vue';
import iconBootstrap from '@/views/pages/uiinterface/icons/icon-bootstrap.vue';
import iconRemix from '@/views/pages/uiinterface/icons/icon-remix.vue';
import Ui_Maps from '@/views/pages/uiinterface/maps/ui-maps.vue'
import MapsVector from '@/views/pages/uiinterface/maps/maps-vector.vue';
import MapsLeaflet from '@/views/pages/uiinterface/maps/maps-leaflet.vue';
import Email from '@/views/pages/application/pos-email.vue'
import Todo from '@/views/pages/application/pos-todo.vue'
import Notes from '@/views/pages/application/pos-notes.vue'
import Stock from '@/views/pages/stock/pos-stock.vue'
import ManageStocks from '@/views/pages/stock/manage-stocks.vue'
import StockAdjustment from '@/views/pages/stock/stock-adjustment.vue'
import Inventory from '@/views/pages/inventory/pos-inventory.vue'
import Low_Stocks from '@/views/pages/inventory/low-stocks/low-stocks.vue'
import Category_List from '@/views/pages/inventory/category-list.vue'
import Sub_Categories from '@/views/pages/inventory/sub-categories.vue'
import Brand_List from '@/views/pages/inventory/brand-list.vue'
import Units from '@/views/pages/inventory/pos-units.vue'
import Varriant_Attributes from '@/views/pages/inventory/varriant-attributes.vue'
import Warranty from '@/views/pages/inventory/pos-warranty.vue'
import Barcode from '@/views/pages/inventory/pos-barcode.vue'
import Qrcode from '@/views/pages/inventory/pos-qrcode.vue'
import Product_Details from '@/views/pages/inventory/product-details.vue'
import Product_List from '@/views/pages/inventory/product-list/product-list.vue'
import StockTransfer from '@/views/pages/stock/stock-transfer.vue'
import Purchases from '@/views/pages/purchases/pos-purchases.vue'
import PurchaseList from '@/views/pages/purchases/purchase-list.vue'
import PurchaseOrderReport from '@/views/pages/purchases/purchase-order-report.vue'
import PurchaseReturns from '@/views/pages/purchases/purchase-returns.vue'
import Add_Product from '@/views/pages/inventory/add-product.vue'
import Edit_Product from '@/views/pages/inventory/edit-product.vue'
import Expired_Products from '@/views/pages/inventory/expired-products.vue'
import Finance from '@/views/pages/finance/pos-finance.vue'
import Expenses_List from '@/views/pages/finance/expenses/expenses-list.vue'
import Expenses_Category from '@/views/pages/finance/expenses/expenses-category.vue'
import People from '@/views/pages/people/pos-people.vue'
import Suppliers from '@/views/pages/people/pos-suppliers.vue'
import Store_List from '@/views/pages/people/store-list.vue'
import Warehouse from '@/views/pages/people/pos-warehouse.vue'
import Reports from '@/views/pages/reports/pos-reports.vue'
import Purchase_Report from '@/views/pages/reports/purchase-report.vue'
import Invoice_Report from '@/views/pages/reports/invoice-report.vue'
import Expense_Report from '@/views/pages/reports/expense-report.vue'
import Income_Report from '@/views/pages/reports/income-report.vue'
import Tax_Report from '@/views/pages/reports/tax-report/tax-report.vue'
import AnnualReport from '@/views/pages/reports/annual-report.vue'
import Profit_And_Loss from '@/views/pages/reports/profit-and-loss.vue'
import Users from '@/views/pages/users/pos-users.vue'
import Users_List from '@/views/pages/users/users-list.vue'
import Roles_Permissions from '@/views/pages/users/roles-permissions.vue'
import Permissions from '@/views/pages/users/pos-permissions.vue'
import Delete_Account from '@/views/pages/users/delete-account.vue'
import FileManager from '@/views/pages/application/files/file-manager.vue'
import Profile from '@/views/pages/pages/pos-profile.vue'
import posPricing from '@/views/pages/pages/pos-pricing.vue';
import Sales from '@/views/pages/sales/pos-sales.vue'
import SalesList from '@/views/pages/sales/sales-list.vue'
import onlineOrders from '@/views/pages/sales/online-orders.vue';
import posOrders from '@/views/pages/sales/pos-orders.vue';
import InvoiceDetails from '@/views/pages/sales/invoice-details.vue'
import InvoicePos from '@/views/pages/sales/invoice-pos.vue'
import SalesReturns from '@/views/pages/sales/sales-returns.vue'
import Quotation_List from '@/views/pages/sales/quotation-list.vue'
import HRM from '@/views/pages/hrm/pos-hrm.vue'
import Employees_Grid from '@/views/pages/hrm/employees-grid.vue'
import Employees_List from '@/views/pages/hrm/employees-list.vue'
import Add_Employee from '@/views/pages/hrm/add-employee.vue'
import Edit_Employee from '@/views/pages/hrm/edit-employee.vue'
import Department_Grid from '@/views/pages/hrm/department-grid.vue'
import Department_List from '@/views/pages/hrm/department-list.vue'
import Designation from '@/views/pages/hrm/pos-designation.vue'
import Shift from '@/views/pages/hrm/pos-shift.vue'
import Attendance_Employee from '@/views/pages/hrm/attendance-employee.vue'
import Attendance_Admin from '@/views/pages/hrm/attendance-admin.vue'
import Leaves_Admin from '@/views/pages/hrm/leaves/leaves-admin.vue'
import Leaves_Employee from '@/views/pages/hrm/leaves/leaves-employee.vue'
import Leave_Types from '@/views/pages/hrm/leaves/leave-types.vue'
import Holidays from '@/views/pages/hrm/pos-holidays.vue'
import employeeDetails from '@/views/pages/hrm/employee-details.vue'
import employeeSalary from '@/views/pages/hrm/payroll/employee-salary.vue'
import Payslip from '@/views/pages/hrm/payroll/pay-slip.vue'
import Success from '@/views/pages/pages/pos-success.vue'
import SuccessTwo from '@/views/pages/pages/success-2.vue'
import SuccessThree from '@/views/pages/pages/success-3.vue'
import Activities from '@/views/pages/pos-activities.vue'
import Settings_Index from '@/views/pages/settings/general-settings/settings-index.vue'
import General_Settings from '@/views/pages/settings/general-settings/general-settings.vue'
import Security_Settings from '@/views/pages/settings/general-settings/security-settings.vue'
import Notification from '@/views/pages/settings/general-settings/pos-notification.vue'
import Connected_Apps from '@/views/pages/settings/general-settings/connected-apps.vue'
import System_Settings from '@/views/pages/settings/website-settings/system-settings.vue'
import Website_Settings from '@/views/pages/settings/website-settings/website-settings.vue'
import Company_Settings from '@/views/pages/settings/website-settings/company-settings.vue'
import Localization_Settings from '@/views/pages/settings/website-settings/localization-settings.vue'
import Prefixes from '@/views/pages/settings/website-settings/pos-prefixes.vue'
import Preference from '@/views/pages/settings/website-settings/pos-preference.vue'
import Appearance from '@/views/pages/settings/website-settings/pos-appearance.vue'
import Social_Authentication from '@/views/pages/settings/website-settings/social-authentication.vue'
import Language_Settings from '@/views/pages/settings/website-settings/language-settings.vue'
import Language_Settings_Web from '@/views/pages/settings/website-settings/language-settings-web.vue'
import App_Settings from '@/views/pages/settings/app-settings/app-settings.vue'
import Invoice_Settings from '@/views/pages/settings/app-settings/invoice-settings.vue'
import Invoice_Templates from '@/views/pages/settings/app-settings/invoice-templates.vue'
import posSignatures from '@/views/pages/settings/app-settings/pos-signatures.vue';
import Printer_Settings from '@/views/pages/settings/app-settings/printer-settings.vue'
import Pos_Settings from '@/views/pages/settings/app-settings/pos-settings.vue'
import Custom_Fields from '@/views/pages/settings/app-settings/custom-fields.vue'
import Settings_System from '@/views/pages/settings/system-settings/settings-system.vue'
import Email_Settings from '@/views/pages/settings/system-settings/email-settings.vue'
import Email_Templates from '@/views/pages/settings/system-settings/email-templates.vue'
import Sms_settings from '@/views/pages/settings/system-settings/sms-settings.vue'
import sms_templates from '@/views/pages/settings/system-settings/sms-templates.vue'
import Otp_Settings from '@/views/pages/settings/system-settings/otp-settings.vue'
import Gdpr_Settings from '@/views/pages/settings/system-settings/gdpr-settings.vue'
import Financial_Settings from '@/views/pages/settings/financal-settings/financial-settings.vue'
import Payment_Gateway_Settings from '@/views/pages/settings/financal-settings/payment-gateway-settings.vue'
import Bank_Settings_Grid from '@/views/pages/settings/financal-settings/bank-settings-grid.vue'
import Bank_Settings_List from '@/views/pages/settings/financal-settings/bank-settings-list.vue'
import Tax_Rates from '@/views/pages/settings/financal-settings/tax-rates.vue'
import Currency_Settings from '@/views/pages/settings/financal-settings/currency-settings.vue'
import Other_Settings from '@/views/pages/settings/other-settings/other-settings.vue'
import Storage_Settings from '@/views/pages/settings/other-settings/storage-settings.vue'
import Ban_Ip_Address from '@/views/pages/settings/other-settings/ban-ip-address.vue'
// import POS from '@/views/pages/sales/sales-pos.vue'
import Coupons from '@/views/pages/promo/pos-coupons.vue'
import Pages from '@/views/pages/pages/pos-pages.vue'
import Application from '@/views/pages/application/pos-application.vue'
import Leaves from '@/views/pages/hrm/leaves/pos-leaves.vue'
import Payroll from '@/views/pages/hrm/payroll/pay-roll.vue'

import superAdmin from '@/views/pages/super-admin/super-admin.vue';
import SuperDashboard from '@/views/pages/super-admin/dashboard/super-dashboard.vue';
import Companies from '@/views/pages/super-admin/companies/companies.vue';
import SubscriptionList from '@/views/pages/super-admin/subscription/subscription-list.vue';
import PackagesList from '@/views/pages/super-admin/packages/packages-list.vue';
import DomainList from '@/views/pages/super-admin/domain/domain-list.vue';
import PurchaseTransaction from '@/views/pages/super-admin/purchase/purchase-transaction.vue';
import PosContent from '@/views/pages/content/pos-content.vue';
import posFaq from '@/views/pages/content/pos-faq.vue';
import posTestimonials from '@/views/pages/content/pos-testimonials.vue';
import PosCountries from '@/views/pages/content/locations/pos-countries.vue';
import PosStates from '@/views/pages/content/locations/pos-states.vue';
import PosCities from '@/views/pages/content/locations/pos-cities.vue';
import PosLocations from '@/views/pages/content/locations/pos-locations.vue';
import BlogComments from '@/views/pages/content/blogs/blog-comments.vue';
import PosBlogs from '@/views/pages/content/blogs/pos-blogs.vue';
import blogCategories from '@/views/pages/content/blogs/blog-categories.vue';
import blogTag from '@/views/pages/content/blogs/blog-tag.vue';
import PosPages from '@/views/pages/content/pages/pos-pages.vue';
import PageIndex from '@/views/pages/content/pages/page-index.vue';
import SalestaxReport from '@/views/pages/reports/tax-report/salestax-report.vue';
import ProductReport from '@/views/pages/reports/product-report/product-report.vue';
import PosProductreport from '@/views/pages/reports/product-report/pos-productreport.vue';
import ProductExpiryReport from '@/views/pages/reports/product-report/product-expiry-report.vue';
import Productquantityalert from '@/views/pages/reports/product-report/product-quantity-alert.vue';
import Poscustomerreport from '@/views/pages/reports/customer-report/pos-customerreport.vue';
import customerReport from '@/views/pages/reports/customer-report/customer-report.vue';
import customerdueReport from '@/views/pages/reports/customer-report/customer-due-report.vue';
import posSupplierreport from '@/views/pages/reports/supplier-report/pos-supplierreport.vue';
import Supplier_Report from '@/views/pages/reports/supplier-report/supplier-report.vue'
import SupplierDue_Report from '@/views/pages/reports/supplier-report/supplier-due-report.vue'
import posInventoryreport from '@/views/pages/reports/inventory-report/pos-inventoryreport.vue';
import Inventory_Report from '@/views/pages/reports/inventory-report/inventory-report.vue'
import Stockhistory from '@/views/pages/reports/inventory-report/stock-history.vue'
import soldStock from '@/views/pages/reports/inventory-report/sold-stock..vue';
import posSalesreport from '@/views/pages/reports/sales-report/pos-salesreport.vue';
import Sales_Report from '@/views/pages/reports/sales-report/sales-report.vue'
import bestSellers from '@/views/pages/reports/sales-report/best-sellers.vue';
import EmailReply from '@/views/pages/application/email-reply.vue';
import TodoList from '@/views/pages/application/todo-list.vue';
import EcommerceIndex from '@/views/pages/application/ecommerce/ecommerce-index.vue';
import ProductsIndex from '@/views/pages/application/ecommerce/products/products-index.vue';
import AddProduct from '@/views/pages/application/ecommerce/products/add-product.vue';
import EditProduct from '@/views/pages/application/ecommerce/products/edit-product.vue';
import OrdersList from '@/views/pages/application/ecommerce/orders-list.vue';
import CustomersList from '@/views/pages/application/ecommerce/customers-list.vue';
import CartList from '@/views/pages/application/ecommerce/cart-list.vue';
import CheckoutIndex from '@/views/pages/application/ecommerce/checkout-index.vue';
import WishlistIndex from '@/views/pages/application/ecommerce/wishlist-index.vue';
import ReviewsList from '@/views/pages/application/ecommerce/reviews-list.vue';
import SearchList from '@/views/pages/application/search-list.vue';
import posIndex from '@/views/pages/pos/pos-index.vue';
import pos5 from '@/views/pages/pos/pos-5/pos-5.vue';
import pos4 from '@/views/pages/pos/pos-4/pos-4.vue';
import PosOne from '@/views/pages/pos/pos-1/pos-one.vue';
import PosTwo from '@/views/pages/pos/pos-2/pos-two.vue';
import PosThree from '@/views/pages/pos/pos-3/pos-three.vue';
import LayoutHorizontal from '@/views/pages/layouts/layout-horizontal.vue';
import Layouts from '@/views/pages/layouts/layouts.vue';
import LayoutDetached from '@/views/pages/layouts/layout-detached.vue';
import LayoutModern from '@/views/pages/layouts/layout-modern.vue';
import LayoutTwoColumn from '@/views/pages/layouts/layout-two-column.vue';
import LayoutHovered from '@/views/pages/layouts/layout-hovered.vue';
import LayoutBoxed from '@/views/pages/layouts/layout-boxed.vue';
import LayoutDark from '@/views/pages/layouts/layout-dark.vue';
import GiftCards from '@/views/pages/promo/gift-cards.vue';
import DiscountIndex from '@/views/pages/promo/discount/discount-index.vue';
import DiscountPlan from '@/views/pages/promo/discount/discount-plan.vue';
import DiscountList from '@/views/pages/promo/discount/discount-list.vue';
import ExpensesIndex from '@/views/pages/finance/expenses/expenses-index.vue';
import IncomeIndex from '@/views/pages/finance/income/income-index.vue';
import IncomeList from '@/views/pages/finance/income/income-list.vue';
import IncomeCategory from '@/views/pages/finance/income/income-category.vue';
import AccountList from '@/views/pages/finance/account-list.vue';
import MoneyTransfer from '@/views/pages/finance/money-transfer.vue';
import BalanceSheet from '@/views/pages/finance/balance-sheet.vue';
import TrialBalance from '@/views/pages/finance/trial-balance.vue';
import CashFlow from '@/views/pages/finance/cash-flow.vue';
import AccountStatement from '@/views/pages/finance/account-statement.vue';
import BillersList from '@/views/pages/people/billers-list.vue';
import LayoutRtl from '@/views/pages/layouts/layout-rtl.vue';
import AllBlog from '@/views/pages/content/blogs/all-blog.vue';
import BlogDetails from '@/views/pages/content/blogs/blog-details.vue';

const routes = [
  {
    path: '/',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: Forgot_Password
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: Reset_Password
  },
  {
    path: '/email-verification',
    name: 'email-verification',
    component: Email_Verification
  },
  {
    path: '/two-step-verification',
    name: 'two-step-verification',
    component: Two_Step_Verification
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/success-2',
    name: 'success-2',
    component: SuccessTwo
  },
  {
    path: '/success-3',
    name: 'success-3',
    component: SuccessThree
  },
  {
    path: '/activities',
    name: 'activities',
    component: Activities
  },
  {
    path: '/coupons',
    name: 'coupons',
    component: Coupons
  },
  {
    path: '/gift-cards',
    name: 'gift-cards',
    component: GiftCards
  },
  {
    path: '/application',
    component: Application,
    children: [
      { path: '', redirect: '/application/chat' },
      { path: "chat", component: Chat },
      { path: "calendar", component: Calendar },
      { path: "email", component: Email },
      { path: "email-reply", component: EmailReply },
      { path: "todo", component: Todo },
      { path: "todo-list", component: TodoList },
      { path: "notes", component: Notes },
      { path: "file-manager", component: FileManager },      
      { path: "social-feed", component: socialFeed },
      { path: "projects", component: kanbanView },
      { path: "contacts", component: Contacts },
      { path: "search-list", component: SearchList },
    ]
  },
  {
    path: '/settings',
    component: Settings_Index,
    children: [
      { path: '', redirect: '/settings/general-settings' },
      { path: "general-settings", component: General_Settings },
      { path: "security-settings", component: Security_Settings },
      { path: "notification", component: Notification },
      { path: "connected-apps", component: Connected_Apps },
    ]
  },
  {
    path: '/website-settings',
    component: Website_Settings,
    children: [
      { path: '', redirect: '/website-settings/system-settings' },
      { path: "company-settings", component: Company_Settings },
      { path: "localization-settings", component: Localization_Settings },
      { path: "system-settings", component: System_Settings },
      { path: "prefixes", component: Prefixes },
      { path: "preference", component: Preference },
      { path: "appearance", component: Appearance },
      { path: "social-authentication", component: Social_Authentication },
      { path: "language-settings", component: Language_Settings },
      { path: "language-settings-web", component: Language_Settings_Web },
    ]
  },
  {
    path: '/app-settings',
    component: App_Settings,
    children: [
      { path: '', redirect: '/app-settings/invoice-settings' },
      { path: "invoice-settings", component: Invoice_Settings },
      { path: "invoice-templates", component: Invoice_Templates },
      { path: "signatures", component: posSignatures },
      { path: "printer-settings", component: Printer_Settings },
      { path: "custom-fields", component: Custom_Fields },
      { path: "pos-settings", component: Pos_Settings },
    ]
  },
  {
    path: '/system-settings',
    component: Settings_System,
    children: [
      { path: '', redirect: '/system-settings/email-settings' },
      { path: "email-settings", component: Email_Settings },
      { path: "email-templates", component: Email_Templates },
      { path: "sms-settings", component: Sms_settings },
      { path: "sms-templates", component: sms_templates },
      { path: "otp-settings", component: Otp_Settings },
      { path: "gdpr-settings", component: Gdpr_Settings },
    ]
  },
  {
    path: '/financial-settings',
    component: Financial_Settings,
    children: [
      { path: '', redirect: '/financial-settings/payment-gateway-settings' },
      { path: "payment-gateway-settings", component: Payment_Gateway_Settings },
      { path: "bank-settings-grid", component: Bank_Settings_Grid },
      { path: "bank-settings-list", component: Bank_Settings_List },
      { path: "tax-rates", component: Tax_Rates },
      { path: "currency-settings", component: Currency_Settings },
    ]
  },
  {
    path: '/other-settings',
    component: Other_Settings,
    children: [
      { path: '', redirect: '/other-settings/storage-settings' },
      { path: "storage-settings", component: Storage_Settings },
      { path: "ban-ip-address", component: Ban_Ip_Address },
    ]
  },
  {
    path: '/pages',
    component: Pages,
    children: [
      { path: '', redirect: '/pages/profile' },
      { path: "profile", component: Profile },
      { path: "pricing", component: posPricing },
      { path: "coming-soon", component: Coming_Soon },
      { path: "under-maintenance", component: Under_Maintenance },
      { path: "blank-page", component: Blank_Page },
    ]
  },
  {
    path: '/error',
    component: Error,
    children: [
      { path: '', redirect: '/error/error-404' },
      { path: "error-404", component: Error_404 },
      { path: "error-500", component: Error_500 },
    ]
  },
  {
    path: '/authentication',
    component: Pages,
    children: [
      { path: '', redirect: '/authentication/signin-2' },
      { path: "signin-2", component: SignIn_2 },
      { path: "signin-3", component: SignIn_3 },
      { path: "register-2", component: Register_2 },
      { path: "register-3", component: Register_3 },
      { path: "forgot-password-2", component: Forgot_Password_2 },
      { path: "forgot-password-3", component: Forgot_Password_3 },
      { path: "reset-password-2", component: Reset_Password_2 },
      { path: "reset-password-3", component: Reset_Password_3 },
      { path: "email-verification-2", component: Email_Verification_2 },
      { path: "email-verification-3", component: Email_Verification_3 },
      { path: "two-step-verification-2", component: Two_Step_Verification_2 },
      { path: "two-step-verification-3", component: Two_Step_Verification_3 },
      { path: "lock-screen", component: Lock_Screen },
    ]
  },
  {
    path: '/inventory',
    component: Inventory,
    children: [
      { path: '', redirect: '/inventory/product-list' },
      { path: "product-list", component: Product_List },
      { path: "add-product", component: Add_Product },
      { path: "edit-product", component: Edit_Product },
      { path: "expired-products", component: Expired_Products },
      { path: "low-stocks", component: Low_Stocks },
      { path: "category-list", component: Category_List },
      { path: "sub-categories", component: Sub_Categories },
      { path: "brand-list", component: Brand_List },
      { path: "units", component: Units },
      { path: "varriant-attributes", component: Varriant_Attributes },
      { path: "warranty", component: Warranty },
      { path: "barcode", component: Barcode },
      { path: "qrcode", component: Qrcode },
      { path: "product-details", component: Product_Details },
    ]
  },
  {
    path: '/expenses',
    component: ExpensesIndex,
    children: [
      { path: '', redirect: '/expenses/expenses-list' },
      { path: "expenses-list", component: Expenses_List },
      { path: "expenses-category", component: Expenses_Category },
    ]
  },
  {
    path: '/income',
    component: IncomeIndex,
    children: [
      { path: '', redirect: '/income/income-list' },
      { path: "income-list", component: IncomeList },
      { path: "income-category", component: IncomeCategory },
    ]
  },
  {
    path: '/finance',
    component: Finance,
    children: [
      { path: '', redirect: '/finance/account-list' },
      { path: "account-list", component: AccountList },
      { path: "money-transfer", component: MoneyTransfer },
      { path: "balance-sheet", component: BalanceSheet },
      { path: "trial-balance", component: TrialBalance },
      { path: "cash-flow", component: CashFlow },
      { path: "account-statement", component: AccountStatement },
    ]
  },
  {
    path: '/users',
    component: Users,
    children: [
      { path: '', redirect: '/users/users-list' },
      { path: "users-list", component: Users_List },
      { path: "roles-permissions", component: Roles_Permissions },
      { path: "permissions", component: Permissions },
      { path: "delete-account", component: Delete_Account },
    ]
  },
  {
    path: '/people',
    component: People,
    children: [
      { path: '', redirect: '/people/suppliers' },
      { path: "suppliers", component: Suppliers },
      { path: "store-list", component: Store_List },
      { path: "warehouse", component: Warehouse },
      { path: "billers", component: BillersList },
    ]
  },
  {
    path: '/content',
    component: PosContent,
    children: [
      { path: '', redirect: '/content/testimonials' },
      { path: "faq", component: posFaq },
      { path: "testimonials", component: posTestimonials },
    ]
  },
  {
    path: '/location',
    component: PosLocations,
    children: [
      { path: '', redirect: '/location/countries' },
      { path: "countries", component: PosCountries },
      { path: "states", component: PosStates },
      { path: "cities", component: PosCities },
    ]
  },
  {
    path: '/blog',
    component: PosBlogs,
    children: [
      { path: '', redirect: '/blog/blog-comments' },
      { path: "blog-comments", component: BlogComments },
      { path: "blog-categories", component: blogCategories },
      { path: "blog-tag", component: blogTag },
      { path: "all-blog", component: AllBlog },
      { path: "blog-details", component: BlogDetails },
    ]
  },
  {
    path: '/page',
    component: PageIndex,
    children: [
      { path: '', redirect: '/page/pages' },
      { path: "pages", component: PosPages },
    ]
  },
  {
    path: '/reports',
    component: Reports,
    children: [
      { path: '', redirect: '/reports/purchase-report' },
      { path: "purchase-report", component: Purchase_Report },
      { path: "invoice-report", component:Invoice_Report },
      { path: "expense-report", component:Expense_Report },
      { path: "income-report", component:Income_Report },
      { path: "tax-report", component:Tax_Report },
      { path: "annual-report", component:AnnualReport },
      { path: "sales-tax", component:SalestaxReport },
      { path: "profit-and-loss", component:Profit_And_Loss },
    ]
  },
  {
    path: '/product-report',
    component: PosProductreport,
    children: [
      { path: '', redirect: '/product-report/product-report' },
      { path: "product-report", component: ProductReport },
      { path: "product-expiry-report", component: ProductExpiryReport },
      { path: "product-quantity-alert", component: Productquantityalert }
    ]
  },
  {
    path: '/customer-report',
    component: Poscustomerreport,
    children: [
      { path: '', redirect: '/customer-report/customer-report' },
      { path: "customer-report", component: customerReport },
      { path: "customer-due-report", component: customerdueReport },
    ]
  },
  {
    path: '/supplier-report',
    component: posSupplierreport,
    children: [
      { path: '', redirect: '/supplier-report/supplier-report' },
      { path: "supplier-report", component: Supplier_Report },
      { path: "supplier-due-report", component: SupplierDue_Report },
    ]
  },
  {
    path: '/inventory-report',
    component: posInventoryreport,
    children: [
      { path: '', redirect: '/inventory-report/inventory-report' },
      { path: "inventory-report", component: Inventory_Report },
      { path: "stock-history", component: Stockhistory },
      { path: "sold-stock", component: soldStock },
    ]
  },
  {
    path: '/sales-report',
    component: posSalesreport,
    children: [
      { path: '', redirect: '/sales-report/sales-report' },
      { path: "sales-report", component: Sales_Report },
      { path: "best-sellers", component: bestSellers },
    ]
  },
  {
    path: '/icons',
    component: Icons,
    children: [
      { path: '', redirect: '/icons/icon-fontawesome' },
      { path: "icon-fontawesome", component: UI_Iconfontawesome },
      { path: "icon-feather", component: UI_Iconfeather },
      { path: "icon-ionic", component: UI_Iconionic },
      { path: "icon-material", component: UI_Iconmaterial },
      { path: "icon-pe7", component: UI_Iconpe7 },
      { path: "icon-simpleline", component: UI_Iconsimpleline },
      { path: "icon-themify", component: UI_Iconthemify },
      { path: "icon-weather", component: UI_Iconweather },
      { path: "icon-typicon", component: UI_Icontypicon },
      { path: "icon-flag", component: UI_Iconflag },
      { path: "icon-tabler", component: iconTabler },
      { path: "icon-bootstrap", component: iconBootstrap },
      { path: "icon-remix", component: iconRemix },
    ]
  },
  {
    path: '/baseui',
    component: BaseUi,
    children: [
      { path: '', redirect: '/baseui/ui-alerts' },
      { path: "ui-alerts", component: UI_Alerts },
      { path: "ui-accordion", component: UI_Accordion },
      { path: "ui-avatar", component: UI_Avatar },
      { path: "ui-badges", component: UI_Badges },
      { path: "ui-borders", component: UI_Borders },
      { path: "ui-buttons", component: UI_Buttons },
      { path: "ui-buttons-group", component: UI_Buttons_group },
      { path: "ui-breadcrumb", component: UI_Breadcrumb },
      { path: "ui-cards", component: UI_Cards },
      { path: "ui-carousel", component: UI_Carousel },
      { path: "ui-colors", component: UI_Colors },
      { path: "ui-dropdowns", component: UI_Dropdowns },
      { path: "ui-grid", component: UI_Grid },
      { path: "ui-images", component: UI_Images },
      { path: "ui-lightbox", component: UI_Lightbox},
      { path: "ui-media", component: UI_Media},
      { path: "ui-modals", component: UI_Modals},
      { path: "ui-offcanvas", component: UI_Offcanvas},
      { path: "ui-pagination", component: UI_Pagination},
      { path: "ui-popovers", component: UI_Popovers},
      { path: "ui-progress", component: UI_Progress},
      { path: "ui-placeholders", component: UI_Placeholders},
      { path: "ui-rangeslider", component: UI_Rangeslider},
      { path: "ui-spinner", component: UI_Spinner},
      { path: "ui-sortable", component: UI_Sortable},
      { path: "ui-sweetalerts", component: UI_Sweetalerts},
      { path: "ui-tooltips", component: UI_Tooltips},
      { path: "ui-typography", component: UI_Typography},
      { path: "ui-video", component: UI_Video},
    ]
  },
  {
    path: '/advancedui',
    component: Advancedui,
    children: [
      { path: '', redirect: '/advancedui/ui-ribbon' },
      { path: "ui-ribbon", component: UI_Ribbon },
      { path: "ui-clipboard", component: UI_Clipboard },
      { path: "ui-drag-drop", component: UI_Drag_Drop },
      { path: "ui-text-editor", component: UI_Text_Editor },
      { path: "ui-counter", component: UI_Counter },
      { path: "ui-scrollbar", component: UI_Scrollbar },
      { path: "ui-rating", component: UI_Rating },
      { path: "ui-stickynote", component: UI_Stickynote },
      { path: "ui-timeline", component: UI_Timeline }
    ]
  },
  {
    path: '/tables',
    component: Tables,
    children: [
      { path: '', redirect: '/tables/data-tables' },
      { path: "data-tables", component: Data_Tables },
      { path: "tables-basic", component: Tables_Basic }
    ]
  },
  {
    path: '/charts',
    component: Charts,
    children: [
      { path: '', redirect: '/charts/chart-apex' },
      { path: "chart-apex", component: Chartapex },
      { path: "chart-c3", component: Chartc3 },
      { path: "chart-flot", component: Chartflot },
      { path: "chart-js", component: Chartjs },
      { path: "chart-morris", component: Chartmorris }
    ]
  },
  {
    path: '/forms',
    component: Forms,
    children: [
      { path: '', redirect: '/forms/form-basic-inputs' },
      { path: "form-basic-inputs", component: Formbasicinput },
      { path: "form-checkbox-radios", component: Formcheckboxradios },
      { path: "form-grid-gutters", component: Formgridgutters },
      { path: "form-input-groups", component: FormInput },
      { path: "form-select", component: Formselect },
      { path: "form-mask", component: Formmask },
      { path: "form-fileupload", component: Formfileupload },
      { path: "form-horizontal", component: FormHorizontal },
      { path: "form-vertical", component: Formvertical },
      { path: "form-floating-labels", component: Formfloatinglabels },
      { path: "form-validation", component: Formvalidation },
      { path: "form-select2", component: Formselect2 },
      { path: "form-wizard", component: Formwizard },
      { path: "form-pickers", component: FormPickers },
    ]
  },
  {
    path: '/maps',
    component: Ui_Maps,
    children: [
      { path: '', redirect: '/maps/maps-vector' },
      { path: "maps-vector", component: MapsVector },
      { path: "maps-leaflet", component: MapsLeaflet },
    ]
  },
  {
    path: '/pos',
    component: posIndex,
    children: [
      { path: '', redirect: '/pos/pos-1' },
      { path: "pos-1", component: PosOne },
      { path: "pos-2", component: PosTwo },
      { path: "pos-3", component: PosThree },
      { path: "pos-5", component: pos5 },
      { path: "pos-4", component: pos4 },
    ]
  },
  {
    path: '/call',
    component: Call,
    children: [
      { path: '', redirect: '/call/video-call' },
      { path: "video-call", component: VideoCall },
      { path: "audio-call", component: AudioCall },
      { path: "call-history", component: CallHistory },
    ]
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: '', redirect: '/dashboard/admin-dashboard' },
      { path: "admin-dashboard", component: AdminDashboard },
      { path: "admin-dashboard-2", component: AdminDashboardTwo },
      { path: "sales-dashboard", component: SalesDashboard },
    ]
  },
  {
    path: '/stock',
    component: Stock,
    children: [
      { path: '', redirect: '/stock/manage-stocks' },
      { path: "manage-stocks", component: ManageStocks },
      { path: "stock-adjustment", component: StockAdjustment },
      { path: "stock-transfer", component: StockTransfer },
    ]
  },
  {
    path: '/leaves',
    component: Leaves,
    children: [
      { path: '', redirect: '/leaves/leaves-admin' },
      { path: "leaves-admin", component: Leaves_Admin },
      { path: "leaves-employee", component: Leaves_Employee },
      { path: "leave-types", component: Leave_Types },
    ]
  },
  {
    path: '/payroll',
    component: Payroll,
    children: [
      { path: '', redirect: '/payroll/employee-salary' },
      { path: "employee-salary", component: employeeSalary },
      { path: "payslip", component: Payslip },
    ]
  },
  {
    path: '/hrm',
    component: HRM,
    children: [
      { path: '', redirect: '/hrm/employees-grid' },
      { path: "employees-grid", component: Employees_Grid },
      { path: "employees-list", component: Employees_List },
      { path: "employee-details", component: employeeDetails },
      { path: "add-employee", component: Add_Employee },
      { path: "edit-employee", component: Edit_Employee },
      { path: "department-grid", component: Department_Grid },
      { path: "department-list", component: Department_List },
      { path: "designation", component: Designation },
      { path: "shift", component: Shift },
      { path: "attendance-employee", component: Attendance_Employee },
      { path: "attendance-admin", component: Attendance_Admin },
      { path: "holidays", component: Holidays },
    ]
  },

  {
    path: '/purchases',
    component: Purchases,
    children: [
      { path: '', redirect: '/purchases/purchase-list' },
      { path: "purchase-list", component: PurchaseList },
      { path: "purchase-order-report", component: PurchaseOrderReport },
      { path: "purchase-returns", component: PurchaseReturns },
    ]
  },
  {
    path: '/sales',
    component: Sales,
    children: [
      { path: '', redirect: '/sales/sales-list' },
      { path: "sales-list", component: SalesList },
      { path: "online-orders", component: onlineOrders },
      { path: "pos-orders", component: posOrders },
      { path: "invoice", component: InvoicePos },
      { path: "invoice-details", component: InvoiceDetails },
      { path: "sales-returns", component: SalesReturns },
      { path: "quotation-list", component: Quotation_List },
    ]
  },
  {
    path: '/super-admin',
    component: superAdmin,
    children: [
      { path: '', redirect: '/super-admin/dashboard' },
      { path: "dashboard", component: SuperDashboard },
      { path: "companies", component: Companies },
      { path: "subscription", component: SubscriptionList },
      { path: "packages", component: PackagesList },
      { path: "domain", component: DomainList },
      { path: "purchase-transaction", component: PurchaseTransaction },
    ]
  },
  {
    path: '/ecommerce',
    component: EcommerceIndex,
    children: [
      { path: '', redirect: '/ecommerce/products' },
      { path: "products", component: ProductsIndex },
      { path: "add-product", component: AddProduct },
      { path: "edit-product", component: EditProduct },
      { path: "orders", component: OrdersList },
      { path: "customers", component: CustomersList },
      { path: "cart", component: CartList },
      { path: "checkout", component: CheckoutIndex },
      { path: "wishlist", component: WishlistIndex },
      { path: "reviews", component: ReviewsList },
    ]
  },
  {
    path: '/layouts',
    component: Layouts,
    children: [
      { path: '', redirect: '/layouts/layout-horizontal' },
      { path: "layout-horizontal", component: LayoutHorizontal },
      { path: "layout-detached", component: LayoutDetached },
      { path: "layout-modern", component: LayoutModern },
      { path: "layout-two-column", component: LayoutTwoColumn },
      { path: "layout-hovered", component: LayoutHovered },
      { path: "layout-boxed", component: LayoutBoxed },
      { path: "layout-dark", component: LayoutDark },
      { path: "layout-rtl", component: LayoutRtl },
    ]
  },
  {
    path: '/discount',
    component: DiscountIndex,
    children: [
      { path: '', redirect: '/discount/discount-plan' },
      { path: "discount-plan", component: DiscountPlan },
      { path: "discount-list", component: DiscountList },
    ]
  },
];

export const router = createRouter({
  history: createWebHistory('/vue/template/'),
    linkActiveClass: 'active',
    routes,
}); 

router.beforeEach((to, from, next) => {
// Scroll to the top of the page
window.scrollTo({ top: 0, behavior: 'smooth' });
// Continue with the navigation
next();
});
