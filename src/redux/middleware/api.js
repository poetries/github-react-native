import {normalize, schema} from 'normalizr'
import {camelizeKeys, decamelizeKeys} from 'humps'
import {MSG_SHOW, MSG_INIT,COMMON_FETCHING,COMMON_OVER} from '../actions/'
import axios from 'axios'
import   appConfig from '../../constants/config'
import {Toast} from 'antd-mobile-rn';

export const API_ROOT =  'https://'+appConfig.apiDomain

axios.defaults.headers.common = ['token'];

const callApi = (endpoint, schema, query = null, isDownload = false) => {
    let fullUrl = endpoint
    const {method = 'get', data , headers = {},withCredentials=true} = query || {}

    if (method.toLowerCase() === 'get') {
        const q = decamelizeKeys(data||{})
        if (q && q.query_optional) {
            Object.keys(q.query_optional).forEach(v => {
                q.query_optional[v] = JSON.parse(q.query_optional[v])
            })

        }
        const ps = Object.keys(q).map(v => {
            if(v && q[v]){
                if (v === 'page_size' || v === 'current_page') {
                        return `${v}=${q[v]}`
                    }
                return ''//`${v}=${q[v]}`
            }
            else
                return ''
        }).filter(v => v && v.length)
        if (fullUrl.indexOf('?') === -1) {
            fullUrl += '?'
        } else {
            // fullUrl += '&'
        }
        // fullUrl += ps.join('&') + '&q=' + encodeURIComponent(JSON.stringify(q))
        fullUrl += ps.join('&') 
    }

    const config = {
        method,
        // withCredentials,
        baseURL: API_ROOT,
        url: fullUrl,
        data,
        transformRequest: [
            data => {
                if (data && (data.toString() !== '[object FormData]')) {
                    return JSON.stringify(decamelizeKeys(data))
                }
                return data
            }
        ],
        headers
    }
  
    method.toLowerCase() === 'post' && (delete config.headers)
    
    return fetch(API_ROOT+fullUrl,data)
              .then(response=>response.json())
              .then(response=>Promise.resolve(response))

    return axios(config).then(
        res => {
            Toast.info(API_ROOT + fullUrl)
            if(res.status === 204){
                return {}
            }
            const json = camelizeKeys(res.data)

            if (json.code !== 0) {
                return Promise.reject({data: json})
            }
            const camelizedJson = camelizeKeys(json.data)
            if (typeof schema === 'object') {
                return Object.assign({},
                    normalize(camelizedJson, schema)
                )
            } else if (typeof schema === 'string') {
                return Object.assign({}, {
                    [schema]: camelizedJson
                }, {})
            }
            return json
        },
        error => {
            return Promise.reject(camelizeKeys(error.response))
        }
    )
}


export const CALL_API = 'Call API'

export default store => next => action => {
    const callAPI = action[CALL_API]
    const {popUpMsgWhenSuccess} = action
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let {endpoint} = callAPI
    const {schema, types, query} = callAPI
    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.')
    }
    if (!schema) {
        throw new Error('Specify one of the exported Schemas.')
    }
    // if (!Array.isArray(types) || types.length !== 3) {
    if (!Array.isArray(types)) {
        throw new Error('Expected an array of action types.')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.')
    }

    const actionWith = data => {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }

    if (types.length === 1) {
        return callApi(endpoint, schema, query,)
    }
    
    const [requestType, successType, failureType] = types
    next(actionWith({type: requestType}))
    next({type:COMMON_FETCHING})

    return callApi(endpoint, schema, query).then(
        response => {
            next(actionWith({
                response:{
                    [schema]:response
                },
                type: successType
            }))
            setTimeout(()=>{
                next({
                    type : COMMON_OVER
                })
            },1500)
            

            // const {code,message, status} = (error||{}).data||{}
            // if (status === 401) {
            //     if (apiConfig.debug) {
            //         next(popLogin())
            //     } else {
            //         window.location = '/'
            //     }
            // }
            // next({
            //     type: MSG_SHOW,
            //     msg: message || '服务异常',
            //     showType: 'error'
            // })
            // next(actionWith({
            //     type: failureType,
            //     response: error
            // }))
            // setTimeout(() => {
            //     next({
            //         type : MSG_INIT
            //     })
            //     next({
            //         type : COMMON_OVER
            //     })
            // },1500)

            // return error

            return response
        }
    )
}