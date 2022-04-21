/**
 * Returns a url string based on key provided
 * 
 * @privateRemarks
 * The most simple of the three options presented.
 * Pros: Most performant as it requires no function call and/or recalculation.
 * Clearly shows defined website structure divided into sections making urls
 * easy to view and update.
 * Cons: Not hugely customizable and any parameters will need to be declared
 * inline. No default return for base path making reference a little wordier, i.e.
 * instead of dashboardURLs.profile you would need to use dashboardURLs.profile.main
 * 
 */
export const routes = {
  landingURLs: {
    main: '/',
    about: '/about',
    faqs:{
      client:'faqs?branch=client',
      guest: 'faqs?branch=guest'
    },
    loginRegister: '/login-register'
  },
  dashboardURLs: {
    main: '/dashboard',
    addItem: {
      main:'/dashboard/add-item',
      lost:'/dashboard/add-item/lost',
      found:'/dashboard/add-item/found',
    },
    searchItems: {
      main:'/dashboard/search-items',
      lost:'/dashboard/search-items/lost',
      found:'/dashboard/search-items/found',
    },
    compare: 'dashboard/compare',
    itemMatches: 'dashboard/item-matches',
    reports:'/dashboard/reports',
    settings: '/dashboard/settings',
    messages: '/dashboard/messages',
    profile: {
      main:`/dashboard/profile`,
      edit:'/dashboard/profile/edit'
    },
  }
}

/**
 * Returns a url string based on parameters passed
 * 
 * @privateRemark
 * Pros: Simple one-liner to handle multiple paths, easy to update if we want to inject parameters
 * Cons: Harder to see at a glance what our paths are for every endpoint and does not exhibit any autocomplete/intellisence
 * . We would need to rely more on the React Router defined paths or leave reference here. An alternative
 * fix would be to add some validation, i.e. before return of string:
 * const pageOptions = ['main','addItem','searchItems','compare','itemMatches','reports','settings','messages','profile'];
 *  if (!pageOptions.includes(page)) throw Error
 * You could improve the performance of the above by changing it to a Set or Obj
 * 
 * @example exampleOne
 * dashboardLiterals() returns:
 * '/dashboard
 * @example exampleTwo
 * dashboardLiterals('profile') returns:
 * '/dashboard/profile'
 * @example exampleThree
 * dashboardLiterals('profile','edit') returns:
 * 'dashboard/profile/edit'
 * @example exampleFour
 * Let's say we decided we now need to pass in a query param to one of the paths, this is now easy to do:
 * dashboardLiterals('profile?id=346','edit') returns:
 * 'dashboard/profile?id=346/edit'
 * 
 * @param {string} page -If left empty, will omit the corresponding '/' of the url
 * @param {string} subpage -If left empty, will omit the corresponding '/' of the url 
 * @returns {string} representing the corresponding url path for React Router
 */
const dashboardLiterals = ((page,subpage) => (`/dashboard${page?`/${page}`:''}${subpage?`/${subpage}`:''}`));

/**
 * Returns a url string based on parameters passed
 * 
 * @privateRemark
 * Similar invocation process to the above except the paths are limited to declared keys to limit errors.
 * Also has default for each page with multiple paths which can be updated, not always necessary however
 * 
 * Pros: Easy to review and update each path in one location. Keys clearly show each structure of urls and which
 * path belong under which section.
 * Cons: Harder to inject parameters into specific paths. Could however covert the necessary key into a
 * function so that param's could be passed instead, i.e. with profile:
 *    profile:(param = '') =>({
        main:`/dashboard/profile${param}`,
        edit:'/dashboard/profile${param}/edit'
      }[subpage]),
    Would be invoked with:
      dashboardKeysWithDefault('profile')('?id=346')
 * Or could more easily pass a third param to func (dashboardKeysWithDefault('profile','main','?id=346')), this
 * would be a little more consistent as it wouldn't require a second invocation but can get a little more tedius
 *
 * @example exampleOne
 * dashBoardKeysWithDefault() returns:
 * '/dashboard
 * @example exampleTwo
 * dashBoardKeysWithDefault('profile') returns:
 * '/dashboard/profile'
 * @example exampleThree
 * dashBoardKeysWithDefault('profile','edit') returns:
 * 'dashboard/profile/edit'
 * 
 * @param {string} page -If left empty, will omit the corresponding '/' of the url
 * @param {string} subpage -If left empty, will omit the corresponding '/' of the url 
 * @returns {string} representing the corresponding url path for React Router
 */

 const dashboardKeysWithDefault = ((page='main',subpage="main") => (
  {
    main:'/dashboard',
    addItem: {
      main:'/dashboard/add-item',
      lost:'/dashboard/add-item/lost',
      found:'/dashboard/add-item/found',
    }[subpage],
    searchItems: {
      main:'/dashboard/search-items',
      lost:'/dashboard/search-items/lost',
      found:'/dashboard/search-items/found',
    }[subpage],
    compare: 'dashboard/compare',
    itemMatches: 'dashboard/item-matches',
    reports:'/dashboard/reports',
    profile: {
      main:`/dashboard/profile`,
      edit:'/dashboard/profile/edit'
    }[subpage],
  }[page]
))
