import {fetch} from'../getserver/fetch'

export default {
    /**
     * 用户登录
     */
    postContent(params) {
        return fetch('/hengyi/mail/sendMail.do', params, "post")
    },
    
  
}