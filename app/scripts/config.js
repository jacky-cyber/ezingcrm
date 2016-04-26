/**
 * HOMER - Responsive Admin Theme
 * version 1.8
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider

        // Dashboard - Main page
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {
                pageTitle: '工作台',
            }
        })
        // Common views
        .state('common', {
            abstract: true,
            url: "/common",
            templateUrl: "views/common/content_empty.html",
            data: {
                pageTitle: 'Common'
            }
        })
        .state('common.login', {
            url: "/login",
            templateUrl: "views/common_app/login.html",
            data: {
                pageTitle: '登录',
                specialClass: 'blank'
            }
        })
        .state('contact', {
            abstract: true,
            url: "/contact",
            templateUrl: "views/common/content_empty.html",
            data: {
                pageTitle: 'contact'
            }
        })
        .state('contact.new', {
            url: "/contactnew",
            templateUrl: "views/contact/contact_new.html",
            data: {
                pageTitle: '添加联系人',
                specialClass: 'blank'
            }
        })
        .state('contact.list', {
            url: "/contacts",
            templateUrl: "views/contact/contact_list.html",
            data: {
                pageTitle: '我的联系人',
                specialClass: 'blank'
            }
        })
        .state('setting', {
            abstract: true,
            url: "/setting",
            templateUrl: "views/common/content_empty.html",
            data: {
                pageTitle: 'setting'
            }
        })
        .state('setting.general', {
            url: "/settinggeneral",
            templateUrl: "views/setting/setting_general.html",
            data: {
                pageTitle: '设置|通用',
                specialClass: 'blank'
            }
        })
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });